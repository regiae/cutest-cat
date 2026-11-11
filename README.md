# Cutest Cat — make.fun entry (cutest-cat-01)

A fluffy white kitten with huge sparkling blue eyes and a tiny pink nose, hugging a smiling pink plush fish with both paws, on a soft pink background. The cat fills the frame and stays clear even at small sizes.

## How it works

The repository holds the picture as `entry.png`. The program `main.ts` (Node 22, standard library only) copies it byte-for-byte to the output directory as `entry.png`. No network, no decoding, no re-encoding, so every run writes exactly the same bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The picture lands at `out/entry.png`. In the grader's container the output directory is `/output`.
