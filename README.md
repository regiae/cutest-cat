# Cutest cat v2 — make.fun cutest-cat-01

A ginger kitten with a daisy crown, blepping, hugging a smiling pink plush fish.

The program copies the image the repository holds (`entry.png`) to the output
directory, so both runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is written to `out/entry.png`.
