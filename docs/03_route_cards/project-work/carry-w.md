# CARRY-W — Weekly Carry Review

## When

Use Friday close or Sunday bridge.

## Purpose

Reconcile active fronts so the next week starts with readable project state.

## Inputs

- Carry State
- Project frontier
- Weekly outputs
- Board annotations
- Open blockers
- External commitments

## Steps minimum

1. Review active fronts only.
2. Mark each as active, paused, waiting, done, or not-now.
3. Add next pointer for each active front.
4. Add parked reason for paused fronts.
5. Link evidence from the week.
6. Mark one or two fronts that matter next week.

## Output

Updated Carry State and cleaner project frontier.

## Tick valid when

Every active front has a status and restart pointer or a deliberate parked reason.

## Stop rule

Do not re-plan the full project universe.

## Related

- [CARRY-GOV contract](../../02_governance_map/domain-contracts/carry-gov.md)
- [CARRY-W support index](../../04_digital_support_index/domains/carry-w.md)
- [Carry State](../../04_digital_support_index/state-sources/carry-state.md)
- [Project Frontier](../../04_digital_support_index/state-sources/project-frontier.md)
- [Monday Bridge source](../../06_printables/sources/monday-bridge-print.md)
