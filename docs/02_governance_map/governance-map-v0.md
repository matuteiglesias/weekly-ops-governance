# Governance Map v0

## Purpose

This map defines how the weekly board routes into contracts, route cards, state sources, checklists, and evidence.

The weekly board is intentionally light. It should not carry full checklists or full context. It shows enough to activate the right route at the right moment.

## Architecture

```text
Weekly Board
  -> route ID
  -> governance contract
  -> route card
  -> support index links
  -> state source
  -> evidence / next pointer
```

## Levels

| Level | Name                  | Function                                                                                |
| ----- | --------------------- | --------------------------------------------------------------------------------------- |
| L0    | Weekly Board          | Paper/whiteboard surface for time, ticks, annotations, outputs, blockers.               |
| L1    | Governance Map        | Defines routes, contracts, states, evidence, and valid ticks.                           |
| L2    | Route Cards           | Short operational cards for running a route.                                            |
| L3    | Digital Support Index | Links to logs, checklists, planillas, calendars, manuals, and artifacts.                |
| L4    | State Sources         | Carry State, finance calendar, ledger, gym log, body log, capture inbox, weekly packet. |
| L5    | Evidence              | Commits, messages, reports, drafts, publications, deployments, snapshots.               |
| L6    | Full Context          | Long manual, rationale, ADRs, SOPs, design notes.                                       |

## Route families

| Family            | IDs                             |
| ----------------- | ------------------------------- |
| Daily execution   | BOOT, MAINT, FOCUS, CLOSE, NEXT |
| Weekly governance | WEEK-GOV, CARRY-W, CARRY-M      |
| Finance           | FIN-W, FIN-U                    |
| Homeostasis       | BODY-GOV, GYM-GOV, HOUSE-GOV    |
| Capture           | CAPTURE-GOV                     |
| Externalization   | EXTERNAL                        |

## Source table

See:

* `docs/02_governance_map/tables/routes-master-table.md`
* `docs/02_governance_map/governance-map-column-definitions.md`

## Board inclusion rule

A route appears on the weekly board only if it reduces confusion, prevents forgotten routine work, updates important state, or produces external evidence.

The board should show route IDs and ticks. The details live elsewhere.

## Design boundary

Do not put full checklists on the weekly board.

Examples:

* `FIN-W` belongs on the board.
* The full finance checklist does not.
* `CLN-30 □ □ □` belongs on the board.
* The full cleaning checklist does not.
* `CAPTURE-GOV` may appear as a contract reference.
* Capture routing details do not belong on the weekly board.

## First stable route set

Core:

* BOOT
* MAINT
* FOCUS
* CLOSE
* NEXT
* WEEK-GOV

Weekly support:

* CARRY-M
* CARRY-W
* FIN-W
* EXTERNAL

Homeostasis:

* BODY-GOV
* GYM-GOV
* HOUSE-GOV

Conditional:

* FIN-U
* CAPTURE-GOV

## v0 success criterion

The v0 map is good enough when a weekly board mark such as `FIN-W`, `CARRY-W`, or `GYM-GOV` can be resolved into:

1. what contract governs it;
2. what inputs are required;
3. what state is touched;
4. what output/evidence is expected;
5. what makes the tick valid;
6. where the route card and links live.
