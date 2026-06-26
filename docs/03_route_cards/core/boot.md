# BOOT — Daily Execution Start

## When

Use during M1 / morning startup, especially before the first focus block.

## Purpose

Select a runnable block without reconstructing the whole system.

## Inputs

- Weekly board
- Carry State
- Active fronts
- Yesterday's close / next pointer
- Current energy and constraints

## Steps minimum

1. Look at the weekly board and current day role.
2. Check the next pointer or Carry State for active fronts.
3. Select one block.
4. Name expected output.
5. Name stop rule.
6. Start without redesigning the system.

## Output

A selected block with:

- front;
- expected output;
- time boundary;
- stop condition.

## Tick valid when

The first block is selected and can start without more meta-work.

## Stop rule

Do not debug the full operation during BOOT. If the system itself is broken, create a separate MAINT or WEEK-GOV item.
