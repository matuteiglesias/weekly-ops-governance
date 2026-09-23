# Cadence, horizons, and week-shaping heuristics

## Purpose

This repository owns the **human timing heuristics** that help shape a week.

These are operating defaults, not universal data-model semantics. They may change without requiring Control Tower, Office, or Frontier schema migrations.

## Authority boundary

- Control Tower v2 owns governed front/carry/relationship state.
- Office v2 compiles current work and preparation from governed state.
- Weekly Governance decides how a human wants to **see and revisit** work across a week.
- A cadence heuristic never becomes source-of-truth merely because it appears on the board.

## Useful horizon language

Use horizon labels when they reduce ambiguity, not as mandatory fields everywhere.

A practical vocabulary:

- **now / same-day** — worth acting on in the current operating day;
- **this week** — belongs in the current weekly frame but not necessarily today;
- **next 2–4 weeks** — visible strategic or preparation horizon;
- **later / parked** — not in the current operating window;
- **triggered** — surfaces only when an external condition changes.

For short-lived situational work, older shorthand such as `2–7 days` or `1–4 weeks` remains acceptable on the Weekly surface.

## Daypart / block defaults

The board may use broad blocks such as:

```text
M1 / morning
FOCUS 1
M2
FOCUS 2
M3
FOCUS 3
night / CLOSE
```

or approximate windows such as:

```text
09–12
13–16
17–20
```

These are visual planning aids. They are not required fields on fronts, work items, or published views.

## Carry touch heuristic

The historical `CARRY-M` pattern uses:

```text
Mon / Wed / Fri
```

as a cheap reminder to reconcile changed fronts.

Keep it when useful. Skip it when the Office/compiled view already makes changed carry state obvious.

The point is not to satisfy a cadence counter. The point is to avoid expensive reconstruction later.

## Weekly carry review

`CARRY-W` is a heavier reconciliation pass, often Friday or Sunday.

A valid review answers only:

- Which fronts materially changed?
- Which next pointers are stale or missing?
- Which fronts should be active, watched, waiting, or parked?
- What should the next week inherit?

Do not re-plan the full project universe.

## 14-day frame

A **14-day breakthrough** is a planning lens, not a state type.

Use it to name one change that would make the next two weeks meaningfully different.

Good uses:

- finish a publication-ready artifact;
- establish one end-to-end pipeline;
- close one opportunity loop;
- make one relationship surface externally active.

Bad use: creating a second backlog of everything that might fit in fourteen days.

## Quarterly / seasonal reframe

A quarterly or seasonal pass is useful when the role of fronts has genuinely changed.

It may change:

- which fronts deserve active attention;
- which recurring routes matter;
- what kind of externalization should dominate;
- which routines can be dropped.

It should not rewrite stable front identity or duplicate Control Tower.

## Exact counts

Exact daily counts are optional heuristics.

Examples that can still be useful:

- 1–3 candidate blocks;
- 1 primary deep stream;
- 1 bounded maintenance move;
- a small Principal attention budget;
- a small number of weekly externalization targets.

Treat them as **attention guards**, not contractual completeness criteria.

## Route cadences

The Routes Master Table may list a natural cadence such as daily, Mon/Wed/Fri, Friday/Sunday, or conditional.

Interpret `Natural cadence` as:

> the default moment when a human is likely to find the route useful.

It is not a timer contract and does not imply automatic mutation.

## Heuristic override rule

Override the default cadence whenever current evidence makes another timing obviously better.

The weekly system should reduce forgotten work and restart cost, not force rituals after they stop paying for themselves.

## Relationship to Frontier

Event & Institutional Frontier may group READY/LIVE/WATCH/WAITING/etc. independently of weekly horizons.

Weekly Governance may choose to surface one of those groups this week without rewriting Frontier state.

## Related

- [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md)
- [Governance Map](index.md)
- [Routes Master Table](tables/routes-master-table.md)
