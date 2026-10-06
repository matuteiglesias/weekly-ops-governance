# Weekly Ops Governance

Human-facing weekly governance for Matías's Office ecosystem.

This repository owns **week shaping**, not canonical operational state.

```text
Control Tower / governed sources
  → Office / agents / compilers
  → published views
  → Weekly Board / routes / printables
```

## What belongs here

- paper/visual Weekly Board;
- route vocabulary and route cards;
- Mon/Wed/Fri carry heuristics;
- 14-day and seasonal frames;
- daypart/block defaults;
- exact attention-count heuristics;
- week review / rollover / restart;
- digital navigation to real sources and evidence.

## What does not belong here

- a second Front Registry or Carry State;
- Office compile semantics;
- repository-estate identity;
- relationship/contact/event source truth;
- Event & Institutional Frontier state.

## Start here

1. [Operator Console](docs/00_overview/operator-console.md)
2. [Weekly Board](docs/01_weekly_board/weekly-board-layout-v0.md)
3. [Cadence, horizons, and week-shaping heuristics](docs/02_governance_map/cadence-horizons.md)
4. [Governance Map](docs/02_governance_map/index.md)
5. [Digital Support Index](docs/04_digital_support_index/index.md)

## Route authority

The [Routes Master Table](docs/02_governance_map/tables/routes-master-table.md) is the canonical Weekly route registry.

Route Atlas and Digital Support Index tables are navigation/derived surfaces and should not redefine route meaning.

## State authority

Current Weekly documentation should resolve dynamic state to its real owner, such as:

- `front_registry_v2`;
- `carry_state_v2`;
- `support_artifacts_v2`;
- `runtime_health_v2`;
- `relationships_v1`;
- `relationship_agenda_v1`;
- current Office v2 artifacts / published views.

Compatibility pages such as Project Frontier and Weekly Packet now describe views rather than separate databases.

## Build

The Docusaurus site lives under `site/`.

```bash
cd site
npm ci
npm run build
```
