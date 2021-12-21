---
sidebar_position: 1
---

# Basic Typography Principles

## Headings

<div class="border p-12">
  <h1>This is a heading - H1</h1>
  <h2>This is a heading - H2</h2>
  <h3>This is a heading - H3</h3>
  <h4>This is a heading - H4</h4>
  <h5>This is a heading - H5</h5>
  <h6>This is a heading - H6</h6>
</div>

```html
<h1>This is a heading - H1</h1>
<h2>This is a heading - H2</h2>
<h3>This is a heading - H3</h3>
<h4>This is a heading - H4</h4>
<h5>This is a heading - H5</h5>
<h6>This is a heading - H6</h6>
```

## All other properties related to typographies

### Font Size
<div class="border p-12">
  <p class="font-size-24">This text has 24px of font-size</p>
  <p class="font-size-45">This text has 45px of font-size</p>
  <p class="font-size-32-point-6">This text has 32.6px of font-size</p>
  <p class="font-size-56">This text has 56px of font-size</p>
</div>

```html
<p class="font-size-24">This text has 24px of font-size</p>
<p class="font-size-45">This text has 45px of font-size</p>
<p class="font-size-32-point-6">This text has 32.6px of font-size</p>
<p class="font-size-56">This text has 56px of font-size</p>
```

### Font Families

Default font-family in eccentric touch is [Inter](https://fonts.google.com/specimen/Inter?query=inter), which is coming from Google Fonts.
There are 3 variations we have added to font family types, that are `serif`, `sans-serif`, `monospace`.

| Class Name | CSS Property | Font Family / Name | Use Case / Output |
|------------|--------------|--------------------|-------------------|
| `font-sans-serif` | font-family: 'Inter', sans-serif | [Inter](https://fonts.google.com/specimen/Inter) | <p class="font-sans-serif">Sans Serif Font</p> |
| `font-serif`      | font-family: 'Lora', serif; | [Lora](https://fonts.google.com/specimen/Lora) | <p class="font-serif">Serif Font</p> |
| `font-monospace` | font-family: 'Space Mono', monospace; | [Space Mono](https://fonts.google.com/specimen/Space+Mono) | <p class="font-monospace">Monospace Font</p> |