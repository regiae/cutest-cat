"""Copy the kitten picture to the output directory.

Reads entry.png next to this script, verifies it is a JPEG,
and writes an identical copy to $MAKEFUN_OUTPUT_DIR/entry.png
(default /output). Deterministic: the output bytes are exactly
the input bytes, every run.

The picture: a fluffy cream-white kitten with a pink bow, big
sparkling blue eyes, sitting on a soft purple blanket among
white and purple flowers.
"""

import os
import sys

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")
OUT_DIR = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
OUT = os.path.join(OUT_DIR, "entry.png")

JPEG_MAGIC = b"\xff\xd8\xff"


def main() -> None:
    with open(SRC, "rb") as f:
        data = f.read()
    if not data.startswith(JPEG_MAGIC):
        print("error: entry.png is not a JPEG", file=sys.stderr)
        sys.exit(1)
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT, "wb") as f:
        f.write(data)
    with open(OUT, "rb") as f:
        written = f.read()
    if written != data:
        print("error: output differs from entry.png", file=sys.stderr)
        sys.exit(1)
    print(f"wrote {len(written)} bytes to {OUT}")


if __name__ == "__main__":
    main()
