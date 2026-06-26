#!/usr/bin/env bash
set -euo pipefail
scripts/print/render-one.sh \
  docs/06_printables/sources/governance-map-print.md \
  docs/06_printables/generated/governance-map.pdf
