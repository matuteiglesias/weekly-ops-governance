#!/usr/bin/env bash
set -euo pipefail

SRC="${1:?source markdown required}"
OUT_PDF="${2:?output pdf required}"
OUT_HTML="${OUT_PDF%.pdf}.html"

mkdir -p "$(dirname "$OUT_PDF")"

CSS_FILE="$(mktemp)"
cat > "$CSS_FILE" <<'CSS'
body {
  font-family: Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.35;
  margin: 24px;
}
h1, h2, h3 {
  margin-top: 0.8em;
  margin-bottom: 0.35em;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0.5em 0 1em 0;
}
td, th {
  border: 1px solid #999;
  padding: 5px 6px;
  vertical-align: top;
}
code, pre {
  font-family: monospace;
}
hr {
  border: none;
  border-top: 1px solid #999;
  margin: 1em 0;
}
@media print {
  body { margin: 12mm; }
  h1, h2 { page-break-after: avoid; }
  table { page-break-inside: avoid; }
}
CSS

if command -v pandoc >/dev/null 2>&1; then
  if command -v xelatex >/dev/null 2>&1; then
    pandoc "$SRC" \
      --from markdown \
      --pdf-engine=xelatex \
      -V geometry:margin=12mm \
      -o "$OUT_PDF"
    echo "PDF written: $OUT_PDF"
  else
    pandoc "$SRC" \
      --from markdown \
      --standalone \
      --css "$CSS_FILE" \
      -o "$OUT_HTML"
    echo "HTML written: $OUT_HTML"
    echo "Install xelatex for direct PDF output, or print the HTML to PDF from browser."
  fi
else
  {
    echo '<!doctype html><html><head><meta charset="utf-8">'
    echo '<title>Printable</title>'
    echo '<style>'
    cat "$CSS_FILE"
    echo '</style></head><body><pre>'
    sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' "$SRC"
    echo '</pre></body></html>'
  } > "$OUT_HTML"
  echo "pandoc not found. Basic HTML fallback written: $OUT_HTML"
fi

rm -f "$CSS_FILE"
