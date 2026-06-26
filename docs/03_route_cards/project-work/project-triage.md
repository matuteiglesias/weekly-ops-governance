# PROJECT-TRIAGE — Project Triage

## When

Use when too many fronts are active, when Carry State feels noisy, or during WEEK-GOV if the week is overloaded.

## Purpose

Decide what is active, paused, waiting, done, or not-now.

## Inputs

- Carry State
- Project frontier
- Weekly goals
- Current pressure
- External commitments
- Energy and constraints

## Steps minimum

1. List currently active fronts.
2. Identify fronts with no real next action.
3. Move non-active fronts to paused/waiting/not-now.
4. Keep at most a small number of active fronts.
5. Write next pointer for remaining active fronts.

## Output

Reduced active set.

## Tick valid when

The active front list is smaller and more believable.

## Stop rule

Do not turn triage into project planning. Triage decides status, not full strategy.
