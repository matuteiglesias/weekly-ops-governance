# Agent Navigation Guide

This guide is for future Codex, ChatGPT, or other agents editing this repository.

The repository is a paper-first weekly operations governance system. Keep the architecture connected without turning every page into a manual.

## Where to start

1. Start with the [Operator Console](operator-console.md) to understand human needs.
2. Use the [Support Flow Map](support-flow-map.md) to understand the path from board tick to review.
3. Use the [Route Atlas](../02_governance_map/route-atlas.md) when a route ID needs links to card, contract, support page, state, evidence, printable, and stop rule.
4. Use the [Weekly Board layout](../01_weekly_board/weekly-board-layout-v0.md) to understand the paper surface.
5. Use the [Digital Support Index](../04_digital_support_index/index.md) only as a link/navigation layer.

## Authority files

| Authority | File or section | What it governs |
|---|---|---|
| Human surface | [Weekly Board layout](../01_weekly_board/weekly-board-layout-v0.md) | What belongs on the paper weekly board. |
| Route list and route lookup | [Route Atlas](../02_governance_map/route-atlas.md), [Routes Master Table](../02_governance_map/tables/routes-master-table.md), `data/routes/routes.csv` | Route IDs, route relationships, and navigation. |
| Route behavior | [Route Cards](../03_route_cards/index.md) | Minimum route execution, output, tick validity, and stop rule. |
| Governance boundaries | [Governance contracts](../02_governance_map/index.md) | What each route or domain must protect. |
| Digital navigation | [Digital Support Index v0](../04_digital_support_index/digital-support-index-v0.md) | Links from routes to state, evidence, and support pages. |
| State truth | [State sources](../04_digital_support_index/index.md#state-sources) | Current state and next pointers. |
| Evidence truth | [Evidence sources](../04_digital_support_index/index.md#evidence-sources) | Proof of outputs and externalization. |
| Printable inventory | [Printables Manifest](../06_printables/printables-manifest.md) | Printable source/generated asset mapping. |

Important: treat `data/routes/routes.csv` and [Digital Support Index v0](../04_digital_support_index/digital-support-index-v0.md) as navigational indexes, not as full content. Do not turn either file into a manual or duplicate route-card/SOP material there.

## What not to edit casually

- Do not bloat the [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md) with SOPs, full checklists, project universes, finance details, or Monday Bridge fields.
- Do not merge [Monday Bridge](../06_printables/sources/monday-bridge-print.md) back into the Weekly Board.
- Do not turn route cards into long SOPs.
- Do not duplicate source-of-truth state inside support-index pages.
- Do not manually edit generated PDFs or PNGs under `docs/06_printables/generated` or `site/static/printables`.
- Do not link to `site/build/...` or local absolute filesystem paths.

## How to add a route

1. Add or update the short route card under `docs/03_route_cards/`.
2. Add or update the relevant governance contract under `docs/02_governance_map/domain-contracts/` if the route needs a contract boundary.
3. Add or update the Digital Support Index domain page under `docs/04_digital_support_index/domains/`.
4. Add state and evidence links to the route's support page.
5. Add the route to the [Route Atlas](../02_governance_map/route-atlas.md) and the [Routes Master Table](../02_governance_map/tables/routes-master-table.md) when appropriate.
6. Update `data/routes/routes.csv` as a navigational index entry, not as the route's full content.
7. Add reciprocal links from route card, support page, and relevant index pages.

## How to add a printable

1. Add or update the source under `docs/06_printables/sources/`.
2. Add the printable to the [Printables Manifest](../06_printables/printables-manifest.md).
3. Generate assets into `docs/06_printables/generated` using the repo's print/render workflow.
4. Run `bash scripts/site/sync-printables.sh` so Docusaurus static assets are copied into `site/static/printables`.
5. Link generated site assets with `/printables/<file>`, not `site/static/...` or `site/build/...`.
6. If the printable changes an operating path, link it from the [Operator Console](operator-console.md), [Route Atlas](../02_governance_map/route-atlas.md), or relevant route card.

## How to update Docusaurus links

- Docs-to-docs Markdown links should be relative links with `.md` extensions so they work in both the repository and Docusaurus.
- Site homepage/nav links in `site/src/pages/index.tsx` and `site/docusaurus.config.ts` should use Docusaurus route paths for docs pages.
- Static printable assets should use `/printables/<file>` paths.
- Never link to `site/build/...`.
- After link changes, run `cd site && npm run build` and review Docusaurus warnings.

## How to avoid bloating the weekly board

The board should show route IDs, visible ticks, annotations, outputs, blockers, and pointers. If a proposed addition is a checklist, SOP, source-of-truth state, evidence log, or redesign note, put it somewhere else and link to it.

Use this split:

- Weekly Board = human paper surface.
- Route Card = short operational action.
- Digital Support Index = links.
- State Source = truth.
- Evidence Source = proof.
- Full Context = rationale/redesign.

## How to preserve Monday Bridge separation

Monday Bridge is a separate restart artifact. It can be referenced by `NEXT`, `CARRY-W`, and printables, but its fields should not be copied into the Weekly Board.

When editing Monday Bridge links, keep these connected:

- [NEXT Pointer](../03_route_cards/core/next-pointer.md)
- [CARRY-W route card](../03_route_cards/project-work/carry-w.md)
- [Carry State](../04_digital_support_index/state-sources/carry-state.md)
- [Weekly Packet](../04_digital_support_index/state-sources/weekly-packet.md)
- [Monday Bridge source](../06_printables/sources/monday-bridge-print.md)
- [Monday Bridge PDF](/printables/monday-bridge-v1.pdf)

## Related

- [Support Flow Map](support-flow-map.md)
- [Operator Console](operator-console.md)
- [Internal Link Audit Report](../09_backlog/tasks/internal-link-audit-report.md)

## Mermaid diagram sources

Mermaid diagrams are explanatory aids only. Do not treat them as source of truth or use them to replace route cards, governance contracts, state sources, or evidence conventions.

- `docs/04_digital_support_index/navigation/ops-support-flow.mmd`
- `docs/04_digital_support_index/navigation/route-to-state-evidence.mmd`
- `docs/04_digital_support_index/navigation/human-agent-boundary.mmd`
