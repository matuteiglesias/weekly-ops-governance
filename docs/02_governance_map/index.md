# Governance Map

The governance map defines the **human routing architecture** of Weekly Ops.

It does not store canonical operational state.

## Authority boundary

Dynamic state should resolve to the current governed source or to a reproducible published view.

Examples:

- `front_registry_v2` — stable operational fronts;
- `carry_state_v2` — governed carry posture;
- `support_artifacts_v2` — governed support pointers;
- `runtime_health_v2` — runtime observation;
- `relationships_v1` and `relationship_agenda_v1` — relationship governance;
- current Office generation artifacts / published views — small human-ready subsets.

The Governance Map tells a human **where to go and what a route means**. It must not become another copy of those tables.

## Core files

- [Governance Map v0](governance-map-v0.md)
- [Column definitions](governance-map-column-definitions.md)
- [Routes Master Table](tables/routes-master-table.md)
- [Cadence, horizons, and week-shaping heuristics](cadence-horizons.md)

## Route vocabulary

A stable route ID is justified only when the route is repeatedly useful.

Domains or categories do not automatically deserve a new `*-GOV` ontology term. During maintenance, prefer ordinary categories unless a named route genuinely saves cognition.

## Timing

Cadence, horizon, Mon/Wed/Fri carry touches, 14-day frames, dayparts, and exact attention counts belong here in Weekly Governance.

They are human heuristics, not Control Tower schema requirements.

See [Cadence and horizons](cadence-horizons.md).

## Design rule

If a route appears on the weekly board, it should resolve to:

- a stable route identity or clear ordinary-language action;
- a real input;
- a real source/view or evidence target;
- a valid completion condition;
- a stop rule.

## Start here

- Use the [Routes Master Table](tables/routes-master-table.md) for the current route set.
- Use [Cadence and horizons](cadence-horizons.md) for timing defaults.
- Use the [Digital Support Index](../04_digital_support_index/index.md) to resolve routes into real sources, views, checklists, and evidence.
- Use route cards only when a repeated route benefits from a compact operational card.

## Do not use this for

- duplicating current front/carry state;
- inventing placeholder databases;
- storing contact/event records;
- reproducing Office compilation;
- turning every domain into a contract taxonomy.
