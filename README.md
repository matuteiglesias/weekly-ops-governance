# Weekly Ops Governance

This repo contains the content scaffold for a personal weekly operations governance system.

The system separates:

- a human weekly board;
- governance contracts;
- route cards;
- digital support index;
- state sources;
- evidence sources;
- future printable artifacts.

## Core idea

The weekly board is not the full operating manual.

It is a lightweight human-facing surface that routes work into the right contracts, checklists, state sources, and evidence targets.

## Architecture

```text
Weekly Board
  -> route ID / checkbox / annotation
  -> governance contract
  -> route card
  -> digital support index
  -> state source
  -> evidence / next pointer
  -> full context if needed
```

## Main directories

| Directory                       | Purpose                                                       |
| ------------------------------- | ------------------------------------------------------------- |
| `docs/01_weekly_board`          | Human weekly board design.                                    |
| `docs/02_governance_map`        | Route architecture and governance contracts.                  |
| `docs/03_route_cards`           | Short cards for running routes.                               |
| `docs/04_digital_support_index` | Functional index linking routes to state/checklists/evidence. |
| `docs/05_full_context`          | Long-form rationale and SOPs.                                 |
| `docs/06_printables`            | Printable sources, specs, and generated PDFs.                 |
| `data`                          | Machine-readable route/link manifests.                        |

## Current checkpoint

Olas completed as v0 seeds:

* Ola 1: Governance Map
* Ola 2: Route Cards
* Ola 3: Digital Support Index

Next edge:

* Seed the Weekly Board v0 as a human printable artifact.
* Add real links to Carry State, finance calendar, ledger, gym log, body log, and capture inbox.
* Create simple PDF render scripts later.

## Human-use principle

The paper board should be usable with a pen.

The digital index should be used only when a route needs links, state, or deeper context.
