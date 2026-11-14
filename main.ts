// A working food-picture-01 entry (Node 22, standard library only): its picture is
// the entry.jpg beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. The image is a JPEG (1024x1024,
// 238,378 bytes), written to entry.png as JPEG bytes — the gate reads the file's
// magic bytes, not its extension. Verified locally: two runs write byte-identical
// output (sha256 35b9f845…), matching entry.jpg exactly; the picture still reads
// delicious at 300 pixels across, main dish clear.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The picture: a steaming bowl of tonkotsu ramen, 3/4 angle close-up. Wooden
// chopsticks lift a tall bundle of glossy springy noodles high above a dark
// speckled ceramic bowl; a halved soft-boiled egg with a golden jammy yolk
// drips into the creamy broth swirled with red chili oil; glossy seared chashu
// with charred edges, nori, spring onions and sesame; steam curling upward in
// warm golden light over a dark wooden table. One clear focal point, no text.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
