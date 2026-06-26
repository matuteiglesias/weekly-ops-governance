# Governance Map — Column Definitions

This file defines the canonical columns used by the governance map.

The governance map is not a task list. It is the routing layer between the weekly board, route cards, state sources, checklists, and evidence.

## Columns

| Column | Meaning |
|---|---|
| `ID` | Stable short identifier used on the weekly board and support index. |
| `Domain` | Functional area governed by this route. |
| `Route type` | Execution, governance, state update, homeostasis, externalization, or situational. |
| `Natural cadence` | When this route normally appears. |
| `Weekly board presence` | How the route appears on the paper board: checkbox, label, contract reference, or conditional route. |
| `Contract` | The governance contract that gives quality criteria to the route. |
| `Inputs` | Minimum sources needed to execute the route. |
| `State touched` | State source updated or checked by the route. |
| `Output / evidence` | Observable output, decision, log, update, or next pointer. |
| `Tick valid when` | Minimal completion criterion for a checkbox or board mark. |
| `Stop rule` | Boundary that prevents the route from expanding into bloat. |
| `Linked card` | Route card that explains how to run this route. |
| `Support index entry` | Digital support page with links to checklists, state, logs, and evidence. |

## Design rule

A route can appear on the weekly board only if it has:

1. a stable ID;
2. a domain;
3. an input;
4. a state or evidence target;
5. a valid tick criterion;
6. a stop rule.

If any of these are missing, the route belongs in backlog, not on the board.
