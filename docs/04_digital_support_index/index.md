# Digital Support Index

The Digital Support Index is the **navigation layer** for Weekly Ops.

It maps recurring human routes to real sources/views, route cards, manuals, and evidence.

## Boundary

It does not store operational state.

A route should resolve to:

- a current compiled/published view when that is enough;
- otherwise the exact governed source;
- then the relevant procedure and evidence target.

## Current state/view pointers

- [Carry State](state-sources/carry-state.md) → `carry_state_v2`.
- [Project Frontier](state-sources/project-frontier.md) → compatibility name for a compiled front portfolio view.
- [Weekly Packet](state-sources/weekly-packet.md) → compiled Weekly View, not a database.

Other domain-specific sources remain linked through their domain pages.

## Core files

- [Digital Support Index spec](digital-support-index-spec.md)
- [Digital Support Index v0](digital-support-index-v0.md)
- [Linking rules](linking-rules.md)
- [Link health check](link-health-check.md)

## Timing

Cadence fields are Weekly heuristics.

See [Cadence and horizons](../02_governance_map/cadence-horizons.md).

## Route source

The [Routes Master Table](../02_governance_map/tables/routes-master-table.md) is the canonical Weekly route registry.

Digital Support Index tables should not independently create or redefine routes.

## Do not use this for

- duplicating Control Tower;
- defining Office work kinds;
- copying Event & Institutional Frontier state;
- full operating philosophy.

Use it to get from “I need to do X” to the right digital surface with minimal search.
