# CARRY-GOV — Project State Contract

## Purpose

Keep projects and fronts legible across days and weeks.

Carry governance prevents active fronts from becoming vague memories.

## Contract

Carry governance is valid when active fronts have:

- status;
- next pointer;
- blocker, if any;
- parked reason, if paused;
- evidence link, if recently advanced.

## Inputs

- Carry State
- Project frontier
- Weekly outputs
- Recently touched artifacts
- Current blockers
- Board annotations

## Outputs

- Updated project state
- Next pointer
- Parked reason
- Reprioritized front
- Flagged blocker
- Evidence link

## Tick valid when

Each active front can be restarted or consciously left parked.

## Stop rule

Do not re-plan the full project universe during a carry update.
