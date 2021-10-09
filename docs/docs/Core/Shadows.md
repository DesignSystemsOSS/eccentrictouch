---
sidebar_position: 4
---

# Shadows

Shadow properties are added as class-methods which can be used in HTML and other document-object using classes.

To implement shadows to your components, the syntax to implement shadows in given below.
Shadow can be implemented using the prefix `shadow` keyword.

- The default shadow can be implemented by using the `shadow` keyword.
- Other than the default shadow, there are variations for shadows i.e.
`shadow-light`, `shadow-medium`, `shadow-high`.

```html
<div class="shadow p-2 m-bottom-2">This is a demo text</div>
<div class="shadow-light p-2 m-bottom-2">This is a demo text</div>
<div class="shadow-medium p-2 m-bottom-2">This is a demo text</div>
<div class="shadow-high p-2 m-bottom-2">This is a demo text</div>
```

<div class="shadow p-2 m-bottom-4">This is a demo text</div>
<div class="shadow-light p-2 m-bottom-4">This is a demo text</div>
<div class="shadow-medium p-2 m-bottom-4">This is a demo text</div>
<div class="shadow-high p-2 m-bottom-4">This is a demo text</div>

- There's a special hover effect as well for the shadow property which can be implemented as `shadow-hoverable`.

```html
<div class="shadow-hoverable p-2">This is a demo text</div>
```

<div class="shadow-hoverable p-2">This is a demo text</div>