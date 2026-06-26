# CAPTURE-ROUTER — Route Free Notes

## When

Use as a subroutine of CAPTURE-GOV.

## Purpose

Convert notes into the right destination without overprocessing.

## Inputs

- Free note
- Capture manual
- Current project/front context

## Route options

| Route | Meaning |
|---|---|
| Action | Requires a concrete next action. |
| State | Updates Carry State or another source of truth. |
| Reference | Useful later but not actionable. |
| Waiting | Depends on someone/something else. |
| Discard | Not useful enough to keep. |

## Steps minimum

1. Read note once.
2. Choose route.
3. Move or mark it.
4. Avoid rewriting unless needed.

## Output

One routed note.

## Tick valid when

The note has a destination.

## Stop rule

Do not turn routing into editing.
