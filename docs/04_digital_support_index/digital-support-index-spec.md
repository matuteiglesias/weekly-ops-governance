# Digital Support Index — Spec

## Role

The Digital Support Index is the **navigation layer** between the paper/weekly surface and the real digital systems.

It answers:

- Where is the current source?
- Is there a compiled view that is better than opening raw state?
- Where is the route card/checklist?
- Where should evidence land?
- What is the smallest current next pointer?

## It does not own

- front/carry state;
- relationship/contact data;
- calendar/event truth;
- Office compile semantics;
- weekly scheduling state merely because it links to those systems.

## Preferred source order

When resolving a route:

1. current published/compiled view if it already answers the human question;
2. exact governed source table/system;
3. route card or manual for procedure;
4. evidence/artifact location.

Do not create a new placeholder state page merely because a route lacks a convenient view.

## Canonical row shape

| Field | Meaning |
|---|---|
| ID | Stable route ID or navigation key. |
| Domain | Human functional category. |
| Board presence | How it appears on the weekly surface. |
| Route card | Short procedure when useful. |
| Governance contract | Boundary/quality contract when needed. |
| State/view source | Exact governed source or compiled view. |
| Checklist/manual | Detailed helper. |
| Evidence target | Where observable result lands. |
| Cadence | Weekly heuristic/default. |
| Next action | Improvement needed in this navigation entry, not operational state. |

## Design principles

1. Links/views, not duplicated content.
2. Prefer current v2 sources.
3. Prefer compiled views when raw state is too broad.
4. Cadence is heuristic and lives in Weekly Governance.
5. Empty/unknown links should be explicit rather than replaced with invented state.
6. The index should reduce searching, not become another manual.
