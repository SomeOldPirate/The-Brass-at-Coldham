/**
 * The scenario text, one journal page per section of the original document.
 * The wording is the scenario's own; only the links to the other documents are added.
 */

import { ids } from "./ids.mjs";

const actor = (id, label) => `@UUID[Actor.${id}]{${label}}`;
const item = (id, label) => `@UUID[Item.${id}]{${label}}`;
const page = (id, label) => `@UUID[JournalEntry.${ids.journal}.JournalEntryPage.${id}]{${label}}`;

/** Fairfax's letter to Hale, the handout given to Hale's player at the start. */
export const haleLetter = "Coldham Rectory, August 1908. My dear Hale, — St Edmund’s has a fine priest of about 1470, and an inscription Kirby marks imperfect, the last line being under the squire’s pew. Kirby guesses <em>pro me oret</em>, and says old Pell positively asks to be rubbed. I mean to have the pew up and settle it. Your eye on the result would oblige me greatly. — L. Fairfax";

/** Fairfax's sealed letter to his sister, given only to whoever opens it (Discovery 6). */
export const sealedLetter = `<p>Coldham Rectory,<br>Tuesday night, 13th October 1908</p>
<p>My dear Agnes,</p>
<p>I have begun this letter four times and burned three. I will finish this one, and you may think what you like of your brother when you read it.</p>
<p>You know I came here for the brasses. There is one in the chancel, a priest named Pell, shut in under the squire’s pew since the time of James the Second. Kirby printed most of the inscription and guessed the rest: a request for prayers, he said, and an invitation to the brass-rubber. I believed him. I was so pleased with it that I wrote to Hale of Caius to boast. On the second of September I had the pew up and the rail off, and I rubbed it.</p>
<p>The last line was spoilt, all screw holes and rust. Only <em>me secum d—</em> was left on the brass. But on my paper the word is whole. <em>Ducat.</em> <em>Qui me effigiat, me secum ducat</em>: whoever makes my likeness, let him lead me with him. Heelball cannot take up a letter that is not there, Agnes. I have tried for six weeks to believe otherwise.</p>
<p>I have led him here. He walks at night between my room and the paper. He scrapes, as I scraped, and he leaves black wax on the door and on my pillow. The brass has no face (his own parish scraped it off, and I begin to understand them), but the figure on my rubbing has one now, and it is mine. This morning I did not know my own face in the glass. It is not that it is changed. It is that there is less of it.</p>
<p>The churchwardens’ accounts are in the old chest in the vestry. In 1688 a drawing-master from Norwich sketched the brass, and six weeks later they took him out of the Broad. Old Nobbs told me that nobody would describe his face. The rector burned the drawing upon the stone, and the trouble stopped. It must be upon the stone. I tried my own grate, and in the morning the paper was whole.</p>
<p>Tomorrow is the fourteenth. It is six weeks to the day since I took the rubbing, and it is the day Pell died. I mean to carry the rubbing to the church by daylight and burn it on the brass, and I will ask Nobbs to come with me. He has never come while anyone else was in the room. If I do it, I shall burn this letter too, and you will never read it.</p>
<p>If you are reading it, then I did not. Whoever has my things must do it for me: lay the paper on the brass and burn it there, and every other likeness of it with it, and then put the pew back over him. Do not go alone. Do not make another likeness. And if they tell you not to look at me, my dear, do not look.</p>
<p>Your loving brother,<br>Lionel</p>`;

/** The inscription on the brass, the handout given when the Investigators first examine it. */
export const inscription = `<p><em>Orate pro anima Magistri Ade Pell quondam rectoris huius ecclesie qui obiit xiiij die Octobris Anno Domini M CCCC lxxix cuius anime propicietur deus Amen. Qui me effigiat</em></p>
<p><em>…me secum d…</em></p>
<p>“Pray for the soul of Master Adam Pell, sometime rector of this church, who died on the 14th day of October in the year of our Lord 1479, on whose soul may God have mercy. Amen. Whoever makes my likeness… me with him…”</p>`;

export const pages = [
  {
    _id: ids.pages.using,
    name: "Using this module",
    content: `
<p><em>A one-session playtest scenario for Jamesian Dark, for a GM and one to three players, set in Norfolk in October 1908. A dead antiquary’s brass rubbing has brought something home with it, and the Investigators have come to finish his work.</em></p>
<p>Everything here is for the GM. What the adventure brought into your world:</p>
<ul>
  <li><strong>${actor(ids.haunting, "The Brass at Coldham")}</strong>, the Haunting. Its sheet holds the transgression, the thing, its tether and the restitution; how Pell draws people apart; the narrator’s frame; the five warnings, the bargains (meddling and solitude), the six Provenance discoveries and a list of glimpses, to speak from at the table. Each Provenance discovery has a button that posts it to chat as a handout. Its Notes tab is a one-page reference for use during play.</li>
  <li><strong>Four Investigators</strong>: ${actor(ids.hale, "Dr Edmund Hale")}, ${actor(ids.arbery, "Miss Constance Arbery")}, ${actor(ids.pym, "Rev. Francis Pym")} and ${actor(ids.thursby, "Mr George Thursby")}. Assign each to a player from the Actors sidebar (right-click, Configure Ownership). Each sheet’s notes say why they came. Their temptations are on the ${page(ids.pages.investigators, "Investigators")} page and are not printed on the sheets.</li>
  <li><strong>Seven Curios</strong> to hand over as they are found, by dragging them onto an Investigator’s sheet: ${item(ids.inscription, "the inscription on the brass")}, ${item(ids.rubbing, "Fairfax’s rubbing")}, ${item(ids.notebook, "his notebook")}, ${item(ids.letter, "his sealed letter")} (and, only for whoever opens it, ${item(ids.letterOpened, "the letter itself")}), ${item(ids.kirby, "Kirby’s Norfolk Brasses")} and ${item(ids.accounts, "the churchwardens’ accounts")}. Miss Arbery already carries her camera, and Dr Hale ${item(ids.haleLetter, "Fairfax’s letter")}.</li>
  <li><strong>This journal</strong>, the scenario in full.</li>
</ul>
<p>The scenario has one loose end, the photograph (see ${page(ids.pages.rest, "Laying it to rest")}). If it applies, tick <em>A loose end</em> under the epilogue on Miss Arbery’s sheet, and the system moves her one band worse.</p>
<p>There are no maps. The story happens in conversation, in four places a short walk apart.</p>
<p>To begin, open the Haunting, go to The Matter, and read the narrator’s frame aloud.</p>`
  },
  {
    _id: ids.pages.background,
    name: "Background",
    content: `
<p>Whoever makes an image of Master Adam Pell’s brass takes Pell home with them, and Pell takes their face. That is the whole secret of Coldham.</p>
<p><strong>Master Adam Pell</strong> was rector of St Edmund’s, Coldham, from 1452 to 1479. He was feared in life and rumoured to dabble in things a priest should leave alone. As a young clerk he had served Thomas Southwell, the Westminster canon who died in the Tower in 1441 after the Duchess of Gloucester’s necromancy trial. A remote Norfolk living was where such a man went to be forgotten. His brass lies in the chancel floor: a tall figure in mass vestments. When he died, his parishioners paid to have its face scraped away, so that nothing of him would look out at them again. Pell has wanted a face ever since. Its inscription ends: <em>Qui me effigiat, me secum ducat</em> — “Whoever makes my likeness, let him lead me with him.”</p>
<p><strong>1688.</strong> A Norwich drawing-master sketched the brass. He was pulled out of the Broad six weeks later, and the coroner’s men would not describe his face. The rector of the day burned the drawing on the brass itself, and the trouble stopped. The churchwardens then set the squire’s new box pew, a great panelled square nine feet across, over the stone, with the brass inside it. The bottom rail of its west side ran across the foot of the slab, and the carpenters drove its long screws straight through the last line of the inscription. Having taken his face, the parish now silenced his words. The churchwardens recorded every payment.</p>
<p><strong>1838.</strong> Kirby’s <em>Norfolk Brasses</em> records the brass from inside the squire’s pew. The last line lies under the rail, so Kirby prints the inscription as far as <em>Qui me effigiat…</em>, marks the brass “imperfect”, and guesses the rest in a footnote: <em>pro me oret</em>, “let him pray for me”. It is the commonest sentiment on medieval brasses, and it fits the space. “A pleasing sentiment,” he adds, “and one the brass-rubber may take as an invitation.” He blames the scraped face on Puritan zeal, and notes that Mr Cotman’s <em>Sepulchral Brasses</em> (1819) omits Coldham altogether, the brass being then within the Squire’s seat. The true words are <em>me secum ducat</em>.</p>
<p><strong>August–September 1908.</strong> Mr Lionel Fairfax, a quiet antiquary compiling a county survey of monumental brasses for the Norfolk and Norwich Archaeological Society, lodged at the rectory. Kirby’s footnote charmed him, and in August he wrote to Dr Hale that old Pell “positively asks to be rubbed”. In early September, against the sexton’s advice, he unscrewed the squire’s pew, dragged it aside and took up the rail. The last line beneath was pierced with screw holes and rotted with rust; only <em>…me secum d…</em> survived. He rubbed the brass with heelball anyway and carried the rubbing back to his room. On the rubbing, the lost word is whole.</p>
<p><strong>Mid-October 1908.</strong> Six weeks later, exactly as long as the drawing-master lasted, Fairfax was found drowned in two feet of water in the dyke beside the causeway. The front of his head was smooth and featureless, the skin unbroken, like brass worn down by centuries of feet. The inquest blamed the eels and recorded misadventure. His body went home to Norwich by train in a sealed coffin, and he was buried in the family plot a week ago. The undertaker advised his sister not to view him.</p>
<p><strong>Now, late October 1908.</strong> About a fortnight after his death, his effects sit boxed in his old room at the rectory, including a tin case of rubbings. The pew has not been put back, and the rail lies loose across the slab where Fairfax dropped it. The churchwardens have not yet met, and nobody wants to be the one who touches either. The face on the rubbing is Fairfax’s. Pell is waiting with it, and he will follow whoever takes it up.</p>`
  },
  {
    _id: ids.pages.history,
    name: "Historical grounding",
    content: `
<p>James anchored his stories in real scholarship and set invented sources beside real ones. Coldham does the same. Use these to answer the players’ questions with confidence; the notes say which parts are real and which are ours.</p>
<p><strong>The antiquaries.</strong> <em>Real:</em> John Sell Cotman, the Norwich painter and drawing teacher, published <em>Sepulchral Brasses in Norfolk and Suffolk</em> in 1819. In September 1780 Craven Ord toured East Anglia with Richard Gough and Sir John Cullum, taking impressions of brasses with printer’s ink and damp paper for Gough’s <em>Sepulchral Monuments of Great Britain</em>. <em>Invented:</em> Cotman omitted Coldham, and Ord’s party was refused the key to the squire’s pew. Kirby’s <em>Norfolk Brasses</em> (1838) is ours too.</p>
<p><strong>A parallel case.</strong> <em>Real:</em> William of Newburgh, writing about 1197, tells of a worldly chaplain nicknamed the Hundeprest, the “dog-priest”, who rose from his grave at Melrose Abbey and haunted the woman he had kept. The monks dug him up, carried him off consecrated ground and burned him. This is exactly what a 5 on an Investigating roll should turn up: a bad priest who walked, and the answer was fire. James himself edited medieval ghost stories of this kind, the Byland Abbey tales, in 1922.</p>
<p><strong>Image magic.</strong> <em>Real:</em> in 1324 the necromancer John of Nottingham made wax images of Edward II, the Despensers and the Prior of Coventry, and tested his art by driving a pin into the image of a local man, who was said to have died. In 1441 Eleanor Cobham, Duchess of Gloucester, fell over treasonable necromancy against Henry VI; her astrologers were Roger Bolingbroke, an Oxford priest, and Thomas Southwell, a canon of St Stephen’s, Westminster, who died in the Tower. <em>Invented:</em> Pell served Southwell as a young clerk. The medieval belief was that a likeness binds the one it shows. Pell’s inscription turns it round: the likeness binds Pell to whoever makes it. ${actor(ids.hale, "Hale")} knows the Cobham case; a competent reading of Pell’s career connects him to it.</p>
<p><strong>The damage.</strong> <em>Real:</em> in 1643–44 William Dowsing visited more than 250 churches in Suffolk and Cambridgeshire, removing “superstitious inscriptions”; his journal records taking away “2 popish Inscriptions with Ora pro nobis”. Norfolk suffered its own iconoclasm in the same years. <em>Invented:</em> Kirby, like any Victorian, blames Pell’s scraped face and pierced last line on the Puritans. ${item(ids.accounts, "The churchwardens’ accounts")} show the truth: the parish did it, out of fear rather than doctrine, the face in Pell’s own time and the screws in 1688.</p>
<p><strong>The records.</strong> <em>Real:</em> in 1908 there were no county record offices; parish records stayed in the parish. The old ones lived in an oak parish chest in the church, traditionally with three locks, the keys held by the incumbent and the two churchwardens, so that no one could open it alone. After Rose’s Act of 1812, registers in current use were kept in an iron box, often in the rector’s own house. <em>Ours:</em> Coldham follows the custom, with the usual country laxity: the churchwardens’ keys have long lived with the sexton.</p>
<p><strong>The lantern men.</strong> <em>Real:</em> East Anglian fen folklore tells of lights that lure travellers to their deaths in the reed beds. They come to whistling, and the remedy is to lie face down with your mouth in the mud. <em>Ours:</em> this is the village’s explanation for Fairfax, found face down in two feet of water beside the causeway. At the Wherry they say he was whistling after dark. It is comfortable, it is wrong, and it hides the truth. Nobbs knows better and will not say so in the pub.</p>
<p><strong>The inscription.</strong> Pell’s inscription follows the real formula: a request for prayers, name and office, date of death, a closing blessing. That is why Kirby’s guess is so natural. Pell died on 14 October, so if Fairfax rubbed the brass on 2 September, the six weeks end on the anniversary. Fairfax’s sealed letter makes it exact: he rubbed the brass on Wednesday 2 September and drowned on Wednesday 14 October.</p>
<p><strong>For more colour:</strong> James’s own <em>Suffolk and Norfolk</em> (1930) is a guide to the two counties’ churches, full of real detail to borrow for St Edmund’s.</p>`
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
<p><strong>The rubbing changes.</strong> The figure on Fairfax’s rubbing has Fairfax’s face, though the brass has none. Each morning his features are a little softer, and someone else’s begin to show through: whoever keeps the rubbing, or whoever has handled it most. Anyone who examines it closely makes a Notice roll.</p>
<p><strong>The rubbing is complete.</strong> Where the brass has only screw holes, the rubbing shows the last word whole: <em>ducat</em>, crisp and black. Heelball cannot take up letters that are not there. This is the moment the players should realise the rubbing is not a copy.</p>`
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
<p><strong>Miss Arbery carries a half-plate camera.</strong> Say so at the start, and don’t remind anyone that a photograph is an image.</p>
<p><strong>${item(ids.haleLetter, "Fairfax’s letter to Hale")}.</strong> Give this to Hale’s player at the start:</p>
<blockquote><p>${haleLetter}</p></blockquote>
<p><strong>${item(ids.inscription, "The inscription")}.</strong> Give this when the Investigators first examine the brass. It runs in black-letter round the edge of the slab; the last line, along the foot, is pierced with screw holes.</p>
<blockquote>${inscription}</blockquote>
<p><strong>${item(ids.letter, "Fairfax’s sealed letter")}.</strong> Give this only to whoever opens it (Discovery 6), as ${item(ids.letterOpened, "Fairfax’s letter to his sister")}. Opening it is meddling.</p>
<blockquote>${sealedLetter}</blockquote>`
  },
  {
    _id: ids.pages.opening,
    name: "Opening",
    content: `
<p><strong>The frame.</strong> Read this aloud before anything else:</p>
<blockquote><p>“I was asked, many years afterwards, why Miss Arbery’s album has one page left blank, and why Dr Hale would never set foot in Norfolk again. I have put down here what I was told, and I do not pretend to understand all of it.”</p></blockquote>
<p>The players now know the story survived. They do not know who did.</p>
<p><strong>First scene: a Friday in late October, late afternoon.</strong> The carrier’s cart leaves the Investigators at Coldham rectory as the light goes over the marsh. The Rev. Arthur Bream greets them warmly and fussily. Mrs Tooley has a fire lit and crumpets ready.</p>
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
  <li><strong>The rectory.</strong> Damp, comfortable, full of moth cabinets. Holds Fairfax’s room, his tin case of rubbings and his notebook. The registers in current use sit in an iron box in Bream’s study.</li>
  <li><strong>The causeway.</strong> Raised track with a deep dyke on one side and reeds on the other. Fairfax drowned here. Sea fog comes in after dark.</li>
  <li><strong>St Edmund’s church.</strong> Round flint tower, cold chancel. The Pell brass lies in the floor inside a pale square of unworn stone. The squire’s box pew that stood around it for two centuries has been dragged aside, and the bottom rail of its west side lies loose across the slab. Where the rail sat, the last line of the inscription is pierced with screw holes and rotted with rust: only <em>…me secum d…</em> can be read. The vestry, off the chancel, holds the old oak parish chest with its three locks: Bream keeps one key, and the churchwardens’ two are in Nobbs’s keeping. The churchwardens’ accounts, 1688 included, are inside.</li>
  <li><strong>The Wherry inn.</strong> Low beams, eel-catchers, a good fire. Locals talk freely about Fairfax (he was whistling on the causeway after dark, they say, and the lantern men had him), less freely about the church.</li>
</ul>
<h2>People</h2>
<ul>
  <li><strong>Rev. Arthur Bream</strong>, rector, 68. Kindly, vague, devoted to moths. Knows nothing of Pell beyond the name. Lends his key to the parish chest gladly, and sends them to Nobbs for the other two.</li>
  <li><strong>Mrs Tooley</strong>, housekeeper, 55. Saw Fairfax’s decline at close quarters: the lamp, the scraping, the black smears she had to scrub off his pillow.</li>
  <li><strong>Ezra Nobbs</strong>, sexton, 74. His family have been sextons since the squire’s pew was set over the stone. Keeps the churchwardens’ keys to the parish chest. Will not enter the chancel, so he hands the keys over at the chancel door. “He wants a face, old Pell. Can’t have ours.”</li>
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
    <tr><td>1</td><td>The full inscription</td><td><em>Qui me effigiat, me secum ducat</em>: whoever makes a likeness leads Pell with them</td><td>The pierced brass (<em>…me secum d…</em>) set against ${item(ids.kirby, "Kirby’s Norfolk Brasses (1838)")} in Bream’s study, whose footnote guesses the harmless <em>pro me oret</em>. The contradiction is the clue: a competent reading supplies <em>ducat</em>. A close look at the rubbing also shows the word whole (with a Notice roll)</td><td>Read it aloud, or unroll the rubbing on the brass, where the lost word lies exactly over the screw holes</td></tr>
    <tr><td>2</td><td>${item(ids.notebook, "Fairfax’s notebook")}</td><td>His last weeks: scraping at night, the rubbing re-rolled, smears on his pillow, “he is nearer each night”, “I did not know my own face in the glass this morning”</td><td>In his boxed effects</td><td>—</td></tr>
    <tr><td>3</td><td>${item(ids.accounts, "The churchwardens’ accounts, 1688")}</td><td>Payments for “faggots to burn ye picture upon ye stone”, “setting ye Squire’s pew over Mr Pell” and “long skrewes to fasten ye same through Mr Pell his writing”, plus an older entry copied in, for “scraping ye face of Mr Pell”: the precedent for laying it to rest</td><td>The parish chest in the vestry: Bream’s key, and the churchwardens’ keys from Nobbs</td><td>—</td></tr>
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
<p><strong>The warnings:</strong> the inscription itself; the pew screwed down over him for two centuries, its screws driven through his words; Nobbs refusing to enter the chancel; Mrs Tooley’s “never right after he brought that paper back”; the 1688 accounts.</p>
<p><strong>The bargains to offer</strong></p>
<table>
  <thead><tr><th>Meddling act</th><th>What it gets you</th><th>Extra consequence</th></tr></thead>
  <tbody>
    <tr><td>Reading the inscription aloud</td><td>Discovery 1 at once</td><td>None beyond the Meddle die</td></tr>
    <tr><td>Unrolling the rubbing on the brass</td><td>Discovery 1 at once: the lost word lies exactly over the screw holes</td><td>Nobbs sees it and will not speak to them again</td></tr>
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
  <li><strong>Saturday.</strong> Investigation in earnest: the church and the brass, the parish chest in the vestry, the Wherry, Dr Lacey. Make the church visit cold and quiet; the brass’s scraped face should be the first real chill. At some point today, someone who knew Fairfax (ideally Pym) should look closely at the rubbing and recognise his face. Night two: Pell reaches whoever has the highest Notice, at the level their Notice allows.</li>
  <li><strong>Sunday.</strong> Bream takes morning service at St Edmund’s, so everyone is in the church in daylight, with the brass a few feet from the altar rail. The answer should come together today. Night three: anyone at Notice 5 or more who is alone meets Pell close at hand. The burning, if they attempt it, happens tonight.</li>
  <li><strong>Monday morning.</strong> The carrier arrives. Whoever is still at Coldham leaves, one way or another. Play the epilogues.</li>
</ol>
<p><strong>Pacing.</strong> If the table is cautious and Notice stays low, have Bream send someone across the causeway at dusk on an errand, or offer a bargain. If they are reckless and Notice climbs fast, give them the cosy scenes they’ve earned. Company is safe.</p>
<p><strong>Keeping solitude in play.</strong> The rectory gives each guest a room of their own; Mrs Tooley would not hear of anything else. So the nights are solitary by default, and whoever sits up to watch while the others sleep is alone. By day, make the clock plain: the cart comes on Monday, and there are more leads than Investigators. The parish chest is in the vestry across the causeway, Dr Lacey sees visitors only after evening surgery, and Nobbs talks only at the Wherry. Every lead the group follows together is two it does not.</p>
<p><strong>Solitude bargains.</strong> Offer these as you would a meddling bargain, and name the risk plainly:</p>
<ul>
  <li>“Bream would be grateful if someone fetched his spectacles from the vestry before dark.” One Investigator, the causeway, dusk.</li>
  <li>“Dr Lacey will see one of you after surgery, but he won’t talk in front of a crowd.” The talk is safe; the walk home in the dark is not.</li>
  <li>“Somebody ought to sit up with the rubbing and see what it does.” Once the others are asleep, the watcher is alone, and learns whose face is coming through.</li>
</ul>
<p><strong>How Pell draws people apart.</strong> Pell cannot come to company, so he shows people what will bring them out alone. He wears the faces he has taken:</p>
<ul>
  <li>At dusk, someone sees Fairfax standing on the causeway, looking back towards the rectory. Use this on Pym first; he knew him.</li>
  <li>Once the face on the rubbing has begun to change, someone at a window sees a companion walking alone towards the church, though that companion is in the study.</li>
  <li>From Fairfax’s empty room comes the sound of someone making a rubbing.</li>
</ul>
<p>All of these are atmosphere, so they can reach anyone at any Notice. Anyone who stops to look properly before following makes an Investigating roll: on a 4 or more, they see that the face does not move as a face should. It is drawn on.</p>`
  },
  {
    _id: ids.pages.rest,
    name: "Laying it to rest",
    content: `
<p><strong>The restitution.</strong> Every image of the brass must be laid on the stone and burned there, as in 1688. Then the pew goes back. That is all, and it is enough.</p>
<p><strong>Burning it anywhere else.</strong> An image burned anywhere but on the stone does not burn. It chars and curls in the grate, and in the morning it is found whole, rolled the other way, with the new face a little clearer. Trying this is not meddling; it costs only the night, and it should send the players to the church.</p>
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
  <li><strong>The Visit and epilogue bands.</strong> Did the Visit feel fair? Did the split for Visit survivors feel right: never quite well again if rescued on a 4 or more, ruined if they survived at a cost?</li>
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
<p><strong>The rubbing is complete.</strong> Where the brass has only screw holes, the rubbing shows the last word whole: <em>ducat</em>, crisp and black. Heelball cannot take up letters that are not there. This is the moment the players should realise the rubbing is not a copy.</p>
<h3>Where each discovery is found</h3>
<table>
  <thead><tr><th>#</th><th>Safe route</th><th>Meddling route</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>The pierced brass (<em>…me secum d…</em>) set against Kirby’s <em>Norfolk Brasses</em> (1838) in Bream’s study, whose footnote guesses the harmless <em>pro me oret</em>. The contradiction is the clue: a competent reading supplies <em>ducat</em>. A close look at the rubbing also shows the word whole (with a Notice roll)</td><td>Read it aloud, or unroll the rubbing on the brass, where the lost word lies exactly over the screw holes</td></tr>
    <tr><td>2</td><td>In Fairfax’s boxed effects</td><td>—</td></tr>
    <tr><td>3</td><td>The parish chest in the vestry: Bream’s key, and the churchwardens’ keys from Nobbs</td><td>—</td></tr>
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
    <tr><td>Unrolling the rubbing on the brass</td><td>Discovery 1 at once: the lost word lies exactly over the screw holes</td><td>Nobbs sees it and will not speak to them again</td></tr>
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
<p><strong>Solitude.</strong> Each guest has a room of their own, so the nights are solitary; whoever sits up to watch is alone. By day there are more leads than Investigators. The solitude bargains and how Pell draws people apart are on the Clues and Matter tabs.</p>
<p><strong>Burning it anywhere else.</strong> An image burned anywhere but on the stone does not burn. It chars and curls in the grate, and in the morning it is found whole, rolled the other way, with the new face a little clearer. Not meddling; it costs only the night, and should send them to the church.</p>
<p><strong>The photograph.</strong> If Miss Arbery has photographed the brass and the plate isn’t burned, the rite seems to work. When the plate is developed in Norwich, the brass has a face, and it is hers. Her epilogue starts one band worse: tick <em>A loose end</em> under the epilogue on her sheet.</p>`;
