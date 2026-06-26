# Printables Manifest

## Purpose

List human-facing printable artifacts.

The main working printable is the Weekly Board. It must fit one page and be usable with pen.

## Printables

| Artifact | Source | Generated PDF | Generated PNG | Status | Purpose |
|---|---|---|---|---|---|
| Weekly Board v1 | [source](sources/weekly-board-v1.html) | [PDF](/printables/weekly-board-v1.pdf) | [PNG](/printables/weekly-board-v1.png) | priority | Main weekly paper surface |
| Monday Bridge v1 | [source](sources/monday-bridge-v1.html) | [PDF](/printables/monday-bridge-v1.pdf) | [PNG](/printables/monday-bridge-v1.png) | priority | Separate restart sheet |
| Governance Map | [source](sources/governance-map-print.md) | [PDF](/printables/governance-map.pdf) | - | secondary | Architecture reference |
| Support Index | [source](sources/support-index-print.md) | [PDF](/printables/support-index.pdf) | - | secondary | Link map reference |
| Route Cards | [source](sources/route-cards-print.md) | [PDF](/printables/route-cards.pdf) | - | deferred | Needs card layout later |
| User Guide | [source](sources/user-guide-print.md) | [PDF](/printables/user-guide.pdf) | - | secondary | How to use the system |

## Decisions

- Weekly Board uses HTML/CSS print, not Markdown tables.
- Monday Bridge is separate from the Weekly Board.
- Checkboxes are CSS boxes, not Unicode characters.
- Mermaid is for explanatory diagrams, not for writable forms.
- Route Cards stay MD/web until a real card layout is designed.

## Related

- [Print queue](print-queue.md)
- [Weekly Board layout](../01_weekly_board/weekly-board-layout-v0.md)
- [Monday Bridge Markdown source](sources/monday-bridge-print.md)
