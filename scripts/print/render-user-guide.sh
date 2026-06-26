#!/usr/bin/env bash
set -euo pipefail
scripts/print/render-one.sh \
  docs/06_printables/sources/user-guide-print.md \
  docs/06_printables/generated/user-guide.pdf
