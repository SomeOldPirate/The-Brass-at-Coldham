#!/usr/bin/env node
/**
 * Build the compendium pack from src/.
 *
 *   node tools/build.mjs
 *
 * Writes packs/brass-at-coldham as a LevelDB database, using the classic-level that ships
 * with Foundry itself. Set FOUNDRY_PATH if Foundry is not installed at ~/foundryvtt.
 * Do not run this while a world that has the module enabled is open: Foundry holds the pack open.
 */

import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { rm, mkdir, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { adventure, MODULE_ID } from "../src/adventure.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const foundryPath = process.env.FOUNDRY_PATH ?? path.join(os.homedir(), "foundryvtt");
const { ClassicLevel } = createRequire(path.join(foundryPath, "package.json"))("classic-level");

const manifest = JSON.parse(await readFile(path.join(root, "module.json"), "utf8"));
const system = manifest.relationships.systems[0];

/* -------------------------------------------- */

const problems = [];
const seen = new Set();

/** Every document needs a well-formed id, and no two may share one. */
function check(doc, where) {
  if ( !/^[A-Za-z0-9]{16}$/.test(doc._id ?? "") ) problems.push(`${where}: bad id "${doc._id}"`);
  if ( seen.has(doc._id) ) problems.push(`${where}: duplicate id "${doc._id}"`);
  seen.add(doc._id);
}

const stats = {
  coreVersion: manifest.compatibility.verified,
  systemId: system.id,
  systemVersion: system.compatibility.verified,
  createdTime: Date.now(),
  modifiedTime: Date.now(),
  lastModifiedBy: null
};

check(adventure, "adventure");
adventure._stats = stats;
for ( const collection of ["actors", "items", "journal", "folders"] ) {
  for ( const doc of adventure[collection] ) {
    check(doc, `${collection}/${doc.name}`);
    doc._stats = stats;
    for ( const embedded of [...(doc.items ?? []), ...(doc.pages ?? [])] ) check(embedded, `${doc.name}/${embedded.name}`);
  }
}

// Every link in the text must point at a document that is in the adventure.
const text = JSON.stringify(adventure);
for ( const [, uuid] of text.matchAll(/@UUID\[([^\]]+)\]/g) ) {
  const id = uuid.split(".").at(-1);
  if ( !seen.has(id) ) problems.push(`broken link: ${uuid}`);
}

if ( problems.length ) {
  console.error(problems.join("\n"));
  process.exit(1);
}

/* -------------------------------------------- */

const dir = path.join(root, "packs", MODULE_ID);
await rm(dir, { recursive: true, force: true });
await mkdir(dir, { recursive: true });

const db = new ClassicLevel(dir, { keyEncoding: "utf8", valueEncoding: "json" });
await db.put(`!adventures!${adventure._id}`, adventure);
await db.compactRange("\x00", "￿");
await db.close();

const count = c => adventure[c].length;
console.log(`Built ${path.relative(root, dir)}: ${count("actors")} actors, ${count("items")} curios, `
  + `${adventure.journal[0].pages.length} journal pages, ${seen.size} documents in all.`);
