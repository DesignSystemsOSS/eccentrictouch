---
sidebar_position: 1
---

# Borders

Border properties are added as class-methods for implementing borders to components and document objects.

To implement borders to your components, the syntax is given below. 

- Borders can be implemented using the prefix `border` keyword.
- There are other variations for borders as well i.e. `border-light`, `border-medium`, `border-high`.

- Class method structure for using border properties is `border-{dimension_type}-{border_property}-{value}`, where `{value}` can be both **base** and **decimal** values.
- For an example, `border-right-width-`

```html
<div class="border p-12 m-bottom-2">This is a demo text</div>
<div class="border-light p-12 m-bottom-2">This is a demo text</div>
<div class="border-medium p-12 m-bottom-2">This is a demo text</div>
<div class="border-high p-12 m-bottom-2">This is a demo text</div>
```

<div class="border p-12 m-bottom-2">This is a demo text</div>
<div class="border-light p-12 m-bottom-2">This is a demo text</div>
<div class="border-medium p-12 m-bottom-2">This is a demo text</div>
<div class="border-high p-12 m-bottom-2">This is a demo text</div>

- You can also implement borders using `px` and values.

| Border Type | Class-based Implementation | Output |
|-------------|----------------------------|--------|
| Border (1px) | `<div class="border border-width-1 border-color-purple-900"></div>` | <div class="border-boxes border border-width-1 border-color-purple-900"></div> |
| Border Right (12px) | `<div class="border border-right-width-12 border-color-purple-900"></div>` | <div class="border-boxes border border-right-width-12 border-color-purple-900"></div> |
| Border Top (24.5px) | `<div class="border border-top-width-24-point-5 border-color-purple-900"></div>` | <div class="border-boxes border border-top-width-24-point-5 border-color-purple-900"></div> |
| Border Bottom (6.4px) | `<div class="border border-bottom-width-6-point-4 border-color-purple-900"></div>` | <div class="border-boxes border border-bottom-width-6-point-4 border-color-purple-900"></div> |


- Also, can have multiple borders using different class-names

| Border Type | Class-based Implementation | Output |
|-------------|----------------------------|--------|
| Border Bottom (24px) + Border Top (12px) | `<div class="border border-bottom-width-24 border-top-width-12 border-color-purple-900"></div>` | <div class="border-boxes border border-bottom-width-24 border-top-width-12 border-color-green-900"></div> |
| Border Top (100px) + Border Right (34.4px) | `<div class="border border-top-width-100 border-right-width-34-point-4 border-color-purple-900"></div>` | <div class="border-boxes border border-top-width-100 border-right-width-34-point-4 border-color-green-900"></div> |