# Governance Map v0

## Purpose

This map defines how the Weekly Board routes into human procedures, real state/view sources, and evidence.

The board is intentionally light. It shows enough to activate the right route without copying the underlying state.

## Architecture

```text
Weekly Board
  → route ID or ordinary-language action
  → route card / governing rule when needed
  → Digital Support Index
  → governed source or published view
  → evidence / next pointer
```

## Canonical route list

The [Routes Master Table](tables/routes-master-table.md) is the canonical **Weekly route registry**.

Other route lists such as Route Atlas and Digital Support Index tables are navigational/derived surfaces and should not invent new route semantics.

## Timing authority

Weekly timing heuristics live in [Cadence, horizons, and week-shaping heuristics](cadence-horizons.md).

Natural cadence is a default, not a timer contract.

## Layers

| Layer | Function |
|---|---|
| Weekly Board | Low-density paper/UI surface for emphasis, ticks, outputs, blockers, annotations. |
| Governance Map | Defines Weekly route vocabulary and routing rules. |
| Route Cards | Short procedure only for genuinely repeated routes. |
| Digital Support Index | Resolves a route to real sources/views, manuals, and evidence. |
| Governed sources/views | Control Tower v2, relationship tables, other real systems, or reproducible compiled views. |
| Evidence | Commits, messages, reports, publications, deployments, receipts, snapshots. |
| Full Context | Long rationale/design notes; not a normal operating surface. |

## Route families

Current Weekly vocabulary includes:

- daily execution: BOOT, MAINT, FOCUS, CLOSE, NEXT;
- weekly continuity: WEEK-GOV, CARRY-M, CARRY-W;
- finance: FIN-W, FIN-U;
- homeostasis: BODY-GOV, GYM-GOV, HOUSE-GOV;
- capture: CAPTURE-GOV;
- externalization: EXTERNAL.

This list may shrink. A domain does not automatically deserve a formal `*-GOV` route.

## Route survival rule

Keep a route only if:

- it recurs;
- its source/view is real;
- its output is observable;
- its stop rule matters;
- its name genuinely lowers cognitive cost.

Otherwise use ordinary language or a view/filter.

## State rule

Do not define live source fields in this map.

Examples:

- `carry_state_v2` owns carry posture;
- `front_registry_v2` owns front identity;
- relationship tables own relationship governance;
- a Weekly View may temporarily group those rows for human use.

## Board inclusion

A route belongs on the Weekly Board when it helps prevent forgotten work, reduces restart cost, updates governed state through the correct path, or produces meaningful external evidence.

## Success criterion

A board mark should resolve quickly to:

1. what the route means;
2. which real source/view it needs;
3. what completion looks like;
4. where evidence lands;
5. where to stop.
