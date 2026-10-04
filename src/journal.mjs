/**
 * The scenario text, one journal page per section of the original document.
 * The wording is the scenario's own; only the links to the other documents are added.
 */

import { ids } from "./ids.mjs";

const actor = (id, label) => `@UUID[Actor.${id}]{${label}}`;
const item = (id, label) => `@UUID[Item.${id}]{${label}}`;
const page = (id, label) => `@UUID[JournalEntry.${ids.journal}.JournalEntryPage.${id}]{${label}}`;

export const pages = [
  {
    _id: ids.pages.using,
    name: "Using this module",
    content: `
<p><em>A one-session playtest scenario for Jamesian Dark, for two to four players, set in Norfolk in October 1908. A dead antiquary’s brass rubbing has brought something home with it, and the Investigators have come to finish his work.</em></p>
<p>Everything here is for the GM. What the adventure brought into your world:</p>
<ul>
  <li><strong>${actor(ids.haunting, "The Brass at Coldham")}</strong>, the Haunting. Its sheet holds the transgression, the thing, its tether and the restitution; the narrator’s frame; the five warnings, the six Provenance discoveries and a list of glimpses, to speak from at the table. Each Provenance discovery has a button that posts it to chat as a handout. Its Notes tab is a one-page reference for use during play.</li>
  <li><strong>Four Investigators</strong>: ${actor(ids.hale, "Dr Edmund Hale")}, ${actor(ids.arbery, "Miss Constance Arbery")}, ${actor(ids.pym, "Rev. Francis Pym")} and ${actor(ids.thursby, "Mr George Thursby")}. Assign each to a player from the Actors sidebar (right-click, Configure Ownership). Each sheet’s notes say why they came. Their temptations are on the ${page(ids.pages.investigators, "Investigators")} page and are not printed on the sheets.</li>
  <li><strong>Five Curios</strong> to hand over as they are found, by dragging them onto an Investigator’s sheet: ${item(ids.rubbing, "Fairfax’s rubbing")}, ${item(ids.notebook, "his notebook")}, ${item(ids.letter, "his sealed letter")}, ${item(ids.kirby, "Kirby’s Norfolk Brasses")} and ${item(ids.accounts, "the churchwardens’ accounts")}. Miss Arbery already carries her camera.</li>
  <li><strong>This journal</strong>, the scenario in full.</li>
</ul>
<p>There are no maps. The story happens in conversation, in four places a short walk apart.</p>
<p>To begin, open the Haunting, go to The Matter, and read the narrator’s frame aloud.</p>`
  },
  {
    _id: ids.pages.background,
    name: "Background",
    content: `
<p>Whoever makes an image of Master Adam Pell’s brass takes Pell home with them, and Pell takes their face. That is the whole secret of Coldham.</p>
<p><strong>Master Adam Pell</strong> was rector of St Edmund’s, Coldham, from 1452 to 1479. He was feared in life and rumoured to dabble in things a priest should leave alone. His brass lies in the chancel floor: a tall figure in mass vestments. When he died, his parishioners paid to have its face scraped away, so that nothing of him would look out at them again. Pell has wanted a face ever since. Its inscription ends: <em>Qui me effigiat, me secum ducat</em> — “Whoever makes my likeness, let him lead me with him.”</p>
<p><strong>1688.</strong> A Norwich drawing-master sketched the brass. He was pulled out of the Broad six weeks later, and the coroner’s men would not describe his face. The rector of the day burned the drawing on the brass itself, and the trouble stopped. The churchwardens then had a pew screwed down over the stone and recorded both payments.</p>
<p><strong>1907.</strong> Mr Lionel Fairfax, a quiet antiquary compiling a county survey of monumental brasses for the Norfolk and Norwich Archaeological Society, lodged at the rectory. Against the sexton’s advice he unscrewed the pew, rubbed the brass with heelball, and carried the rubbing back to his room.</p>
<p><strong>December 1907.</strong> Fairfax was found drowned in two feet of water in the dyke beside the causeway. The front of his head was smooth and featureless, the skin unbroken, like brass worn down by centuries of feet. The inquest blamed the eels and recorded misadventure.</p>
<p><strong>Now, October 1908.</strong> His effects still sit, boxed, in his old room at the rectory, including a tin case of rubbings. The pew has not been put back. The face on the rubbing is Fairfax’s. Pell is waiting with it, and he will follow whoever takes it up.</p>`
  },
  {
    _id: ids.pages.thing,
    name: "The thing",
    content: `
<p>Pell wants a face, and every likeness of his brass is a faceless figure waiting for one. Wherever an image is kept, he walks between it and whoever has noticed him, and he means to take that person’s face. He is tall, thin and dry, dressed in something like a chasuble, and where his face should be there is only smooth, scraped skin.</p>
<p>Never describe him whole. Use these instead: the smell of heelball and cold candle; a soft, rhythmic scraping, like wax worked over paper; black waxy smears on doorframes and bedclothes; a touch like old, dry paper; the rustle of a long garment on stairs.</p>
<p><strong>Every image counts.</strong> Fairfax’s rubbing, any new rubbing, a sketch, a photograph. Each one is a door, and Pell follows the person who keeps or makes it.</p>
<p><strong>How he behaves, by an Investigator’s Notice</strong></p>
<table>
  <thead><tr><th>Notice</th><th>What reaches that Investigator</th></tr></thead>
  <tbody>
    <tr><td style="white-space: nowrap">1–2</td><td>Atmosphere only: scraping heard in another room, a smell of wax, the rubbing rolled the other way in the morning.</td></tr>
    <tr><td style="white-space: nowrap">3–4</td><td>Traces: black smears on their door, wet marsh mud on the landing, the face on the rubbing a little more like their own.</td></tr>
    <tr><td>5</td><td>Proximity, when alone: a dry hand on the bedroom latch, a tall shape keeping pace on the causeway, dry fingertips tracing their face in the dark.</td></tr>
    <tr><td>6</td><td>The Visit, the next time they are alone.</td></tr>
  </tbody>
</table>
<p><strong>The rubbing changes.</strong> The figure on Fairfax’s rubbing has Fairfax’s face, though the brass has none. Each morning his features are a little softer, and someone else’s begin to show through: whoever keeps the rubbing, or whoever has handled it most. Anyone who examines it closely makes a Notice roll.</p>`
  },
  {
    _id: ids.pages.investigators,
    name: "The Investigators",
    content: `
<p>The Society has asked them to finish Fairfax’s survey of the Coldham brasses and bring his effects back to Norwich. Each has a reason to be there and a temptation to meddle.</p>
<table>
  <thead><tr><th>Investigator</th><th>Occupation</th><th>Scholarly interest</th><th>Why they came</th><th>Temptation</th></tr></thead>
  <tbody>
    <tr><td>${actor(ids.hale, "Dr Edmund Hale")}</td><td>Fellow of Caius, Cambridge</td><td>Medieval Latin inscriptions</td><td>Fairfax wrote to him about an “imperfect” inscription</td><td>Reading Latin aloud as he deciphers it</td></tr>
    <tr><td>${actor(ids.arbery, "Miss Constance Arbery")}</td><td>Amateur photographer, Society member</td><td>Monumental brasses</td><td>Fairfax’s correspondent; wants the Pell brass for her album</td><td>Rubbing it, or photographing it</td></tr>
    <tr><td>${actor(ids.pym, "Rev. Francis Pym")}</td><td>Curate of St Giles, Norwich</td><td>Parish records</td><td>Fairfax’s friend and executor</td><td>Opening Fairfax’s sealed letter</td></tr>
    <tr><td>${actor(ids.thursby, "Mr George Thursby")}</td><td>Solicitor’s clerk</td><td>Norfolk folklore</td><td>Handling the estate; collects ghost stories</td><td>Going where the sexton says not to</td></tr>
  </tbody>
</table>
<p>Use three for a first playtest. Thursby is a spare, or a replacement after a Visit.</p>
<p><strong>Miss Arbery carries a half-plate camera.</strong> Say so at the start, and don’t remind anyone that a photograph is an image.</p>`
  },
  {
    _id: ids.pages.opening,
    name: "Opening",
    content: `
<p><strong>The frame.</strong> Read this aloud before anything else:</p>
<blockquote><p>“I was asked, many years afterwards, why Miss Arbery’s album has one page left blank, and why Dr Hale would never set foot in Norfolk again. I have put down here what I was told, and I do not pretend to understand all of it.”</p></blockquote>
<p>The players now know the story survived. They do not know who did.</p>
<p><strong>First scene: Friday, late afternoon.</strong> The carrier’s cart leaves the Investigators at Coldham rectory as the light goes over the marsh. The Rev. Arthur Bream greets them warmly and fussily. Mrs Tooley has a fire lit and crumpets ready.</p>
<p>Let the cosy scene run. Bream talks about moths and the damp; he is glad of company. Over tea, Mrs Tooley mentions, unasked, that “poor Mr Fairfax was never right after he brought that paper back from the church. Wanted the lamp left burning, he did.”</p>
<p>End the scene by showing them to their rooms. Fairfax’s boxed effects are in the room next to theirs. The door does not quite shut.</p>`
  },
  {
    _id: ids.pages.places,
    name: "Places and people",
    content: `
<p>Coldham Staithe is a handful of cottages, a pub and a rectory on the edge of the Broads. St Edmund’s stands alone half a mile off, across a raised causeway over the marsh.</p>
<h2>Places</h2>
<ul>
  <li><strong>The rectory.</strong> Damp, comfortable, full of moth cabinets. Holds Fairfax’s room, his tin case of rubbings, his notebook, and the parish chest with the churchwardens’ accounts.</li>
  <li><strong>The causeway.</strong> Raised track with a deep dyke on one side and reeds on the other. Fairfax drowned here. Sea fog comes in after dark.</li>
  <li><strong>St Edmund’s church.</strong> Round flint tower, cold chancel. The Pell brass lies in the floor, the unscrewed pew dragged aside. The last line of the inscription is half-hidden under the pew’s old base rail.</li>
  <li><strong>The Wherry inn.</strong> Low beams, eel-catchers, a good fire. Locals talk freely about Fairfax, less freely about the church.</li>
</ul>
<h2>People</h2>
<ul>
  <li><strong>Rev. Arthur Bream</strong>, rector, 68. Kindly, vague, devoted to moths. Knows nothing of Pell beyond the name. Will open the parish chest gladly.</li>
  <li><strong>Mrs Tooley</strong>, housekeeper, 55. Saw Fairfax’s decline at close quarters: the lamp, the scraping, the black smears she had to scrub off his pillow.</li>
  <li><strong>Ezra Nobbs</strong>, sexton, 74. Grandson of the man who screwed the pew down. Will not enter the chancel. “He wants a face, old Pell. Can’t have ours.”</li>
  <li><strong>Dr Lacey</strong>, village doctor, 50. Gave evidence at the inquest. Blamed the eels at the inquest, but knows the skin was unbroken: “It wasn’t eaten. It simply wasn’t there.” He has never told Bream.</li>
</ul>`
  },
  {
    _id: ids.pages.provenance,
    name: "Provenance discoveries",
    content: `
<p>Every discovery has a safe route, so the mystery is always solvable. The meddling route is faster or gives more, and it raises the stakes.</p>
<table>
  <thead><tr><th>#</th><th>Discovery</th><th>What it reveals</th><th>Safe route</th><th>Meddling route</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>The full inscription</td><td><em>Qui me effigiat, me secum ducat</em>: whoever makes a likeness leads Pell with them</td><td>${item(ids.kirby, "Kirby’s Norfolk Brasses (1838)")} in Bream’s study; the last line is marked “imperfect” but a footnote guesses it</td><td>Prise up the pew rail to read it, or read it aloud from the rubbing</td></tr>
    <tr><td>2</td><td>${item(ids.notebook, "Fairfax’s notebook")}</td><td>His last weeks: scraping at night, the rubbing re-rolled, smears on his pillow, “he is nearer each night”, “I did not know my own face in the glass this morning”</td><td>In his boxed effects</td><td>—</td></tr>
    <tr><td>3</td><td>${item(ids.accounts, "The churchwardens’ accounts, 1688")}</td><td>Payments for “faggots to burn ye picture upon ye stone” and “screwing down ye pew over Mr Pell”, plus an older entry copied in, for “scraping ye face of Mr Pell”: the precedent for laying it to rest</td><td>Parish chest, with Bream’s permission</td><td>—</td></tr>
    <tr><td>4</td><td>Nobbs’s story</td><td>The drawing-master pulled out of the Broad; Pell “wants a face”</td><td>Patience and a pint at the Wherry</td><td>Pressing him in the chancel, which he refuses to enter</td></tr>
    <tr><td>5</td><td>The inquest</td><td>Fairfax drowned in two feet of water, and his face was gone: not torn, simply gone</td><td>Dr Lacey, if asked privately and kindly</td><td>—</td></tr>
    <tr><td>6</td><td>${item(ids.letter, "Fairfax’s sealed letter")}</td><td>Addressed to his sister, never posted. He understood, too late, that the rubbing must go back to the stone</td><td>Bream mentions it; returning it unopened is safe</td><td>Opening it gives the whole answer at once</td></tr>
  </tbody>
</table>
<p><strong>${item(ids.rubbing, "The rubbing itself")}</strong> is not a discovery but the heart of the matter. Examining it is safe; taking it from Fairfax’s room, sleeping near it, or unrolling it in the church is meddling.</p>`
  },
  {
    _id: ids.pages.warnings,
    name: "Warnings and meddling",
    content: `
<p>Coldham is full of warnings. Point to them freely; ignoring one is meddling, and players should be able to see that.</p>
<p><strong>The warnings:</strong> the inscription itself; the pew screwed down for two centuries; Nobbs refusing to enter the chancel; Mrs Tooley’s “never right after he brought that paper back”; the 1688 accounts.</p>
<p><strong>The bargains to offer</strong></p>
<table>
  <thead><tr><th>Meddling act</th><th>What it gets you</th><th>Extra consequence</th></tr></thead>
  <tbody>
    <tr><td>Reading the inscription aloud</td><td>Discovery 1 at once</td><td>None beyond the Meddle die</td></tr>
    <tr><td>Prising up the pew rail</td><td>Discovery 1 at once, from the stone itself</td><td>Nobbs sees it and will not speak to them again</td></tr>
    <tr><td>Opening Fairfax’s sealed letter</td><td>Discovery 6: the full answer</td><td>None beyond the Meddle die</td></tr>
    <tr><td>Taking the rubbing to your own room</td><td>A close study of how it changes</td><td>Pell now follows you, not the empty room</td></tr>
    <tr><td>Making a new rubbing or photograph</td><td>A perfect record of the brass for the survey</td><td>A second image: it must also be burned, or Pell follows its keeper</td></tr>
    <tr><td>Going to the church after dark</td><td>Seeing the stone as Pell sees it</td><td>You are alone on the causeway</td></tr>
  </tbody>
</table>
<p>Offer a bargain whenever the table stalls. Let the photograph be the one they don’t notice.</p>`
  },
  {
    _id: ids.pages.running,
    name: "Running it",
    content: `
<p>The carrier comes back on Monday morning. That gives three days and three nights, and the nights are where the story happens.</p>
<ol>
  <li><strong>Friday evening.</strong> Arrival and the cosy scene. Fairfax’s effects can be examined. Night one: everyone hears scraping from his room. The rubbing is found re-rolled in the morning.</li>
  <li><strong>Saturday.</strong> Investigation in earnest: the church and the brass, the parish chest, the Wherry, Dr Lacey. Make the church visit cold and quiet; the brass’s scraped face should be the first real chill. At some point today, someone who knew Fairfax (ideally Pym) should look closely at the rubbing and recognise his face. Night two: Pell reaches whoever has the highest Notice, at the level their Notice allows.</li>
  <li><strong>Sunday.</strong> Bream takes morning service at St Edmund’s, so everyone is in the church in daylight, with the brass a few feet from the altar rail. The answer should come together today. Night three: anyone at Notice 5 or more who is alone meets Pell close at hand. The burning, if they attempt it, happens tonight.</li>
  <li><strong>Monday morning.</strong> The carrier arrives. Whoever is still at Coldham leaves, one way or another. Play the epilogues.</li>
</ol>
<p><strong>Pacing.</strong> If the table is cautious and Notice stays low, have Bream send someone across the causeway at dusk on an errand, or offer a bargain. If they are reckless and Notice climbs fast, give them the cosy scenes they’ve earned. Company is safe.</p>`
  },
  {
    _id: ids.pages.rest,
    name: "Laying it to rest",
    content: `
<p><strong>The restitution.</strong> Every image of the brass must be laid on the stone and burned there, as in 1688. Then the pew goes back. That is all, and it is enough.</p>
<p><strong>The difficulty.</strong> It has to happen at the church, which means the causeway, probably after dark, carrying the thing Pell follows. Keep the group together and the walk is pure dread; let anyone fall behind and it becomes terror. In the chancel, the heelball smell is overwhelming, and the brass is not quite where the eye expects. The rubbing burns slowly, as if damp, and the face on it is the last thing to go.</p>
<p><strong>The photograph.</strong> If Miss Arbery has photographed the brass and the plate isn’t burned, the rite seems to work. Then, on the carrier’s cart on Monday, she smells cold candle wax. When the plate is developed in Norwich, the brass has a face, and it is hers. Her epilogue starts one band worse.</p>
<p><strong>Leaving instead.</strong> Anyone may simply go: catch the cart early, leave the rubbing behind, never speak of it. Use the Leaving rule. Pell stays with whoever, or whatever room, holds the rubbing.</p>
<p><strong>Epilogues.</strong> Use the bands in the rules. Close by returning to the narrator: “Miss Arbery’s album still has that blank page. Dr Hale, I am told, keeps no pictures of any kind in his rooms.” Adjust the names to whoever survived.</p>`
  },
  {
    _id: ids.pages.playtest,
    name: "Playtest notes",
    content: `
<p>Jot these down after the session; they answer the open questions in the rules.</p>
<ul>
  <li><strong>Meddling frequency.</strong> How many times did each player meddle, and did they do it knowingly? Zero suggests the bargain isn’t tempting enough; constant suggests it’s too cheap.</li>
  <li><strong>Notice pace.</strong> Who reached 5 and 6, and on which night? Ideally someone reaches 5 on Saturday night and the Visit is a live threat on Sunday.</li>
  <li><strong>Legibility.</strong> Did players ask “is this meddling?” Did any meddling feel like a gotcha? If someone asks about the camera, answer honestly; the twist only works if they never think to ask.</li>
  <li><strong>Solitude.</strong> Did the rule shape where people went and who walked the causeway? Did the cosy scenes feel safe?</li>
  <li><strong>The Visit and epilogue bands.</strong> Did the Visit feel fair? Did automatic worst-band epilogues for Visit survivors feel right?</li>
  <li><strong>Safe routes.</strong> Could the group have solved it without meddling at all, and would that have been satisfying?</li>
</ul>`
  }
];

/** The Haunting's Notes tab: what the GM wants in front of them mid-scene. */
export const hauntingNotes = `
<p>The scenario in full is in ${`@UUID[JournalEntry.${ids.journal}]{the journal}`}.</p>
<h3>What reaches an Investigator, by Notice</h3>
<table>
  <tbody>
    <tr><td style="white-space: nowrap">1–2</td><td>Atmosphere only: scraping heard in another room, a smell of wax, the rubbing rolled the other way in the morning.</td></tr>
    <tr><td style="white-space: nowrap">3–4</td><td>Traces: black smears on their door, wet marsh mud on the landing, the face on the rubbing a little more like their own.</td></tr>
    <tr><td>5</td><td>Proximity, when alone: a dry hand on the bedroom latch, a tall shape keeping pace on the causeway, dry fingertips tracing their face in the dark.</td></tr>
    <tr><td>6</td><td>The Visit, the next time they are alone.</td></tr>
  </tbody>
</table>
<p><strong>The rubbing changes.</strong> The figure on Fairfax’s rubbing has Fairfax’s face, though the brass has none. Each morning his features are a little softer, and someone else’s begin to show through: whoever keeps the rubbing, or whoever has handled it most. Anyone who examines it closely makes a Notice roll.</p>
<h3>Where each discovery is found</h3>
<table>
  <thead><tr><th>#</th><th>Safe route</th><th>Meddling route</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Kirby’s <em>Norfolk Brasses</em> (1838) in Bream’s study; the last line is marked “imperfect” but a footnote guesses it</td><td>Prise up the pew rail to read it, or read it aloud from the rubbing</td></tr>
    <tr><td>2</td><td>In Fairfax’s boxed effects</td><td>—</td></tr>
    <tr><td>3</td><td>Parish chest, with Bream’s permission</td><td>—</td></tr>
    <tr><td>4</td><td>Patience and a pint at the Wherry</td><td>Pressing Nobbs in the chancel, which he refuses to enter</td></tr>
    <tr><td>5</td><td>Dr Lacey, if asked privately and kindly</td><td>—</td></tr>
    <tr><td>6</td><td>Bream mentions it; returning it unopened is safe</td><td>Opening it gives the whole answer at once</td></tr>
  </tbody>
</table>
<p><strong>The rubbing itself.</strong> Examining it is safe; taking it from Fairfax’s room, sleeping near it, or unrolling it in the church is meddling.</p>
<h3>The bargains to offer</h3>
<table>
  <thead><tr><th>Meddling act</th><th>What it gets you</th><th>Extra consequence</th></tr></thead>
  <tbody>
    <tr><td>Reading the inscription aloud</td><td>Discovery 1 at once</td><td>None beyond the Meddle die</td></tr>
    <tr><td>Prising up the pew rail</td><td>Discovery 1 at once, from the stone itself</td><td>Nobbs sees it and will not speak to them again</td></tr>
    <tr><td>Opening Fairfax’s sealed letter</td><td>Discovery 6: the full answer</td><td>None beyond the Meddle die</td></tr>
    <tr><td>Taking the rubbing to your own room</td><td>A close study of how it changes</td><td>Pell now follows you, not the empty room</td></tr>
    <tr><td>Making a new rubbing or photograph</td><td>A perfect record of the brass for the survey</td><td>A second image: it must also be burned, or Pell follows its keeper</td></tr>
    <tr><td>Going to the church after dark</td><td>Seeing the stone as Pell sees it</td><td>You are alone on the causeway</td></tr>
  </tbody>
</table>
<p>Offer a bargain whenever the table stalls. Let the photograph be the one they don’t notice.</p>
<h3>The nights</h3>
<ul>
  <li><strong>Friday.</strong> Everyone hears scraping from Fairfax’s room. The rubbing is found re-rolled in the morning.</li>
  <li><strong>Saturday.</strong> By day, someone who knew Fairfax (ideally Pym) should look closely at the rubbing and recognise his face. At night, Pell reaches whoever has the highest Notice, at the level their Notice allows.</li>
  <li><strong>Sunday.</strong> Anyone at Notice 5 or more who is alone meets Pell close at hand. The burning, if they attempt it, happens tonight.</li>
</ul>
<p><strong>The photograph.</strong> If Miss Arbery has photographed the brass and the plate isn’t burned, the rite seems to work. When the plate is developed in Norwich, the brass has a face, and it is hers. Her epilogue starts one band worse.</p>`;
