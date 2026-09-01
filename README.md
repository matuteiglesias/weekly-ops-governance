# Weekly Ops Governance

This repo contains the documentation and human-facing surfaces for a personal weekly operations governance system.

It is **not** the canonical store for operational fronts, carry state, weekly priorities, Office compile outputs, or execution evidence. Those live in their owning systems. This repo documents how a human operator reviews, routes, annotates, closes, and restarts the week across those state sources.

## Start here

1. Start with the [Operator Console](docs/00_overview/operator-console.md) when you know the human need but not the file to open.
2. Use the [Support Flow Map](docs/00_overview/support-flow-map.md) to understand Board tick -> route card -> contract -> state -> evidence -> review.
3. Use the [Route Atlas](docs/02_governance_map/route-atlas.md) when you have a route ID and need the card, contract, support page, state, evidence, printable, and stop rule.
4. Read the [Weekly Board layout](docs/01_weekly_board/weekly-board-layout-v0.md) to understand the paper-first operating surface.
5. Print the [Weekly Board PDF](/printables/weekly-board-v1.pdf) and keep the [Monday Bridge PDF](/printables/monday-bridge-v1.pdf) separate for week restart.
6. Use the [User Week Rollover Guide](docs/05_full_context/sops/user-week-rollaround-guide.md) when closing or restarting a week.
7. When the board shows a route ID, open the [Route Cards index](docs/03_route_cards/index.md), then use the [Digital Support Index](docs/04_digital_support_index/index.md) to reach canonical state and evidence sources.

## Core idea

The weekly board is not the full operating manual and it is not a second state database.

It is a lightweight human-facing surface that routes attention into the right contracts, route cards, canonical state sources, and evidence targets. Handwritten annotations and decisions may be captured here as human interaction, but durable operational state belongs in the system that owns that state.

## Scope boundary

This repo owns:

- weekly governance documentation and route vocabulary;
- the paper/digital weekly board design;
- route cards and support indexes;
- printable interaction surfaces;
- week review, rollover, and restart procedures.

This repo does not own:

- the operational Front Registry or Carry State;
- Office compile semantics or generated Office state;
- Ops execution evidence or closure state;
- GitHub repository lifecycle/readiness state.

## Architecture

```text
Weekly Board / human annotation
  -> route ID / checkbox / note
  -> governance contract
  -> route card
  -> digital support index
  -> canonical external state source
  -> evidence / next pointer
  -> full context if needed
```

## Human workflow

```text
Weekly Board
  -> Route Card
  -> Digital Support Index
  -> Canonical State / Evidence
  -> update the owning system when durable state changes
  -> Monday Bridge when closing/restarting the week
```

## Main directories

| Directory | Purpose |
|---|---|
| [Operator Console](docs/00_overview/operator-console.md) | Need-first navigation for operators. |
| [Support Flow Map](docs/00_overview/support-flow-map.md) | Layer map for board tick -> route card -> contract -> state -> evidence -> review. |
| [Route Atlas](docs/02_governance_map/route-atlas.md) | Route-centric links to cards, contracts, state, evidence, printables, and stop rules. |
| [Agent Navigation Guide](docs/00_overview/agent-navigation-guide.md) | Editing guide for future agents. |
| [docs/01_weekly_board](docs/01_weekly_board/weekly-board-layout-v0.md) | Human weekly board design. |
| [docs/02_governance_map](docs/02_governance_map/index.md) | Route architecture and governance contracts. |
| [docs/03_route_cards](docs/03_route_cards/index.md) | Short cards for running routes. |
| [docs/04_digital_support_index](docs/04_digital_support_index/index.md) | Functional index linking routes to canonical state/checklists/evidence. |
| [docs/05_full_context](docs/05_full_context/index.md) | Long-form rationale and SOPs. |
| [docs/06_printables](docs/06_printables/index.md) | Printable sources, specs, and generated PDFs. |
| [docs/09_backlog](docs/09_backlog/index.md) | Known gaps, deferred work, and audit tasks. |
| `data` | Machine-readable route/link manifests for documentation/navigation. |

## Common paths

- Finance: [Weekly Board](docs/01_weekly_board/weekly-board-layout-v0.md) -> [FIN-W Route Card](docs/03_route_cards/situational/fin-w.md) -> [FIN-GOV Contract](docs/02_governance_map/domain-contracts/fin-gov.md) -> [FIN-W Support Index](docs/04_digital_support_index/domains/fin-w.md).
- Front continuity: [CARRY-W Route Card](docs/03_route_cards/project-work/carry-w.md) -> [CARRY-GOV Contract](docs/02_governance_map/domain-contracts/carry-gov.md) -> [Carry State](docs/04_digital_support_index/state-sources/carry-state.md) -> [Monday Bridge source](docs/06_printables/sources/monday-bridge-print.md).
- Printables: [Printables manifest](docs/06_printables/printables-manifest.md) -> [Weekly Board source](docs/06_printables/sources/weekly-board-v1.html) / [Monday Bridge source](docs/06_printables/sources/monday-bridge-v1.html) -> generated assets under `/printables/` on the Docusaurus site.

## Current checkpoint

Olas completed as v0 seeds:

* Ola 1: Governance Map
* Ola 2: Route Cards
* Ola 3: Digital Support Index

Next edge:

* Use the audit report in [internal-link-audit-report.md](docs/09_backlog/tasks/internal-link-audit-report.md) to close remaining placeholder and source-of-truth links.
* Replace placeholder links with real canonical Carry State, finance calendar, ledger, gym log, body log, and capture inbox locations without copying their state into this repo.

## Human-use principle

The paper board should be usable with a pen.

The digital index should be used only when a route needs links, state, or deeper context.
