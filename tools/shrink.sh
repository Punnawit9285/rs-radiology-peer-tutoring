#!/bin/sh
# Scale any figure in img/ whose long side is over 1100 px down to 1100 px (JPEG quality 82).
# Smaller images are left untouched, so running this again does not re-encode them.
cd "$(dirname "$0")/.."
for f in img/*.jpg; do
  m=$(sips -g pixelWidth -g pixelHeight "$f" | awk '/pixel/{if($2>m)m=$2} END{print m}')
  [ "$m" -gt 1100 ] && sips -Z 1100 -s formatOptions 82 "$f" >/dev/null && echo "shrunk $f ($m px)"
done
exit 0
