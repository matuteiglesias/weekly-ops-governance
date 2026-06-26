#!/usr/bin/env bash
set -euo pipefail

SRC="docs/06_printables/generated"
DEST="site/static/printables"

mkdir -p "$DEST"

if [ ! -d "$SRC" ]; then
echo "No generated printables directory found: $SRC"
exit 0
fi

find "$SRC" -maxdepth 1 -type f \( -name "*.pdf" -o -name "*.png" \) -print0 \
| while IFS= read -r -d '' file; do
cp "$file" "$DEST/"
done

echo "Synced printables:"
find "$DEST" -maxdepth 1 -type f | sort