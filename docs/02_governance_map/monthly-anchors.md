---
title: 30-slot monthly anchors
sidebar_position: 2
---

# 30-slot monthly anchors — proposed human timing layer

**Status: candidate heuristic for review.** This page proposes a human rhythm, not an activated calendar, automation, new route, or source-of-truth registry.

## Why a month?

The [weekly rhythm](../05_full_context/sops/user-week-rollaround-guide.md) gives different days different functions: opening, focused production, externalization, closure, homeostasis and rest. A month can similarly give a small number of **recurring obligations a predictable landing place**.

Think of it as *freezing the vortices*: instead of rediscovering a cloud of periodic chores whenever they resurface, allocate a few familiar positions in a 30-slot month. The goal is **fewer touches and less reconstruction**, not filling all 30 slots.

This borrows the modest useful part of fixed maintenance windows, recurring accounting closes and batching: make the *review opportunity* predictable while leaving execution conditional on actual need.

## Authority and scope

- Weekly Governance owns the **human timing convention** and may surface a due monthly anchor on the Weekly Board.
- Each contributing lane keeps its own owner, sources, eligibility rule, output and evidence. Finance, CRM, Office activity, household and other systems do not transfer authority here.
- Office/agents may already collect data daily; a monthly anchor should **not** duplicate a working producer or require a new ZIP, spreadsheet, queue, reminder or dashboard.
- Canonical deadlines, medical instructions, bill due dates, appointment dates, access failures and time-sensitive external commitments override these suggested slots. **Never delay an actual deadline to preserve the month pattern.**
- The month grid is an attention interface, not an operational database. One lightweight view of what is due is enough; do not copy canonical state into this repository.

## A sparse 30-slot sketch (not a schedule)

| Anchor | Human purpose | Eligible contributors and smallest useful action |
| --- | --- | --- |
| **1** | Open the month + close the previous half-month | Orient upcoming obligations; run/review the RETRO15 evidence digest for the preceding 16th–month-end window **only if evidence is ready**. |
| **5** | Personal source-export intake | Check due sources: WhatsApp monthly, OpenAI roughly every 2 months, LinkedIn/Instagram roughly quarterly, Contacts if needed. Acquire and register **only due, available** exports; Google Takeout remains selective, not a full bulk download. |
| **10** | Financial statement intake | In eligible months (illustratively every 2 months), check account access and retrieve overlapping transaction windows; let the accounting owner deduplicate, reconcile and produce balances. Does **not** replace [FIN-W](../03_route_cards/situational/fin-w.md) checks for near-term payments. |
| **16** | Close the first half-month | Review RETRO15 evidence for the 1st–15th; distinguish observed activity, inferred work modes and report outputs. Skip/recover gracefully if source coverage is incomplete. |
| **20** | Bounded homeostasis / resilience | Optional stock, backup-health, disk-space or physical-maintenance glance if existing owners don't already surface a problem. Real shortages, safety or health deadlines take precedence regardless of date. |
| **28** | Monthly closure and exception triage | Confirm which due acquisitions/consumer receipts succeeded, which exceptions need a next pointer, and whether any recurring touch should be dropped. No compulsory full-system sweep. |

**Empty days are desirable.** These are six *candidate landing zones*, not six guaranteed sessions; combine compatible chores in one short block when that reduces switching. There may be fewer anchors in practice.

## The 30-slot convention

- Slots **1–30** are stable ordinal labels even though civil months vary. Day **31** is optional overflow/rest, never an extra compulsory cycle.
- For February, **unavailable slots 29–30 are not automatically overdue**. An item genuinely assigned there must be explicitly brought to the last suitable day or next safe window while respecting its real due date.
- The 1st and 16th are **twice per calendar month**, not literally every 15 days. Retrospective windows should be recorded as half-open local-time ranges, with the prior month ending on its actual last day.
- Keep weekends, bank processing delays, travel and the weekly rhythm in view. A ±few-day landing-window is fine for flexible reviews, never for hard due dates.
- Multiple contributors may request a slot, but the human attention budget wins: merge cheap compatible checks, move a flexible one, or drop a redundant one. Avoid stacking bank logins, large file transfers and major reviews into one overloaded day.

## How a lane earns an anchor

Before placing a recurring touch, check all five:

1. **Owner and consumer:** Who owns the procedure and who benefits? Is an existing daily/weekly producer already doing it?
2. **Real cadence:** What determines *eligibility* (monthly, every second month, quarterly, triggered, or an actual deadline)? A check day is not an obligation to generate a new export.
3. **Timing slack:** Can the task safely move by a few days? Avoid forcing a real 21-day limit into 30 days, or changing a 40-day interval to 30 without considering the extra work.
4. **Smallest completed output:** A verified export + manifest, statement receipt, reviewed retrospective, or explicit “nothing due”; not a new management artifact.
5. **Exception policy:** What happens if access, source availability, freshness, coverage or a consumer fails? Leave a pointer with the owning system; do not silently claim completion.

The **contributor declares when work is due; the month suggests when the human touches it**. For even/odd-month or quarterly lanes, keep the due-month rule with the owning system rather than creating repetitive monthly executions. There is no need to move existing daily/weekly automation onto this grid.

## Interaction with the week

The month is a **higher-level rhythm**, not an alternative weekly planner.

- When an anchor enters the current week, [WEEK-GOV](../03_route_cards/core/week-gov.md) may select *one* bounded touch from it.
- Use existing weekly slots when possible: finance with [FIN-W](../03_route_cards/situational/fin-w.md), homeostasis with [HOUSE-GOV](../03_route_cards/homeostasis/house-gov.md), and closure with the week-end bridge.
- Preserve Thursday externalization, Friday carry/finance close, Saturday homeostasis and Sunday restart when those still help. The monthly position should bend around them.
- Show only the due anchor label and next pointer on the [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md), never a 30-day checklist inside the seven-day layout.

## One-month trial and stopping rule

If deliberately adopted later, trial for **one month** with existing sources and a tiny handwritten or existing-system view: `anchor · owner · due? · result/next pointer`. No extra scheduler or repository. At month end ask:

- Did any genuine monthly/bimonthly obligation fall through the cracks?
- Did grouping reduce manual lookups and interruptions?
- Did any slot create pointless work, late action or duplicated evidence?
- Which 1–2 anchors can be merged or removed?

**Stop here** while this is only a proposal. No task rescheduling, reminder creation, data acquisition or governance schema migration is implied.

## Related

- [Cadence, horizons, and week-shaping heuristics](cadence-horizons.md)
- [Operator Console](../00_overview/operator-console.md)
- [Weekly Board](../01_weekly_board/weekly-board-layout-v0.md)
- [User Week Rollover Guide](../05_full_context/sops/user-week-rollaround-guide.md)
