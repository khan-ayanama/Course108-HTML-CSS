# Pseudo Class

```css
a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: orange;
}
```

## Pseudo class input field related

```css
/* :focus: This pseudo-class selects and styles an input field when it is in focus (clicked or tabbed into). */
input:focus {
  border: 2px solid blue;
}

/* :hover: Similar to links, this pseudo-class selects and styles an input field when the mouse is over it. */
input:hover {
  background-color: #f0f0f0;
}

/* :disabled: This pseudo-class selects and styles a disabled input field. */
input:disabled {
  opacity: 0.5;
}

/* :valid and :invalid: These pseudo-classes select and style input fields based on their validation status (useful for form validation). */
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}

/* :required and :optional: These pseudo-classes select and style required or optional input fields. */
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
/* :read-only and :read-write: These pseudo-classes select and style read-only or read-write input fields. */
input:read-only {
  background-color: #f0f0f0;
}

input:read-write {
  background-color: #ffffff;
}

/* :checked: This pseudo-class selects and styles checked radio buttons or checkboxes. */
input[type="checkbox"]:checked {
  background-color: yellow;
}

input[type="radio"]:checked {
  background-color: orange;
}

/* :placeholder-shown: This pseudo-class selects and styles input fields when the placeholder text is visible. */
input:placeholder-shown {
  color: gray;
}
```

## Pseudo-class first child and first-of-type child

The :first-child and :first-of-type pseudo-classes are used to select and style the first child or the first child of a specific type within a parent element.

`:first-child:`
This pseudo-class selects the first child element of its parent.

```css
/* Selects the first child of any type within a parent */
parent :first-child {
  color: red;
}
```

In this example, all first children of any type within the "parent" element will have a red color.

`:first-of-type:`
This pseudo-class selects the first child element of a specific type within a parent.

```css
/* Selects the first paragraph element within a parent */
parent p:first-of-type {
  font-weight: bold;
}
```

In this example, the first paragraph element within the "parent" element will have bold font weight.

## Pseudo class last-child and last-of-type

The :last-child and :last-of-type pseudo-classes are used to select and style the last child or the last child of a specific type within a parent element.

`:last-child:`
This pseudo-class selects the last child element of its parent.

```css
/* Selects the last child of any type within a parent */
parent :last-child {
  color: blue;
}
```

In this example, all last children of any type within the "parent" element will have a blue color.

`:last-of-type:`
This pseudo-class selects the last child element of a specific type within a parent.

```css
/* Selects the last paragraph element within a parent */
parent p:last-of-type {
  font-style: italic;
}
```

## Pseudo class nth-type and nth-of-type

The :nth-child and :nth-of-type pseudo-classes allow you to select and style elements based on their position within a parent element.

:nth-child(): This pseudo-class allows you to select elements based on their index (position) within their parent.

```css
/* Selects every third child element within a parent */
parent :nth-child(3) {
  background-color: yellow;
}
```

In this example, every third child element within the "parent" element will have a yellow background.

`:nth-of-type():`
This pseudo-class is similar to :nth-child(), but it selects elements based on their index within a parent of the same type.

```css
/* Selects every even paragraph element within a parent */
parent p:nth-of-type(even) {
  color: green;
}
```

`:root:`
This pseudo-class is used to select the highest-level parent element in the document, which is typically the `<html>` element. It is often used to define global styles or variables.

```css
:root {
  --main-bg-color: #f0f0f0;
}
body {
  background-color: var(--main-bg-color);
}
```

In this example, the :root pseudo-class is used to define a global CSS variable (--main-bg-color), and then this variable is utilized in styling the background color of the body element.

`:empty:`
This pseudo-class selects elements that have no children, including text nodes.

```css
p:empty {
  display: none;
}
```

In this example, any `<p>` element that is empty (contains no text or other elements) will be hidden by setting its display property to none.

`:not():` This pseudo-class is used to negate a selector, selecting elements that do not match the specified selector.

```css
p:not(.special) {
  color: #333;
}
```

In this example, all `<p>` elements except those with the class "special" will have a text color of #333.

## Pseudo Elements

Pseudo-elements in CSS allow you to style specific parts of an element. They are denoted by a double colon :: followed by the name of the pseudo-element. Here are some commonly used pseudo-elements:

`::before and ::after:` These pseudo-elements are used to insert content before and after the content of an element, respectively.

```css
p::before {
  content: "Start: ";
}

p::after {
  content: " :End";
}
```

In this example, content will be added before the start and after the end of each `<p>` element.

`::first-line and ::first-letter:` These pseudo-elements target the first line and the first letter of a block-level element, respectively.

```css
p::first-line {
  color: blue;
}

p::first-letter {
  font-size: 150%;
}
```

In this example, the first line of each `<p>` element will have a blue color, and the first letter will have an increased font size.

`::selection:` This pseudo-element selects the portion of text that is selected by the user.

```css
::selection {
  background-color: yellow;
  color: black;
}
```

In this example, the selected text on the page will have a yellow background and black text color.

`::placeholder:` This pseudo-element targets the placeholder text in an input or textarea.

```css
input::placeholder {
  color: #999;
}
```
