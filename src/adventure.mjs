/**
 * The Brass at Coldham, as one Foundry Adventure document.
 * Field names follow the Jamesian Dark data models (investigator, haunting, curio).
 */

import { ids } from "./ids.mjs";
import { pages, hauntingNotes } from "./journal.mjs";

export const MODULE_ID = "brass-at-coldham";
const SYSTEM_ID = "jamesian-dark";
const TITLE = "The Brass at Coldham";

const icon = name => `systems/${SYSTEM_ID}/assets/icons/${name}.svg`;
const cover = `modules/${MODULE_ID}/assets/cover.svg`;
const banner = `modules/${MODULE_ID}/assets/banner.svg`;

/* -------------------------------------------- */
/*  The Haunting                                */
/* -------------------------------------------- */

const frame = "I was asked, many years afterwards, why Miss Arbery’s album has one page left blank, and why Dr Hale would never set foot in Norfolk again. I have put down here what I was told, and I do not pretend to understand all of it.";

// Delivered to the table as written, so each is worded for the players.
const warnings = [
  "The inscription on the brass: Qui me effigiat, me secum ducat. “Whoever makes my likeness, let him lead me with him.”",
  "The pew over Master Pell’s brass was screwed down for two centuries.",
  "Ezra Nobbs, the sexton, will not enter the chancel. “He wants a face, old Pell. Can’t have ours.”",
  "Mrs Tooley: “Poor Mr Fairfax was never right after he brought that paper back from the church. Wanted the lamp left burning, he did.”",
  "The churchwardens’ accounts for 1688: “faggots to burn ye picture upon ye stone”, and “screwing down ye pew over Mr Pell”."
];

// Revealed to the table as written: what each discovery tells them. The routes are in the notes.
const provenance = [
  ["The full inscription", "Qui me effigiat, me secum ducat: whoever makes a likeness leads Pell with them."],
  ["Fairfax’s notebook", "His last weeks: scraping at night, the rubbing re-rolled, smears on his pillow, “he is nearer each night”, “I did not know my own face in the glass this morning.”"],
  ["The churchwardens’ accounts, 1688", "Payments for “faggots to burn ye picture upon ye stone” and “screwing down ye pew over Mr Pell”, plus an older entry copied in, for “scraping ye face of Mr Pell”: the precedent for laying it to rest."],
  ["Nobbs’s story", "The drawing-master pulled out of the Broad; Pell “wants a face.”"],
  ["The inquest", "Fairfax drowned in two feet of water, and his face was gone: not torn, simply gone."],
  ["Fairfax’s sealed letter", "Addressed to his sister, never posted. He understood, too late, that the rubbing must go back to the stone."]
];

// Never describe him whole. In rough order of nearness.
const glimpses = [
  "The smell of heelball and cold candle.",
  "A soft, rhythmic scraping, like wax worked over paper.",
  "The rubbing, rolled the other way in the morning.",
  "Black waxy smears on doorframes and bedclothes.",
  "Wet marsh mud on the landing.",
  "The face on the rubbing, a little more like your own.",
  "The rustle of a long garment on stairs.",
  "A dry hand on the bedroom latch.",
  "A tall shape keeping pace on the causeway.",
  "Dry fingertips tracing your face in the dark.",
  "A touch like old, dry paper."
];

const haunting = {
  _id: ids.haunting,
  name: TITLE,
  type: "haunting",
  img: cover,
  folder: ids.folders.actors,
  sort: 100000,
  system: {
    transgression: "In 1907 Mr Lionel Fairfax, against the sexton’s advice, unscrewed the pew over Master Adam Pell’s brass in St Edmund’s, rubbed the brass with heelball, and carried the rubbing back to his room at the rectory. That December he was found drowned in the dyke beside the causeway, the front of his head smooth and featureless, the skin unbroken, like brass worn down by centuries of feet.",
    thing: "Master Adam Pell, rector of St Edmund’s from 1452 to 1479. Tall, thin and dry, dressed in something like a chasuble, and where his face should be there is only smooth, scraped skin. He wants a face: he walks between his likeness and whoever has noticed him, and he means to take that person’s face.",
    tether: "Every image of the brass: Fairfax’s rubbing, any new rubbing, a sketch, a photograph. Each one is a door, and Pell follows the person who keeps or makes it.",
    restitution: "Every image of the brass must be laid on the stone and burned there, as in 1688. Then the pew goes back. That is all, and it is enough.",
    frame,
    escalation: 0,
    laidToRest: false,
    warnings: warnings.map((text, i) => ({ id: ids.entry("Warn", i + 1), text })),
    provenance: provenance.map(([title, text], i) => ({ id: ids.entry("Prov", i + 1), title, text, found: false })),
    glimpses: glimpses.map((text, i) => ({ id: ids.entry("Glimpse", i + 1), text })),
    notes: hauntingNotes
  }
};

/* -------------------------------------------- */
/*  The Investigators                           */
/* -------------------------------------------- */

const brief = "The Norfolk and Norwich Archaeological Society has asked you to finish the late Mr Fairfax’s survey of the Coldham brasses and bring his effects back to Norwich.";

/**
 * The sheet's notes carry the brief and why this Investigator came.
 * The temptations stay with the GM: Miss Arbery's would give away the photograph.
 */
function investigator(_id, name, occupation, interest, why, sort, items = []) {
  return {
    _id, name, type: "investigator",
    img: icon("investigator"),
    folder: ids.folders.actors,
    sort,
    system: {
      occupation, interest,
      notice: { value: 1 },
      notes: `<p>${brief}</p><p><strong>Why you came.</strong> ${why}</p>`
    },
    items
  };
}

function curio(_id, name, origin, description, sort) {
  return {
    _id, name, type: "curio",
    img: icon("curio"),
    sort,
    system: { origin, description: `<p>${description}</p>` }
  };
}

const camera = curio(ids.camera, "Half-plate camera", "",
  "A half-plate camera with its tripod, dark cloth and a case of glass plates.", 100000);

const investigators = [
  investigator(ids.hale, "Dr Edmund Hale", "Fellow of Caius, Cambridge", "Medieval Latin inscriptions",
    "Fairfax wrote to you about an “imperfect” inscription.", 200000),
  investigator(ids.arbery, "Miss Constance Arbery", "Amateur photographer, Society member", "Monumental brasses",
    "You were Fairfax’s correspondent, and you want the Pell brass for your album.", 300000, [camera]),
  investigator(ids.pym, "Rev. Francis Pym", "Curate of St Giles, Norwich", "Parish records",
    "You were Fairfax’s friend, and you are his executor.", 400000),
  investigator(ids.thursby, "Mr George Thursby", "Solicitor’s clerk", "Norfolk folklore",
    "You are handling the estate, and you collect ghost stories.", 500000)
];

/* -------------------------------------------- */
/*  Curios                                      */
/* -------------------------------------------- */

// A player sees the description once the Curio is handed to them, so each says only what they would learn.
const items = [
  curio(ids.rubbing, "Fairfax’s rubbing of the Pell brass", "Fairfax’s room at the rectory, in his tin case of rubbings",
    "A heelball rubbing of the brass of Master Adam Pell, rector of St Edmund’s, Coldham, 1452 to 1479: a tall figure in mass vestments, its face plain to see.", 100000),
  curio(ids.notebook, "Fairfax’s notebook", "Fairfax’s room at the rectory, among his boxed effects",
    "His last weeks: scraping at night, the rubbing re-rolled, smears on his pillow, “he is nearer each night”, “I did not know my own face in the glass this morning.”", 200000),
  curio(ids.letter, "Fairfax’s sealed letter", "Coldham rectory, among Fairfax’s effects",
    "Sealed, addressed to his sister, and never posted.", 300000),
  curio(ids.kirby, "Kirby’s Norfolk Brasses (1838)", "The Rev. Mr Bream’s study at the rectory",
    "The entry for Coldham gives the inscription on the Pell brass. The last line is marked “imperfect”, but a footnote guesses it: <em>Qui me effigiat, me secum ducat</em>.", 400000),
  curio(ids.accounts, "The churchwardens’ accounts, 1688", "The parish chest at the rectory",
    "Payments for “faggots to burn ye picture upon ye stone” and for “screwing down ye pew over Mr Pell”, and an older entry copied in, for “scraping ye face of Mr Pell”.", 500000)
].map(i => ({ ...i, folder: ids.folders.items }));

/* -------------------------------------------- */
/*  The journal                                 */
/* -------------------------------------------- */

const journal = {
  _id: ids.journal,
  name: TITLE,
  sort: 100000,
  pages: pages.map((p, i) => ({
    _id: p._id,
    name: p.name,
    type: "text",
    title: { show: true, level: 1 },
    text: { format: 1, content: p.content.trim() },
    sort: (i + 1) * 100000
  }))
};

/* -------------------------------------------- */
/*  The adventure                               */
/* -------------------------------------------- */

const folder = (_id, type) => ({ _id, name: TITLE, type, sorting: "m", sort: 100000 });

export const adventure = {
  _id: ids.adventure,
  name: TITLE,
  img: banner,
  caption: "<p>A one-session playtest scenario for Jamesian Dark, for two to four players, set in Norfolk in October 1908.</p>",
  description: "<p>A dead antiquary’s brass rubbing has brought something home with it, and the Investigators have come to finish his work.</p><p>Importing brings in the Haunting with its warnings, Provenance discoveries and glimpses filled in; four Investigators ready to hand out; the Curios they may find; and the whole scenario as a journal for the GM.</p>",
  actors: [haunting, ...investigators],
  items,
  journal: [journal],
  folders: [folder(ids.folders.actors, "Actor"), folder(ids.folders.items, "Item")],
  sort: 0
};
