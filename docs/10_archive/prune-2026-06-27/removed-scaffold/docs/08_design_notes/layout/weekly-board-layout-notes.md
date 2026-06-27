# Weekly Board Layout Notes

## Current decision

Weekly Board v1 is HTML/CSS print.

Markdown-to-LaTeX produced a readable document but not a good human board.

## Problems observed in v0

- Looked like a document, not a dashboard.
- Table was too narrow and visually cramped.
- Second page had orphaned sections.
- Unicode checkbox failed in LaTeX font.
- Horizontal rules looked decorative and misplaced.
- Too little control over page geometry.

## v1 response

- A4 landscape fixed layout.
- CSS checkboxes.
- One-page target.
- Bottom panels for routes, contracts, outputs, blockers, not-now.
- Monday Bridge moved to separate printable.
- Route details remain outside the board.

## Success criterion

At 50-70 cm distance, the user should see:

- what day it is;
- what block mode is expected;
- what weekly routes remain;
- what contracts matter;
- what visible outputs are expected;
- what blockers/not-now exist.
