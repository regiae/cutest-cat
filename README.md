# Cutest cat — v4

A fluffy cream-white kitten with a pink bow, big sparkling blue eyes,
sitting on a soft purple blanket among white and purple flowers.
The picture the user picked: soft, bright, and cute at a glance.

## What this program does

`main.py` copies the chosen picture (`entry.png`, a JPEG, 1024x1024)
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`),
creating the output directory if needed. It checks the JPEG magic
bytes, then reads the copy back and fails if any byte differs, so
every run produces byte-identical output.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=out python3 main.py   # writes out/entry.png
```

Requirements: Python 3.13, stdlib only, no dependencies, no network.
