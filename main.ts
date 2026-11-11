// Cutest cat entry (v3): writes the chosen cat picture to the output dir.
// The picture itself is entry.png next to this script; this program just
// copies it deterministically, so two runs produce byte-identical output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(import.meta.dirname, "entry.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });

// Guard: the source must be a JPEG (magic bytes FF D8 FF) before we copy.
const srcBytes = readFileSync(src);
if (srcBytes[0] !== 0xff || srcBytes[1] !== 0xd8 || srcBytes[2] !== 0xff) {
  throw new Error("entry.png is not a JPEG");
}
copyFileSync(src, dst);

const a = srcBytes;
const b = readFileSync(dst);
if (!a.equals(b)) {
  throw new Error("output does not match entry.png");
}
console.log(`wrote ${b.length} bytes to ${dst}`);
