# Support Flow Map

The system is paper-first, but not paper-only. A board tick is a visible prompt to follow the smallest useful support path.

```text
Board tick
  -> route card
  -> contract
  -> state
  -> evidence
  -> review
```

## Layer responsibilities

| Layer | What it is | Use it for | Do not use it for |
|---|---|---|---|
| Paper surfaces | Writable human artifacts such as the [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md), [Weekly Board PDF](/printables/weekly-board-v1.pdf), and [Monday Bridge PDF](/printables/monday-bridge-v1.pdf). | Seeing the week, ticking routes, preserving restart context. | Full manuals, duplicated state, or deep redesign notes. |
| Route cards | Short operational cards in [Route Cards](../03_route_cards/index.md). | Running one route with purpose, minimum steps, output, tick validity, and stop rule. | Long SOPs or broad context. |
| Governance contracts | Contract files in the [Governance Map](../02_governance_map/index.md). | Knowing what makes a route valid and what boundary it protects. | Step-by-step execution or state storage. |
| Digital support pages | Link hubs in the [Digital Support Index](../04_digital_support_index/index.md). | Moving from route ID to card, contract, state, evidence, and link maps. | Duplicating route-card content or replacing source-of-truth state. |
| Source-of-truth state | State source files such as [Carry State](../04_digital_support_index/state-sources/carry-state.md), [Weekly Packet](../04_digital_support_index/state-sources/weekly-packet.md), [Finance Calendar](../04_digital_support_index/state-sources/finance-calendar.md), and [Ledger](../04_digital_support_index/state-sources/ledger.md). | Reading or updating the current truth. | Keeping parallel copies on the board or in support pages. |
| Evidence / proof | Evidence sources such as [Output Log](../04_digital_support_index/evidence-sources/output-log.md), [Messages Sent](../04_digital_support_index/evidence-sources/messages-sent.md), [Published Posts](../04_digital_support_index/evidence-sources/published-posts.md), [Deployments](../04_digital_support_index/evidence-sources/deployments.md), and [Reports](../04_digital_support_index/evidence-sources/reports.md). | Proving that work happened or a route produced an external artifact. | Planning the week or storing unreviewed state. |
| Full context / redesign | Rationale, SOPs, architecture, and audit notes in [Full Context](../05_full_context/index.md). | Redesigning, auditing, or understanding why the system is shaped this way. | Normal daily operation. |

## Flow by route tick

1. Start from a visible tick or route ID on the [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md).
2. Open the matching route in the [Route Atlas](../02_governance_map/route-atlas.md) or [Route Cards](../03_route_cards/index.md).
3. Check the governance contract only if the route boundary or tick criterion is unclear.
4. Use the Digital Support Index domain page to reach state and evidence.
5. Update only the source-of-truth state that the route touches.
6. Leave evidence or a next pointer when the route produces output.
7. Review through the appropriate weekly, carry, finance, or bridge routine.

## Example: finance tick

```text
FIN-W board tick
  -> FIN-W route card
  -> FIN-GOV contract
  -> FIN-W support page
  -> Finance Calendar / Ledger
  -> Output Log if action was taken
  -> Weekly Packet if it changes the week
```

Start at [FIN-W in the Route Atlas](../02_governance_map/route-atlas.md) or [FIN-W route card](../03_route_cards/situational/fin-w.md).

## Example: project continuity tick

```text
CARRY-W / NEXT board tick
  -> CARRY-W route card or NEXT Pointer
  -> CARRY-GOV / NEXT-GOV contract
  -> CARRY-W support page
  -> Carry State / Project Frontier
  -> Output Log or Monday Bridge
  -> next week review
```

Start at [CARRY-W in the Route Atlas](../02_governance_map/route-atlas.md), [CARRY-W route card](../03_route_cards/project-work/carry-w.md), or [Monday Bridge source](../06_printables/sources/monday-bridge-print.md).

## Related

- [Operator Console](operator-console.md)
- [Route Atlas](../02_governance_map/route-atlas.md)
- [Agent Navigation Guide](agent-navigation-guide.md)

## Mermaid diagram sources

Mermaid is maintained as explanatory source, not as source of truth. Docusaurus Mermaid rendering is not configured in this repo, so the diagrams are kept as `.mmd` files and referenced from navigation pages instead of enabling a Mermaid plugin migration.

- `docs/04_digital_support_index/navigation/ops-support-flow.mmd`
- `docs/04_digital_support_index/navigation/route-to-state-evidence.mmd`
- `docs/04_digital_support_index/navigation/human-agent-boundary.mmd`
