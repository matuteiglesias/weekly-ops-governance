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
