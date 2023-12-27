# CSS Selectors

CSS selectors are used to target and style HTML elements. Here are some basic CSS selectors:

`Type Selector:`
Selects all instances of a specified HTML element type.

```css
p {
  color: blue;
}
```

`Class Selector:`
Selects elements with a specific class attribute.

```css
.highlight {
  background-color: yellow;
}
```

`ID Selector:`
Selects a single element with a specific id attribute.

```css
#header {
  font-size: 24px;
}
```

`Descendant Selector:`
Selects all elements that are descendants of a specified element.

```css
article p {
  font-style: italic;
}
```

`Child Selector:`
Selects all direct children of a specified element.

```css
ul > li {
  list-style-type: square;
}
```

`Adjacent Sibling Selector:`
Selects an element that is directly preceded by a specified element.

```css
h2 + p {
  margin-top: 10px;
}
```

`Attribute Selector:`
Selects elements with a specific attribute or attribute value.

```css
input[type="text"] {
  border: 1px solid #ccc;
}
```

`Pseudo-classes:`
Selects elements based on their state or position.

```css
a:hover {
  color: red;
}
```

```html
li:nth-child(even) { background-color: #f2f2f2; }
```

`Pseudo-elements:`
Selects a specific part of an element.

```css
p::first-line {
  font-weight: bold;
}
```

```html
li::before { content: "• "; }
```

`Universal Selector:`
Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

## UTItility classes

CSS utility classes are small, single-purpose classes that provide specific styling to elements without the need for custom CSS rules. They are often used in frameworks like Bootstrap or Tailwind CSS to streamline the development process and maintain a consistent design. Here's an overview of common utility classes:

`Text Alignment:`
Classes to control text alignment.

```css
.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}
```

## ID vs Class

`Use ID when:`

- You need a unique identifier for a specific element.
- You want to apply styles or interact with a single, specific element.
- You want to take advantage of higher specificity for styles.

`Use Class when:`

- You want to apply styles to multiple elements.
- You want to promote reusability of styles across different elements.
- You are working with JavaScript and need to select multiple elements.
