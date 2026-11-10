#!/bin/sh
# Crop the course figures listed in tools/crops.txt from the two handouts (src-pdf/, not published) into img/*.jpg at 2x.
# Optional m=x0,y0,x1,y1 fields white out stray slide text (same 1270x952 coordinates).
set -e
cd "$(dirname "$0")/.."
[ tools/pdfrender -nt tools/pdfrender.swift ] || swiftc -O -o tools/pdfrender tools/pdfrender.swift
n() { echo "scale=4;$1/$2" | bc; }
grep -v '^#' tools/crops.txt | while read -r name pdf page x0 y0 x1 y1 rest; do
  [ -n "$name" ] || continue
  [ -n "$ONLY" ] && ! echo "$name" | grep -q "$ONLY" && continue
  masks=""
  for m in $rest; do set -- $(echo "${m#m=}" | tr ',' ' '); masks="$masks --mask=$(n $1 1270),$(n $2 952),$(n $3 1270),$(n $4 952)"; done
  tools/pdfrender crop "src-pdf/$pdf.pdf" "$page" 1440 $(n $x0 1270) $(n $y0 952) $(n $x1 1270) $(n $y1 952) "img/$name.jpg" $masks >/dev/null
done
ls img/*.jpg | wc -l
tools/shrink.sh >/dev/null
tools/dims.sh
