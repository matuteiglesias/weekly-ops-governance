#!/usr/bin/env bash
set -euo pipefail

scripts/print/render-weekly-board.sh
scripts/print/render-monday-bridge.sh

# Secondary references remain markdown/pandoc based for now.
scripts/print/render-governance-map.sh || true
scripts/print/render-support-index.sh || true

echo
echo "Generated files:"
find docs/06_printables/generated -maxdepth 1 -type f | sort
