# FIN-GOV — Finance Contract

## Purpose

Prevent missed vencimientos, unregistered payments, unmanaged claims, and ledger drift.

## Contract

Finance governance is valid when near-term obligations are checked and unclear financial items have one of:

- paid;
- registered;
- replied;
- claimed;
- deferred with date;
- escalated;
- explicitly marked as no action.

## Inputs

- Finance calendar
- Ledger
- Finance weekly checklist
- Bills / reminders
- Payment confirmations
- Claims or replies
- Banking/account state

## Outputs

- Paid item
- Registered item
- Deferred item
- Claim/reply
- Clean list of next financial actions
- Confirmation that no near-term action is needed

## Tick valid when

No near-term financial obligation remains ambiguous.

## Stop rule

Weekly finance review should not become deep financial analysis unless a concrete blocker requires it.
