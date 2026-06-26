# Governance Map

The governance map defines the routing architecture of the weekly operations system.

The weekly board shows route IDs and ticks. This map explains what those IDs mean, what contract governs them, what state they touch, and what evidence they should leave.

## Core files

- `governance-map-v0.md`
- `governance-map-column-definitions.md`
- `tables/routes-master-table.md`

## Domain contracts

- `domain-contracts/week-gov.md`
- `domain-contracts/focus-gov.md`
- `domain-contracts/maint-gov.md`
- `domain-contracts/carry-gov.md`
- `domain-contracts/capture-gov.md`
- `domain-contracts/fin-gov.md`
- `domain-contracts/gym-gov.md`
- `domain-contracts/body-gov.md`
- `domain-contracts/house-gov.md`
- `domain-contracts/external-gov.md`
- `domain-contracts/next-gov.md`

## Design rule

If a route appears on the weekly board, it must have:

- stable ID;
- contract;
- inputs;
- touched state;
- output/evidence;
- tick criterion;
- stop rule.

## Start here

- Use the [Route Atlas](route-atlas.md) when you have a route ID and need the route card, governance contract, support page, state, evidence, printable, and stop rule.
- Start with the [Governance Map v0](governance-map-v0.md) for the active route architecture.
- Use the [Routes Master Table](tables/routes-master-table.md) to connect route IDs to contracts, state, and evidence.
- Use domain contracts such as [FIN-GOV](domain-contracts/fin-gov.md) and [CARRY-GOV](domain-contracts/carry-gov.md) when a route card needs its governing rule.

## Related

- [Weekly Board layout](../01_weekly_board/weekly-board-layout-v0.md)
- [Route Cards](../03_route_cards/index.md)
- [Digital Support Index](../04_digital_support_index/index.md)

## Do not use this for

Do not expand this section into SOPs or duplicate state. The map defines route architecture; route execution belongs in route cards, and source-of-truth links belong in the Digital Support Index.
