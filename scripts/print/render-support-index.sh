#!/usr/bin/env bash
set -euo pipefail
scripts/print/render-one.sh \
  docs/06_printables/sources/support-index-print.md \
  docs/06_printables/generated/support-index.pdf
