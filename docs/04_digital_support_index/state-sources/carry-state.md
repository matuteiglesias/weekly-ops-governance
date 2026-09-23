# Carry State

## Canonical source

Current governed carry posture lives in **Control Tower `carry_state_v2`**, keyed by `front_id`.

This page is only a navigation note. It does not define a second Carry schema.

## Related governed context

Use alongside:

- `front_registry_v2` for stable front identity and semantics;
- `support_artifacts_v2` for governed pointers/support material;
- `runtime_health_v2` for runtime observation;
- Office v2 compiled work/views when a smaller human surface is preferable.

## Used by

Routes such as CARRY-M, CARRY-W, WEEK-GOV, FOCUS, and active-front review may consult carry state.

They should update it only through the proper governed write path.

## Weekly interpretation

Weekly Governance may present carry rows through filters such as:

- active;
- changed recently;
- needs review;
- waiting;
- parked/not-now.

Those are views over governed state, not replacement source facts.

## Cadence

Mon/Wed/Fri touches and weekly reconciliation are heuristics documented in [Cadence and horizons](../../02_governance_map/cadence-horizons.md).
