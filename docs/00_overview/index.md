# Overview

This repo is the **weekly human-facing governance layer**.

It owns week-shaping heuristics, a paper/visual board, recurring human routes, route cards, support navigation, and printables.

It does **not** own canonical operational state.

## Architecture

```text
Control Tower / governed sources
        ↓
Office / agents / compilers
        ↓
published views
        ↓
Weekly Board + routes + printables
```

Weekly annotations may remain human-local. Source facts should resolve back to governed state or another explicit authority.

## Start here

- [Operator Console](operator-console.md)
- [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md)
- [Cadence, horizons, and week-shaping heuristics](../02_governance_map/cadence-horizons.md)
- [Governance Map](../02_governance_map/index.md)
- [Digital Support Index](../04_digital_support_index/index.md)
- [Printables](../06_printables/index.md)

## What belongs here

- Mon/Wed/Fri carry-touch heuristics;
- 14-day breakthrough framing;
- daypart/block defaults;
- same-day / this-week / later views;
- weekly attention counts;
- paper route ticks;
- recurring human routines.

These are human operating conventions, not universal Control Tower schema.

## What does not belong here

- a second front registry;
- a second carry-state table;
- Office compilation logic;
- repository identity;
- contact/event truth;
- a duplicate Event & Institutional Frontier.

## Boundary with Ops Manual

Ops Manual owns execution doctrine and durable concepts such as VACChain and Endpoint.

Weekly Governance owns timing and week-shaping policy.
