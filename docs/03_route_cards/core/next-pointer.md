# NEXT — Next Pointer

## When

Use at daily close, focus block close, Friday close, or when parking work.

## Purpose

Make restart cheap.

## Inputs

- Current artifact
- Current state
- Block result
- Open blocker
- Future restart point

## Format

```text
Next:
Context:
Artifact:
First action:
Do not open:
Warning:
```

## Minimal version

```text
Next: continue X from section Y.
Artifact: path/link.
First action: do Z for 20 min.
Warning: do not reopen A/B.
```

## Output

A small restart instruction.

## Tick valid when

A future block can restart without reconstructing the thread.

## Stop rule

Do not write a report. Write a pointer.
