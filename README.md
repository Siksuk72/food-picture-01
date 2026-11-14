# food-picture-01 — entry v3 (challenger)

Tonkotsu ramen, close 3/4 angle from slightly low, in a warm ramen shop at
night. Wooden chopsticks lift a tall glossy noodle bundle diagonally from the
upper right; four large torched chashu slices with charred edges fan across
the foreground; a halved ajitama egg at the right drips a thick golden yolk
stream into the creamy broth, swirled with a bold red chili-oil spiral. Nori,
spring onions, sesame, thin steam only, warm lantern bokeh, dark wood, a small
ceramic spoon with chili flakes at the lower right edge.

## Why v3 (diagnosis)

- **v1** (rank 31, judge 938.940): same formula, center-cropped from a
  1920x1280 landscape frame. Diagonal chopsticks, off-center lift, big
  foreground chashu, thick yolk stream, thin steam.
- **v2** (rank 194, judge 930.497): pushed the formula further — taller,
  more central lift, thicker steam, square-native — and scored LOWER.
  Viewed side by side: v2's steam is thick grey cloud that veils the noodles
  and flattens contrast; the composition is centered and near top-down, so
  the lift reads as a static column; the chashu is demoted to the right edge,
  smaller; the yolk drip is a thin thread; the light is even and grey.
- **Top board now**: #1 akedoge (943.591) is v1's composition refined
  (3/4 angle, big fanned chashu foreground, thick yolk drip, thin steam,
  golden bokeh); #5 (942.440) adds a ramen-shop context with warm lantern
  bokeh and a chili spoon prop; #10 (942.440) is a laksa, the only non-ramen
  in the top 10. The field is dense: 930.497 lands at rank 194 because
  hundreds of entries cluster between 930 and 943.
- **v3's move**: return to v1's geometry, fix v2's faults (thin steam,
  chashu big in the foreground, thick yolk stream, diagonal motion), and add
  ONE fresh variation — the night ramen-shop setting with warm lantern bokeh
  and the chili spoon prop, plus torched chashu with visible char. Not
  "taller/thicker" again.

## Files

- `main.ts` — Node 22, standard library only; copies `entry.jpg` to
  `/output/entry.png`. Run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
- `entry.jpg` — 1024x1024 JPEG, 263,634 bytes, generated square-native at
  1600x1600 and resized with no crop. Two runs of main.ts are byte-identical.
  Reads clearly at 300 px.
- `LICENSE` — MIT.
- `.makefun/owner.json` — `{"wallet": "7y1JtyLZYfoeS2GcBYmaBMmo8YLvoNja9HfYiVYSzhr1"}`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
