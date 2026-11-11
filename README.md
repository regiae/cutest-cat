# Cutest cat — v3

A fluffy ginger kitten sitting upright, hugging a smiling pink plush fish
with both paws. Enormous sparkling amber eyes, plain cream background.
The purest version of the winning formula: ginger kitten + plush fish,
no extra props.

## What this program does

`main.ts` copies the chosen picture (`entry.png`, next to the script) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), creating
the output directory if needed. It then reads the copy back and throws if
any byte differs from the source, so the output is always byte-identical
to `entry.png`.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```

Requirements: Node 22, stdlib only, no dependencies, no network.
