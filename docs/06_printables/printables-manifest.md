# Printables Manifest

## Purpose

List human-facing printable artifacts.

The main working printable is the Weekly Board. It must fit one page and be usable with pen.

## Printables

| Artifact | Source | Generated PDF | Generated PNG | Status | Purpose |
|---|---|---|---|---|---|
| Weekly Board v1 | `sources/weekly-board-v1.html` | `generated/weekly-board-v1.pdf` | `generated/weekly-board-v1.png` | priority | Main weekly paper surface |
| Monday Bridge v1 | `sources/monday-bridge-v1.html` | `generated/monday-bridge-v1.pdf` | `generated/monday-bridge-v1.png` | priority | Separate restart sheet |
| Governance Map | `sources/governance-map-print.md` | `generated/governance-map.pdf` | - | secondary | Architecture reference |
| Support Index | `sources/support-index-print.md` | `generated/support-index.pdf` | - | secondary | Link map reference |
| Route Cards | `sources/route-cards-print.md` | `generated/route-cards.pdf` | - | deferred | Needs card layout later |
| User Guide | `sources/user-guide-print.md` | `generated/user-guide.pdf` | - | secondary | How to use the system |

## Decisions

- Weekly Board uses HTML/CSS print, not Markdown tables.
- Monday Bridge is separate from the Weekly Board.
- Checkboxes are CSS boxes, not Unicode characters.
- Mermaid is for explanatory diagrams, not for writable forms.
- Route Cards stay MD/web until a real card layout is designed.
