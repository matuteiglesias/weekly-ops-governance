# Weekly Board Layout v0

## Purpose

The Weekly Board is the human-facing surface for operating the week.

It is deliberately low-density: paper/handwriting or a similarly simple UI.

It does not own canonical state.

## Page concept

A single weekly page may show:

1. week identity;
2. seasonal / 14-day frame;
3. broad daypart/block geometry;
4. a small route vocabulary;
5. visible outputs;
6. blockers / not-now;
7. a restart/Monday bridge pointer;
8. optional surfaced views such as relationships/opportunities/events.

## Header

```text
Week: ____ / ____ / ____
Seasonal frame: ____________________________
14D breakthrough: __________________________
Primary front / emphasis: __________________
```

The 14-day field is a planning lens, not a data-model state.

## Time grid

A board may use broad blocks:

```text
Day        M1/BOOT   FOCUS 1   M2   FOCUS 2   M3   FOCUS 3   CLOSE
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
```

or any simpler geometry that works.

Exact minute-level scheduling is not required.

## Route ticks

A useful default might include:

```text
BOOT:       Mon □ Tue □ Wed □ Thu □ Fri □
CLOSE:      Mon □ Tue □ Wed □ Thu □ Fri □

WEEK-GOV    □
CARRY-M     Mon □ Wed □ Fri □
CARRY-W     □
FIN-W       □
EXTERNAL    □
HOUSE/CLN   □ □ □
GYM         □ □ □
BODY        □
NEXT        □
```

These are heuristics. Remove ticks that no longer earn their space.

## Counts

Exact daily/weekly counts are attention guards, not completeness contracts.

Examples:

- 1 primary deep stream;
- 1 bounded maintenance move;
- 1–3 candidate pulls;
- a small number of externalization targets.

Use fewer when that is enough.

## State rule

The board may annotate or select items, but source facts should remain in governed sources.

Examples:

- carry posture → `carry_state_v2`;
- front identity → `front_registry_v2`;
- relationship agenda → relationship tables;
- external attention → Event & Institutional Frontier view.

## Board inclusion rule

A route or item belongs here when visibility meaningfully reduces:

- forgotten recurring work;
- restart cost;
- rework;
- missed external obligations;
- excessive search.

## What does not belong here

- full checklists;
- full project/front universe;
- contact databases;
- detailed Office artifacts;
- full manuals;
- every possible route;
- every event/opportunity.

Those live in their source systems or supporting views.

## Related

- [Cadence and horizons](../02_governance_map/cadence-horizons.md)
- [Governance Map](../02_governance_map/index.md)
- [Digital Support Index](../04_digital_support_index/index.md)
- [Route Cards](../03_route_cards/index.md)
