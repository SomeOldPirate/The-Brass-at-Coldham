/**
 * Fixed document ids, so that links between documents survive a rebuild
 * and re-importing the adventure updates documents rather than duplicating them.
 * Foundry ids are exactly sixteen letters and digits.
 */

const id = slug => `bac${slug}`.padEnd(16, "0");

export const ids = {
  adventure: id("Adventure"),

  folders: {
    actors: id("FolderActors"),
    items: id("FolderItems")
  },

  haunting: id("Haunting"),
  hale: id("Hale"),
  arbery: id("Arbery"),
  pym: id("Pym"),
  thursby: id("Thursby"),

  rubbing: id("Rubbing"),
  notebook: id("Notebook"),
  letter: id("Letter"),
  kirby: id("Kirby"),
  accounts: id("Accounts"),
  camera: id("Camera"),

  journal: id("Journal"),
  pages: {
    using: id("PgUsing"),
    background: id("PgBackground"),
    thing: id("PgThing"),
    investigators: id("PgCompany"),
    opening: id("PgOpening"),
    places: id("PgPlaces"),
    provenance: id("PgProvenance"),
    warnings: id("PgWarnings"),
    running: id("PgRunning"),
    rest: id("PgRest"),
    playtest: id("PgPlaytest")
  },

  /** An entry in one of the Haunting's lists. */
  entry: (list, n) => id(`${list}${n}`)
};
