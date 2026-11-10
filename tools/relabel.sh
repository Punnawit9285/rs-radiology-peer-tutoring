#!/bin/sh
# Numbered versions of labelled course figures (tools/relabel.txt) for "identify structure N" questions.
set -e
cd "$(dirname "$0")/.."
[ tools/relabel -nt tools/relabel.swift ] || swiftc -O -o tools/relabel tools/relabel.swift
grep -v '^#' tools/relabel.txt | while read -r name pdf page x0 y0 x1 y1 boxes; do
  [ -n "$name" ] || continue
  tools/relabel "src-pdf/$pdf.pdf" "$page" 1440 "$x0" "$y0" "$x1" "$y1" "img/$name.jpg" $boxes
done
tools/shrink.sh >/dev/null
tools/dims.sh
