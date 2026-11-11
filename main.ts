// Cutest Cat entry for make.fun (cutest-cat-01).
// The program copies the kitten picture held in this repository
// (entry.png) to the output directory as entry.png.
// Node 22, standard library only. Deterministic: a plain byte copy,
// so every run writes exactly the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// A plain byte copy: no decoding or re-encoding, so the output is
// bit-for-bit identical to the picture in this repository on every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
