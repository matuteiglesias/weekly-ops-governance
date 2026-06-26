# GYM-GOV — Gym Governance Contract

## Purpose

Make gym and movement blocks governed by routine, progression, recovery, and minimal logging.

## Contract

A gym block is valid when it either:

- follows the current routine; or
- makes a conscious recovery decision.

## Inputs

- Current routine
- Gym log
- Sleep/fatigue signal
- Pain/injury signal
- Available time
- Available equipment

## Outputs

- Session completed
- Recovery decision
- Minimal log
- Progression signal
- Constraint noticed

## Tick valid when

The session followed a plan, or recovery was chosen explicitly rather than by drift.

## Stop rule

Do not redesign the training program during the session.
