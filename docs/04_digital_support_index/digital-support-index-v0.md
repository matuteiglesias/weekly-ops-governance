# Digital Support Index v0

## Purpose

This is the first functional support index for the weekly operations governance system.

It maps weekly-board routes to their supporting cards, contracts, state sources, checklists, and evidence targets.

## Master support table

| ID | Domain | Board presence | Route card | Governance contract | State source | Checklist / manual | Evidence target | Cadence |
|---|---|---|---|---|---|---|---|---|
| WEEK-GOV | Weekly governance | Weekly anchor | `../03_route_cards/core/week-gov.md` | `../02_governance_map/domain-contracts/week-gov.md` | `state-sources/weekly-packet.md` | `link-maps/week-review-links.md` | `evidence-sources/output-log.md` | Sunday/Monday |
| BOOT | Daily execution | Daily checkbox | `../03_route_cards/core/boot.md` | `../02_governance_map/domain-contracts/week-gov.md` | `state-sources/weekly-packet.md` | `domains/week-gov.md` | `evidence-sources/output-log.md` | Workday morning |
| MAINT | Maintenance | M1/M2/M3 slot | `../03_route_cards/core/maint.md` | `../02_governance_map/domain-contracts/maint-gov.md` | `state-sources/weekly-packet.md` | `domains/week-gov.md` | `evidence-sources/output-log.md` | Daily |
| FOCUS | Deep work | Focus block | `../03_route_cards/core/focus.md` | `../02_governance_map/domain-contracts/focus-gov.md` | `state-sources/carry-state.md` | `domains/carry-w.md` | `evidence-sources/output-log.md` | Focus blocks |
| CLOSE | Daily close | Daily checkbox | `../03_route_cards/core/close.md` | `../02_governance_map/domain-contracts/next-gov.md` | `state-sources/weekly-packet.md` | `state-sources/weekly-packet.md` | `evidence-sources/output-log.md` | End of day |
| CARRY-M | Project state | Micro tick | `../03_route_cards/project-work/carry-micro.md` | `../02_governance_map/domain-contracts/carry-gov.md` | `state-sources/carry-state.md` | `link-maps/carry-links.md` | `evidence-sources/output-log.md` | Mon/Wed/Fri |
| CARRY-W | Project state | Weekly checkbox | `../03_route_cards/project-work/carry-w.md` | `../02_governance_map/domain-contracts/carry-gov.md` | `state-sources/carry-state.md` | `link-maps/carry-links.md` | `evidence-sources/output-log.md` | Friday/Sunday |
| FIN-W | Finance | Weekly checkbox | `../03_route_cards/situational/fin-w.md` | `../02_governance_map/domain-contracts/fin-gov.md` | `state-sources/finance-calendar.md`, `state-sources/ledger.md` | `link-maps/finance-links.md` | `evidence-sources/output-log.md` | Friday + Sunday/Monday |
| FIN-U | Finance | Conditional checkbox | `../03_route_cards/situational/finance-urgent.md` | `../02_governance_map/domain-contracts/fin-gov.md` | `state-sources/finance-calendar.md`, `state-sources/ledger.md` | `link-maps/finance-links.md` | `evidence-sources/output-log.md` | As needed |
| GYM-GOV | Gym / movement | Contract label + session ticks | `../03_route_cards/homeostasis/gym-gov.md` | `../02_governance_map/domain-contracts/gym-gov.md` | `state-sources/gym-log.md` | `link-maps/gym-links.md` | `evidence-sources/output-log.md` | 3x weekly / 20-22 |
| BODY-GOV | Body / health | Contract label | `../03_route_cards/homeostasis/body-gov.md` | `../02_governance_map/domain-contracts/body-gov.md` | `state-sources/body-log.md` | `link-maps/body-links.md` | `evidence-sources/output-log.md` | Morning / weekly |
| HOUSE-GOV | House operations | CLN-30 ticks | `../03_route_cards/homeostasis/house-gov.md`, `../03_route_cards/homeostasis/cln-30.md` | `../02_governance_map/domain-contracts/house-gov.md` | `domains/house-gov.md` | `link-maps/house-links.md` | `evidence-sources/output-log.md` | 3x weekly / Saturday |
| CAPTURE-GOV | Capture | Contract reference | `../03_route_cards/situational/capture-gov.md`, `../03_route_cards/situational/capture-router.md` | `../02_governance_map/domain-contracts/capture-gov.md` | `state-sources/capture-inbox.md` | `link-maps/capture-links.md` | `evidence-sources/output-log.md` | Inside review/capture |
| EXTERNAL | Externalization | Weekly checkbox | `../03_route_cards/external/external-gov.md` | `../02_governance_map/domain-contracts/external-gov.md` | `evidence-sources/output-log.md` | `link-maps/external-links.md` | `evidence-sources/messages-sent.md`, `evidence-sources/published-posts.md` | Thursday / as needed |
| JOB-GOV | Job search | Seasonal/active front | `../03_route_cards/situational/job-gov.md` | `../02_governance_map/domain-contracts/external-gov.md` | `domains/job-gov.md` | `link-maps/external-links.md` | `evidence-sources/messages-sent.md` | If active |
| CLIENT-SITES-GOV | Static sites | Seasonal/active front | `../03_route_cards/situational/client-sites-gov.md` | `../02_governance_map/domain-contracts/external-gov.md` | `domains/client-sites-gov.md` | `link-maps/external-links.md` | `evidence-sources/deployments.md` | If active |
| POLICY-CONTENT-GOV | Policy/content | Seasonal/active front | `../03_route_cards/situational/policy-content-gov.md` | `../02_governance_map/domain-contracts/external-gov.md` | `domains/policy-content-gov.md` | `link-maps/external-links.md` | `evidence-sources/published-posts.md`, `evidence-sources/reports.md` | If active |
| ACADEMIC-GOV | Academic | Seasonal/active front | `../03_route_cards/situational/academic-gov.md` | `../02_governance_map/domain-contracts/focus-gov.md` | `domains/academic-gov.md` | `domains/academic-gov.md` | `evidence-sources/reports.md` | If active |

## v0 gaps

- Replace placeholder local paths with real URLs or absolute local paths where useful.
- Add real finance calendar link.
- Add real ledger link.
- Add real Carry State link.
- Add real gym log link.
- Add real body log link.
- Decide whether evidence log is a file, sheet, or generated artifact.

## Success criterion

A route ID visible on the weekly board can be resolved in under 10 seconds to the right card, state, checklist, and evidence target.
