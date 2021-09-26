---
sidebar_position: 1
---

# Margins

Margins are created in the form of utility classes for all the dimensions (all-sides, top, bottom, right, left.)

## How it's working?

- `m-{value}`: For giving margins at all the sides. For example, `m-4` will give margin of `4 units` (i.e. 25.648px as 1 unit is created by this formula: {value} * 4px * 1.618)

## How to use it?

- For margin at **all the sides** - `m-{value}`
- For margin at **right side** - `m-right-{value}`
- For margin at **left side** - `m-left-{value}`
- For margin at **top side** - `m-top-{value}`
- For margin at **bottom side** - `m-bottom-{value}`

### Margin (all-sides)

```html
  <div class="m-1">Margin 1 unit</div>
  <div class="m-2">Margin 2 units</div>
  <div class="m-3">Margin 3 units</div>
  <div class="m-4">Margin 4 units</div>
  <div class="m-5">Margin 5 units</div>
  <div class="m-6">Margin 6 units</div>
  <div class="m-7">Margin 7 units</div>
  <div class="m-8">Margin 8 units</div>
  <div class="m-9">Margin 9 units</div>
  <div class="m-10">Margin 10 units</div>
  <!-- The same syntax goes till 20 units -->
  <div class="m-20">Margin 20 units</div>
```

See a demo of this on [CodePen](https://codepen.io/thedesignsystems/pen/ExXoXZd)

### Margin Right
```html
  <div class="m-right-1">Margin Right 1 unit</div>
  <div class="m-right-2">Margin Right 2 units</div>
  <div class="m-right-3">Margin Right 3 units</div>
  <div class="m-right-4">Margin Right 4 units</div>
  <div class="m-right-5">Margin Right 5 units</div>
  <div class="m-right-6">Margin Right 6 units</div>
  <!-- The same syntax goes till 20 units -->
  <div class="m-right-20">Margin Right 20 units</div>
```

See a demo of this on [CodePen](https://codepen.io/thedesignsystems/pen/powprdY)

### Margin Left
```html
  <div class="m-left-1">Margin Left 1 unit</div>
  <div class="m-left-2">Margin Left 2 units</div>
  <div class="m-left-3">Margin Left 3 units</div>
  <div class="m-left-4">Margin Left 4 units</div>
  <div class="m-left-5">Margin Left 5 units</div>
  <div class="m-left-6">Margin Left 6 units</div>
  <!-- The same syntax goes till 20 units -->
  <div class="m-left-20">Margin Left 20 units</div>
```

See a demo of this on [CodePen](https://codepen.io/thedesignsystems/pen/RwgxZmM)

### Margin Top
```html
  <div class="m-top-1">Margin Top 1 unit</div>
  <div class="m-top-2">Margin Top 2 units</div>
  <div class="m-top-3">Margin Top 3 units</div>
  <div class="m-top-4">Margin Top 4 units</div>
  <div class="m-top-5">Margin Top 5 units</div>
  <div class="m-top-6">Margin Top 6 units</div>
  <!-- The same syntax goes till 20 units -->
  <div class="m-top-20">Margin Top 20 units</div>
```

See a demo of side on [CodePen](https://codepen.io/thedesignsystems/pen/zYzpErN)

### Margin Bottom
```html
  <div class="m-bottom-1">Margin Bottom 1 unit</div>
  <div class="m-bottom-2">Margin Bottom 2 units</div>
  <div class="m-bottom-3">Margin Bottom 3 units</div>
  <div class="m-bottom-4">Margin Bottom 4 units</div>
  <div class="m-bottom-5">Margin Bottom 5 units</div>
  <div class="m-bottom-6">Margin Bottom 6 units</div>
  <!-- The same syntax goes till 20 units -->
  <div class="m-bottom-20">Margin Bottom 20 units</div>
```

See a demo of side on [CodePen](https://codepen.io/thedesignsystems/pen/xxrpXYp)

### Margin autos

- Margin auto feature created for all the sides `m-auto`, `m-right-auto`, `m-left-auto`,  `m-top-auto`, `m-bottom-auto`.
- Some special margin-auto features for both horizontal and vertical margins.
  - For Margin-auto-horizontal, use `m-x-auto` class method,
  - For Margin-auto-vertical, use `m-y-auto` class method