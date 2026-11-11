// A working cutest-cat-01 entry (Node 22, standard library only): its cat is the entry.png beside this file, and
// the program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Verify the copy: both runs must write the same bytes as the source.
if (!readFileSync(src).equals(readFileSync(dest))) {
  throw new Error('entry.png copy mismatch');
}
