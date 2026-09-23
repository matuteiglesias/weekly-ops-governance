# Weekly Ops consolidation prep — September 2026

Status: preparatory only. No routes, board layout, source links, printables, navigation, or deployment are changed by this file.

## Purpose

Weekly Ops Governance should remain a human routing surface. It should not compete with Control Tower v2, Office v2, or future published views for ownership of state.

The current repository has several valuable design principles — paper-first use, short route cards, explicit stop rules, and no duplicated state — but it also contains placeholder state pages, repeated route registries, and a large vocabulary of GOV-suffixed routes that may no longer deserve first-class status.

## Current strengths to preserve

- Weekly Board as a low-density human surface.
- Route cards as short bounded operating instructions where a repeated route truly exists.
- Stop rules and valid completion criteria.
- Explicit rule that Governance Map must not duplicate state.
- Digital support as navigation rather than storage.
- Full Context kept outside normal daily use.

## Current drift to address later

### 1. State-source placeholders

Several support pages still describe invented or unresolved state surfaces such as Weekly Packet, Project Frontier, and TODO links for Carry State. These should later be replaced with real Control Tower v2 tables or compiled/published view references.

### 2. Duplicate route registries

Route meaning is repeated across Governance Map, Routes Master Table, Route Atlas, Digital Support Index, domain support pages, and route cards.

Target: one canonical route registry or generated view. Other pages should render or link from it.

### 3. Route vocabulary inflation

Current named routes include BOOT, MAINT, FOCUS, CLOSE, NEXT, WEEK-GOV, CARRY-M, CARRY-W, FIN-W, FIN-U, BODY-GOV, GYM-GOV, HOUSE-GOV, CAPTURE-GOV, EXTERNAL, JOB-GOV, CLIENT-SITES-GOV, POLICY-CONTENT-GOV, ACADEMIC-GOV, CLN-30, ACTIVE-FRONTS, PROJECT-TRIAGE, BREAKTHROUGH-14D, QUARTERLY-REFRAME, and others.

These should not all automatically survive. A route deserves a stable ID only if it names a repeated human action with a real source, a clear completion condition, and actual current use.

Domains that merely categorize work should become ordinary categories/tags rather than GOV-suffixed pseudo-contracts.

### 4. Cadence encoded as doctrine

Mon/Wed/Fri, 14-day, quarterly, and similar timing assumptions should not be embedded as ecosystem ontology unless they still serve a real current routine.

Current direction is heuristic surfacing from governed state: groups of items may be selected and rendered when useful without forcing every surface into a fixed timing model.

### 5. Old Carry / Project language

Operational identity is front_id and governed carry posture lives in carry_state_v2. Weekly documentation should not maintain its own simplified project/front schema.

## Target architecture

Weekly Board / Weekly UI
  -> route or view selection
  -> published/read-oriented view where dynamic state is needed
  -> source references back to governed state

Control Tower v2 remains authoritative. Office/agents may compile useful subsets. Weekly Ops renders or routes to them.

## Proposed later changes by area

| Area | Later action |
|---|---|
| docs/01_weekly_board | Keep and simplify. Preserve the paper board idea; remove fixed timing doctrine that is not used. |
| governance-map-v0.md | Recast as routing principles and generated route registry documentation. |
| routes-master-table.md | Make this, or a machine-readable sibling, the single route registry if routes remain useful. |
| route-atlas.md | Generate from the canonical route registry or remove as duplicate. |
| domain-contracts/* | Review individually; keep only contracts that protect a real cross-cutting boundary. Collapse category-only GOV contracts. |
| route_cards/core/* | Highest survival probability: BOOT, FOCUS, MAINT, CLOSE, NEXT, subject to present-use check. |
| route_cards/project-work/* | Re-evaluate against Control Tower v2 and Office v2. CARRY and ACTIVE-FRONTS likely become views/queries rather than manual state-maintenance routes. |
| route_cards/homeostasis/* | Treat as optional personal routines, not core Ops ontology. Keep only if actively used. |
| route_cards/external/* | Consider ordinary workflow names or Frontier/relationship views rather than a parallel external-governance ontology. |
| route_cards/situational/* | Strong pruning candidate. Keep only repeated, current routines. |
| Digital Support Index | Preserve the navigation role, but make it source/view aware and generated where possible. |
| state-sources/* | Replace placeholder invented state pages with exact governed tables/views or remove. |
| Full Context | Keep lean; link to Ops Manual for doctrine. |
| printables | Preserve only printables still used; generate them from current route/view definitions when practical. |

## State re-grounding map

Later Weekly documentation should preferentially point to current sources such as:

- front_registry_v2 for stable operational fronts.
- carry_state_v2 for current governed posture.
- support_artifacts_v2 for governed pointers/support surfaces.
- runtime_health_v2 for runtime observation.
- relationships_v1 and relationship_agenda_v1 for relationship-related governance.
- current compiled Office artifacts or published views for human-ready subsets.

Do not add raw contact/event data merely to make Weekly Ops complete.

## Relationship to Event & Institutional Frontier

Frontier should not become another Weekly Ops route family.

It is a separate read-oriented renderer over a compiled institutional/event/relationship view. Weekly Ops may link to or surface that view when useful, but should not copy its state.

## Route survival test

Before retaining a named route during migration, verify all of the following:

1. A real person still uses the route or an agent/runtime actually consumes it.
2. Its input source is real and current.
3. Its output/evidence destination is real.
4. Its behavior is not already supplied by Office v2 compilation or a simple view.
5. The special route name saves more cognition than it costs.

If a route fails this test, prefer ordinary language, a view/filter, or retirement.

## Likely pruning hypotheses to test

- ACTIVE-FRONTS and PROJECT-TRIAGE may now be Control Tower/view queries rather than routes.
- CARRY-M and CARRY-W may collapse into normal reviewed carry-state updates rather than separate route doctrine.
- BREAKTHROUGH-14D and QUARTERLY-REFRAME are likely planning heuristics, not system primitives.
- JOB-GOV, CLIENT-SITES-GOV, POLICY-CONTENT-GOV, and ACADEMIC-GOV may be categories/fronts rather than governance contracts.
- BODY-GOV, GYM-GOV, HOUSE-GOV and CLN-30 may remain useful personal routines while being removed from the core architecture vocabulary.
- Weekly Packet and Project Frontier should not survive as placeholder state authorities if no current canonical producer exists.

These are hypotheses for the later migration, not changes made now.

## Migration sequence

1. Freeze a terminology disposition list shared with Ops Manual.
2. Verify actual route usage against current practice and automation.
3. Choose one canonical route registry representation.
4. Re-ground every surviving route to real state/view/evidence sources.
5. Remove duplicated route tables/indexes by generation or linking.
6. Simplify the Weekly Board vocabulary.
7. Regenerate printables and navigation.
8. Archive superseded route cards/contracts with a concise compatibility note.

## Non-goals of this prep branch

- No route deletions.
- No source-link edits.
- No board redesign.
- No print regeneration.
- No deployment.
- No changes to Control Tower or Office runtime.
- No attempt to force Frontier into the Weekly model.