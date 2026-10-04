# Jamesian Dark: The Brass at Coldham

A one-session playtest scenario for Jamesian Dark, for two to four players, set in Norfolk in October 1908.
A dead antiquary's brass rubbing has brought something home with it, and the Investigators have come to finish his work.

An adventure module for the `jamesian-dark` system on Foundry V14. No scripts; one compendium.

## Using it

1. Enable **Jamesian Dark: The Brass at Coldham** in Manage Modules.
2. Open the **The Brass at Coldham** compendium, open the adventure inside it, and press **Import Adventure**.
3. Open the journal **The Brass at Coldham** and start at *Using this module*.

## What the adventure imports

| | |
|---|---|
| Haunting | **The Brass at Coldham**: transgression, thing, tether, restitution and the narrator's frame; five warnings, six Provenance discoveries and eleven glimpses, ready to speak from; a reference sheet on the Notes tab. |
| Investigators | Dr Edmund Hale, Miss Constance Arbery (with her half-plate camera), Rev. Francis Pym, Mr George Thursby. All at Notice 1 and unassigned. |
| Curios | Fairfax's rubbing, his notebook, his sealed letter, Kirby's *Norfolk Brasses*, the churchwardens' accounts for 1688. |
| Journal | The scenario in full, a page per section, for the GM. |

There are no scenes or maps.

## How the scenario was fitted to the system

- **Provenance** entries hold what each discovery *reveals*, because the sheet's reveal button reads them to the
  table. The safe and meddling routes are on the Haunting's Notes tab and in the journal.
- **Warnings** are worded as the GM would say them to the players.
- **Glimpses** are the scenario's five fragments plus the six from its Notice table.
- **Temptations** are not printed on the Investigators' sheets. Miss Arbery's would tell her player that a
  photograph counts, and the scenario asks the GM not to. They are on the journal's Investigators page.
- **Curio** descriptions say only what a player would learn on being handed the object. What is inside the
  sealed letter is on the Haunting, as discovery 6.
- The local people (Bream, Mrs Tooley, Nobbs, Dr Lacey) are journal text. The system has no actor type for them.

## Building

The pack is built from `src/`:

    node tools/build.mjs

This needs Foundry's own `classic-level`; set `FOUNDRY_PATH` if Foundry is not at `~/foundryvtt`. Document ids are
fixed in `src/ids.mjs`, so re-importing after a rebuild updates the documents in a world instead of duplicating them.

The folder Foundry loads must be named `brass-at-coldham`. To deploy:

    rsync -a --delete --exclude '*.pdf' --exclude src --exclude tools ./ ~/foundrydata/Data/modules/brass-at-coldham/
