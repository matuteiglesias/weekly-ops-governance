# Digital Support Index v0

## Purpose

This is the route-to-source navigation table for Weekly Ops.

It should be treated as a **derived navigation surface** over the canonical Weekly route registry, not a second place to define route semantics.

## Source authority

For current operational state, prefer exact governed sources or compiled views.

Common examples:

- `front_registry_v2`;
- `carry_state_v2`;
- `support_artifacts_v2`;
- `runtime_health_v2`;
- `relationships_v1`;
- `relationship_agenda_v1`;
- Office v2 generation artifacts / published views.

Compatibility pages such as Carry State, Weekly Packet, and Project Frontier now resolve to those real sources/views.

## Master support table

| ID | Domain | Board presence | Route card | Governance contract | State/view source | Evidence target | Cadence heuristic |
|---|---|---|---|---|---|---|---|
| WEEK-GOV | Weekly governance | Weekly anchor | `../03_route_cards/core/week-gov.md` | `../02_governance_map/domain-contracts/week-gov.md` | `state-sources/weekly-packet.md` | `evidence-sources/output-log.md` | Sunday/Monday |
| BOOT | Daily execution | Daily checkbox | `../03_route_cards/core/boot.md` | `../02_governance_map/domain-contracts/week-gov.md` | weekly/current Office view | `evidence-sources/output-log.md` | Workday start |
| MAINT | Maintenance | Route slot | `../03_route_cards/core/maint.md` | `../02_governance_map/domain-contracts/maint-gov.md` | current compiled work / local routine | `evidence-sources/output-log.md` | As useful |
| FOCUS | Deep work | Focus block | `../03_route_cards/core/focus.md` | `../02_governance_map/domain-contracts/focus-gov.md` | `state-sources/carry-state.md` / Office view | `evidence-sources/output-log.md` | Focus blocks |
| CLOSE | Continuity | Daily checkbox | `../03_route_cards/core/close.md` | `../02_governance_map/domain-contracts/next-gov.md` | weekly/current view | `evidence-sources/output-log.md` | End of day |
| CARRY-M | Front continuity | Micro tick | `../03_route_cards/project-work/carry-micro.md` | `../02_governance_map/domain-contracts/carry-gov.md` | `carry_state_v2` via Carry State page | `evidence-sources/output-log.md` | Mon/Wed/Fri heuristic |
| CARRY-W | Front continuity | Weekly checkbox | `../03_route_cards/project-work/carry-w.md` | `../02_governance_map/domain-contracts/carry-gov.md` | carry + front portfolio view | `evidence-sources/output-log.md` | Friday/Sunday heuristic |
| FIN-W | Finance | Weekly checkbox | `../03_route_cards/situational/fin-w.md` | `../02_governance_map/domain-contracts/fin-gov.md` | finance calendar / ledger | `evidence-sources/output-log.md` | Friday + Sunday/Monday |
| FIN-U | Finance | Conditional | `../03_route_cards/situational/finance-urgent.md` | `../02_governance_map/domain-contracts/fin-gov.md` | concrete obligation/account | `evidence-sources/output-log.md` | Conditional |
| GYM-GOV | Movement | Optional route | `../03_route_cards/homeostasis/gym-gov.md` | `../02_governance_map/domain-contracts/gym-gov.md` | gym/body source if used | `evidence-sources/output-log.md` | Weekly heuristic |
| BODY-GOV | Body | Optional route | `../03_route_cards/homeostasis/body-gov.md` | `../02_governance_map/domain-contracts/body-gov.md` | body source if used | `evidence-sources/output-log.md` | Weekly heuristic |
| HOUSE-GOV | House | Optional route | `../03_route_cards/homeostasis/house-gov.md` | `../02_governance_map/domain-contracts/house-gov.md` | checklist/local observation | `evidence-sources/output-log.md` | Weekly heuristic |
| CAPTURE-GOV | Capture | Conditional | `../03_route_cards/situational/capture-gov.md` | `../02_governance_map/domain-contracts/capture-gov.md` | capture inbox / current capture system | `evidence-sources/output-log.md` | As needed |
| EXTERNAL | Externalization | Weekly/conditional | `../03_route_cards/external/external-gov.md` | `../02_governance_map/domain-contracts/external-gov.md` | relationship/opportunity/Frontier views | messages/posts/deployments | As useful |

## Gaps policy

A missing link is a navigation gap.

Do **not** solve it by inventing a placeholder state store.

Prefer either:

- link to the real governed source;
- link to an existing published view;
- explicitly mark the source unknown;
- remove the route if it no longer earns a stable name.

## Success criterion

A route visible on the Weekly Board resolves quickly to its real source/view, procedure, evidence target, and stop condition.
