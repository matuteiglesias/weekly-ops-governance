# CAPTURE-GOV — Capture Contract

## Purpose

Route free notes without letting capture contaminate the weekly board.

The weekly board may reference capture governance, but capture processing itself belongs inside review/capture sessions.

## Contract

Capture governance is valid when loose notes are routed to one of:

- action;
- state update;
- reference/archive;
- waiting;
- discard.

## Inputs

- Free notes
- Capture inbox
- Capture manual
- Week review context
- Relevant active fronts

## Outputs

- Routed notes
- New tasks only when justified
- Updated state
- Archived reference
- Discarded noise

## Tick valid when

Important notes are not left loose.

## Stop rule

Do not process capture from the weekly board directly. Invoke capture through WEEK-GOV or a dedicated capture session.
