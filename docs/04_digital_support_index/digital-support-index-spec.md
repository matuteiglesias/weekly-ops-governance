# Digital Support Index — Spec

## Role

The Digital Support Index is the digital counterpart to the weekly paper board.

The weekly board is spatial, writable, and low-density.

The Digital Support Index is functional, searchable, and link-rich.

## It answers

- Where is the checklist?
- Where is the state source?
- Where is the route card?
- Where is the governance contract?
- Where should evidence go?
- What is the next action for this route?

## It does not answer

- What hour should I do this?
- What does my whole week look like?
- Which project should win today?
- What is the full operating philosophy?

Those belong to the weekly board, WEEK-GOV, Carry State, and Full Context.

## Canonical row shape

| Field | Meaning |
|---|---|
| ID | Stable route ID. |
| Domain | Functional area. |
| Board presence | How the route appears on the weekly board. |
| Route card | Short operational card. |
| Governance contract | Contract defining quality and boundaries. |
| State source | Source of truth touched by the route. |
| Checklist / manual | Detailed procedure or helper. |
| Evidence target | Where outputs are recorded. |
| Cadence | Natural timing. |
| Next action | What to do next to improve this route. |

## Design principles

1. Functional, not temporal.
2. Links, not duplicated content.
3. Short labels, stable IDs.
4. Every route should resolve to state and evidence.
5. Empty links are allowed as placeholders, but must be visible.
6. The index should reduce searching, not become another manual.
