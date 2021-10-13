---
sidebar_position: 2
---

# Buttons

Use Eccentric Touch's buttons in your webpages, forms, alerts and other components.
The variations for different buttons, styles and implementation techniques are given below.

### Examples

Eccentric Touch contains a bunch of variations for button components, some of the basic ones are listed below

<div class="button-list-wrapper">
  <button class="primary-btn">Primary</button>
  <button class="outline-btn">Outline</button>
  <button class="text-btn">Text</button>
  <a href="#" class="link">Link</a>
  <a href="#" class="base-link">Base Link</a>
  <button class="primary-btn primary-btn__disabled">Disabled Button</button>
  <button class="outline-btn outline-btn__disabled">Disabled Button</button>
</div>

```html
<button class="primary-btn">Primary</button>
<button class="outline-btn">Outline</button>
<button class="text-btn">Text</button>
<button class="primary-btn primary-btn__danger">Danger</button>
<button class="primary-btn primary-btn__success">Success</button>
<button class="primary-btn primary-btn__disabled">Disabled Button</button>
```

### Button Tags

You can use the button properties with various HTML tags, such as `<a>`, `<input>`, and of course, with the `<button>` tag. These properties depend on the type of component you're using. You can definitely use the `.primary-btn` with a `<div>` but that would be incorrect. 

With `<input>` tag, the button component works with all the button based types such as `type="button"`, `type="reset"`, `type="submit"`

Talking about `<a>` tag, while using it as a button, make sure that you're setting the `role="button"` to convey that this is a button component.

<div class="button-list-wrapper">
  <button class="primary-btn">Button</button>
  <input type="button" class="primary-btn" value="Button Input" />
  <input type="reset" class="primary-btn" value="Reset Input" />
  <input type="submit" class="primary-btn" value="Submit Input" />
  <a href="#" class="primary-btn" role="button">Link</a>
</div>

```html
<button class="primary-btn">Button</button>
<input type="button" class="primary-btn" value="Button Input" />
<input type="reset" class="primary-btn" value="Reset Input" />
<input type="submit" class="primary-btn" value="Submit Input" />
<a href="#" class="primary-btn" role="button">Link</a>
```

### Outline Buttons

The outline button variation can be implemented by using the class method `outline-btn`. Just need to set `class="outline-btn"` and there will be an outline button.

<div class="button-list-wrapper">
  <button class="outline-btn">Default</button>
  <button class="outline-btn outline-btn__danger">Danger</button>
  <button class="outline-btn outline-btn__success">Success</button>
  <button class="outline-btn outline-btn__disabled">Disabled</button>
</div>

```html
<button class="outline-btn">Default</button>
<button class="outline-btn outline-btn__danger">Danger</button>
<button class="outline-btn outline-btn__success">Success</button>
<button class="outline-btn outline-btn__disabled">Disabled</button>
```

### Text Buttons

The text button variation can be implemented by using the class method `text-btn`. Just need to set `class="text-btn"` and there will be a text button.

<div class="button-list-wrapper">
  <button class="text-btn">Default</button>
  <button class="text-btn text-btn__danger">Danger</button>
  <button class="text-btn text-btn__success">Success</button>
  <button class="text-btn text-btn__disabled">Disabled</button>
</div>

```html
<button class="text-btn">Default</button>
<button class="text-btn text-btn__danger">Danger</button>
<button class="text-btn text-btn__success">Success</button>
<button class="text-btn text-btn__disabled">Disabled</button>
```

### Links

The link tag i.e. `<a>` has two variations which can implemented by the following ways,

<div class="button-list-wrapper">
  <a href="#links" class="link">Default link</a>
  <a href="#links" class="base-link">Base link</a>
</div>

You can also go with personalization with your button components,
- You can change font and background color of a `primary-btn`
- You can change font and border color of an `outline-btn`
- Also, you can change the font color of a `text-btn`

<div class="button-list-wrapper">
  <button class="primary-btn bg-color-purple-900">Purple BG Button</button>
  <button class="primary-btn bg-color-purple-900 neutral-gray-800">Purple BG with Dark text Button</button>
  <button class="primary-btn bg-neutral-gray-800">Dark BG Button</button>
  <button class="outline-btn border-neutral-gray-800 neutral-gray-800">Dark BG Button</button>
</div>

```html
<button class="primary-btn bg-color-purple-900">Purple BG Button</button>
<button class="primary-btn bg-color-purple-900 neutral-gray-800">Purple BG with Dark text Button</button>
<button class="primary-btn bg-neutral-gray-800">Dark BG Button</button>
<button class="outline-btn border-neutral-gray-800 neutral-gray-800">Dark BG Button</button>
```

#### Personalizing link text

- You can change the link text color properties as well,

<div class="button-list-wrapper">
  <a href="#personalizing-link-text" class="link color-purple-900">Link with purple text</a>
  <a href="#personalizing-link-text" class="link color-red-900">Link with red text</a>
  <a href="#personalizing-link-text" class="link neutral-gray-800">Link with neutral gray text</a>
  <a href="#personalizing-link-text" class="base-link color-green-900">Link with green text</a>
</div>

```html
<a href="#personalizing-link-text" class="link color-purple-900">Link with purple text</a>
<a href="#personalizing-link-text" class="link color-red-900">Link with red text</a>
<a href="#personalizing-link-text" class="link neutral-gray-800">Link with neutral gray text</a>
<a href="#personalizing-link-text" class="base-link color-green-900">Link with green text</a>
```