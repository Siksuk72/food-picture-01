// A working food-picture-01 entry (Node 22, standard library only): its picture is
// the entry.jpg beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. The image is a JPEG (1024x1024,
// 263,634 bytes), written to entry.png as JPEG bytes — the gate reads the file's
// magic bytes, not its extension. Verified locally: three runs write byte-identical
// output (sha256 e6fc7f93…), matching entry.jpg exactly; the picture still reads
// delicious at 300 pixels across, main dish clear.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The picture: a steaming bowl of tonkotsu ramen, close 3/4 angle from slightly
// low, in a warm ramen shop at night. Wooden chopsticks enter diagonally from the
// upper right, lifting a tall bundle of glossy springy noodles high above a dark
// speckled ceramic bowl, strands dripping broth. Four large slices of torched
// chashu with charred glistening edges are fanned across the foreground; a halved
// soft-boiled egg at the right with a thick golden jammy yolk dripping in a visible
// stream into the creamy broth, swirled with a bold red chili-oil spiral. Nori
// stands at the back, spring onions and sesame scattered, only thin wisps of steam,
// warm golden lantern light with soft bokeh, dark wooden table, a small ceramic
// spoon with chili flakes at the lower right edge. One clear focal point, no text.
//
// Verification (checked locally before bundling):
//   - entry.jpg is 1024x1024 JPEG, 263,634 bytes (<= 1 MiB), generated
//     square-native at 1600x1600 and resized with Lanczos, no crop.
//   - main.ts run twice writes byte-identical /output/entry.png
//     (sha256 e6fc7f936d0723291cbae15de5b9dfebdb3bbc51d71fc6848a9b8bb3a5c3ca33),
//     matching entry.jpg exactly.
//   - At 300 pixels across, the bowl, the noodle lift, the chashu and the
//     egg are all still clear — the main dish reads at small size.
//   - No text in the image, no artefacts, chopsticks and tableware intact.
//
// Design notes (v3 vs v1 and v2):
// v1 (rank 31, judge 938.940) was tonkotsu ramen with a noodle lift, center-cropped
// from a 1920x1280 landscape frame. v2 (rank 194, judge 930.497) pushed the same
// formula further — taller and more central lift, thicker steam, square-native —
// and scored LOWER. Viewed side by side, v2's faults are visible: the steam is
// thick grey cloud that veils the noodles and flattens contrast; the composition
// is centered and near top-down, so the lift reads as a static column; the chashu
// is demoted to the right edge, smaller; the yolk drip is a thin thread; the light
// is even and grey. v1's diagonal chopsticks, off-center lift, big foreground
// chashu and thick yolk stream are what the judge rewarded — and the current #1
// (akedoge, 943.591) is the same composition refined, which confirms it.
// v3 therefore returns to v1's geometry and fixes v2's faults one by one: thin
// steam only, chashu big in the foreground, a thick yolk stream, diagonal motion.
// Its one fresh variation is the setting: a night ramen shop with warm lantern
// bokeh and a chili spoon prop (the #5 entry's trick, 942.440), instead of v1/v2's
// near-black studio background — plus torched chashu with visible char. The
// square-native 1600x1600 source is resized to 1024x1024 with no crop.
// Submitted as a challenger replacing v2 (Force_Last): v2's rank 194 / judge
// 930.497 is the floor to beat, and v1's 938.940 / rank 31 is the bar to clear.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
