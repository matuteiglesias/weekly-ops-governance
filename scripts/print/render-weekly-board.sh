#!/usr/bin/env bash
set -euo pipefail

scripts/print/render-html-printable.sh \
  docs/06_printables/sources/weekly-board-v1.html \
  docs/06_printables/generated/weekly-board-v1.pdf \
  docs/06_printables/generated/weekly-board-v1.png
