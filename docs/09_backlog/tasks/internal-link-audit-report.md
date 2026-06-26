# Internal Link Audit Report

## Sections inspected

- Root README and primary docs indexes.
- Weekly Board layout.
- Governance Map and route master table.
- Route Cards index plus FIN-W and CARRY-W cards.
- Digital Support Index index plus FIN-W and CARRY-W domain pages.
- State and evidence source placeholders for finance and carry continuity.
- Printables index, manifest, queue, generated assets, and synced Docusaurus static printables.
- Docusaurus config, sidebars, and home page were included in the inventory pass.

## Broken links found

No internal docs-to-docs broken-link failures remained after the navigation pass. Docusaurus still warns on `/printables/*.pdf` and `/printables/*.png` static asset links even after `scripts/site/sync-printables.sh` copies those files into `site/static/printables`; these are intentional static asset paths required for the published site and were verified by file presence. The audit also identified non-clickable code-path references in key indexes and manifests; those were converted or supplemented with Markdown links where they are part of the human navigation path.

## Links added

- README now routes users to the Operator Console, Route Atlas, Weekly Board, printable PDFs, User Week Rollover Guide, Route Cards, Digital Support Index, Printables, and common finance/carry paths.
- Major section indexes now include start-here, key-file, related, and not-for guidance, with Overview and Governance Map pointing to the Operator Console and Route Atlas.
- Weekly Board now links to Route Cards, Digital Support Index, Printables Manifest, Weekly Board PDF, and Monday Bridge source/PDF.
- Monday Bridge source now links back to NEXT Pointer, CARRY-W, Carry State, Weekly Packet, and Weekly Board.
- FIN-W and CARRY-W route cards now link to their governance contracts, support-index pages, state sources, and evidence source.
- FIN-W and CARRY-W support-index domain pages now use clickable Markdown links and include Output Log evidence.
- Printables Manifest now links to source files and `/printables/` static PDFs/PNGs.
- Operator Console now starts from human needs and routes into board/card/state/evidence workflows.
- Support Flow Map now documents Board tick -> route card -> contract -> state -> evidence -> review and separates paper, digital support, state, evidence, and full-context layers.
- Agent Navigation Guide now explains authority files, safe edit boundaries, route/printable additions, Docusaurus links, Weekly Board bloat prevention, and Monday Bridge separation.
- Mermaid `.mmd` sources now document ops support flow, route-to-state/evidence flow, and the human-agent boundary without making Mermaid the source of truth.
- Ops Navigator wrapper pages under Digital Support Index navigation make Operator Console, Route Atlas, Support Flow Map, and Agent Navigation Guide easy to find at Docusaurus-friendly routes.
- Route Atlas now maps important route IDs to route cards, governance contracts, support pages, state sources, evidence sources, printables, and stop rules.

## Unresolved placeholders

- Real external or private locations remain TODO for Carry State, Finance Calendar, Ledger, Project Frontier, Weekly Packet, and Output Log.
- Several zero-byte placeholder docs remain outside the main route path. They should receive minimal stubs only when they appear in a rendered navigation surface or become part of an active workflow.
- Route Cards printable layout remains deferred until a real card layout exists.

## Docusaurus route issues

- Static printable links should use `/printables/...`, not `site/build/...` or local filesystem paths.
- Markdown docs should continue using relative `.md` links so they work in both GitHub/plain Markdown and Docusaurus.
- Docusaurus build completed successfully after syncing printables, with warnings for intentional `/printables/` static asset links and the existing deprecated `onBrokenMarkdownLinks` config location.

## Recommended future linking conventions

- For docs-to-docs links, use relative Markdown links with `.md` extensions.
- For static generated printables, use `/printables/<file>` paths.
- Keep domain support pages as link hubs: route card, governance contract, state source, evidence source, and optional link map.
- Do not duplicate SOP content in route cards or support-index pages; link to Full Context instead.
- When adding a new board route, add reciprocal links in the route card, governance contract, support-index domain page, and any state/evidence source it touches.
