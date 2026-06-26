#!/usr/bin/env bash
set -euo pipefail

SRC="${1:?source html required}"
OUT_PDF="${2:?output pdf required}"
OUT_PNG="${3:-}"

mkdir -p "$(dirname "$OUT_PDF")"

BROWSER=""
for candidate in chromium chromium-browser google-chrome google-chrome-stable; do
  if command -v "$candidate" >/dev/null 2>&1; then
    BROWSER="$candidate"
    break
  fi
done

if [ -z "$BROWSER" ]; then
  echo "No Chromium-compatible browser found."
  echo "Install one of: chromium, chromium-browser, google-chrome."
  exit 1
fi

ABS_SRC="$(realpath "$SRC")"
ABS_OUT="$(realpath -m "$OUT_PDF")"

"$BROWSER" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --print-to-pdf="$ABS_OUT" \
  --print-to-pdf-no-header \
  "file://$ABS_SRC"

echo "PDF written: $OUT_PDF"

if [ -n "$OUT_PNG" ]; then
  mkdir -p "$(dirname "$OUT_PNG")"
  ABS_PNG="$(realpath -m "$OUT_PNG")"

  "$BROWSER" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --window-size=1754,1240 \
    --screenshot="$ABS_PNG" \
    "file://$ABS_SRC"

  echo "PNG written: $OUT_PNG"
fi
