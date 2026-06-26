#!/usr/bin/env bash
set -euo pipefail

scripts/print/render-html-printable.sh \
  docs/06_printables/sources/monday-bridge-v1.html \
  docs/06_printables/generated/monday-bridge-v1.pdf \
  docs/06_printables/generated/monday-bridge-v1.png
