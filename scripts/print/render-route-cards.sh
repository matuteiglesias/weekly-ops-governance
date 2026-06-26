#!/usr/bin/env bash
set -euo pipefail
scripts/print/render-one.sh \
  docs/06_printables/sources/route-cards-print.md \
  docs/06_printables/generated/route-cards.pdf
