# Relative Units

## Percentage (%)

Percentages (%) in CSS are used as relative units, representing a proportion of another value. Here's a breakdown of how percentages work in various CSS properties:

`Width and Height:`
In the context of width and height, percentages refer to a percentage of the parent container's width or height.

```css
div {
  width: 50%; /* The width of the div is 50% of its parent container */
  height: 75%; /* The height of the div is 75% of its parent container */
}
```

`Margins and Padding:`
Percentages can also be used for setting margins and padding, where they are calculated based on the width of the containing block.

```css
div {
  margin: 5%; /* The margin is 5% of the width of the containing block */
  padding: 10%; /* The padding is 10% of the width of the containing block */
}
```

`Font Size:`
In typography, percentages can be used to set font sizes, relative to the font size of the parent element.

```css
p {
  font-size: 120%; /* The font size of the paragraph is 120% of its parent's font size */
}
```

`Positioning (top, right, bottom, left):`
Percentages are often used in positioning elements relative to their containing block.

```css
div {
  position: absolute;
  top: 20%; /* The top edge is 20% of the containing block's height */
  left: 30%; /* The left edge is 30% of the containing block's width */
}
```

`Flexbox and Grid Layouts:`
Percentages are commonly used in Flexbox and Grid layouts to distribute space proportionally.

```css
.container {
  display: flex;
}

.item {
  flex: 1; /* Each item takes up an equal share of the available space in the flex container */
}
```

Percentages are powerful in creating responsive and flexible layouts because they adapt to the size of the parent container. They are particularly useful in responsive web design where you want elements to scale proportionally based on the screen or viewport size.

## REM Unit

The "rem" unit in CSS stands for "root em." It's a relative unit of measurement that is based on the font size of the root element of the document, typically the `<html>` element. The "em" unit, on the other hand, is relative to the font size of the element itself.

Here's a brief explanation of how the "rem" unit works:

`Setting the Root Font Size:`
The "rem" unit takes its reference from the font size of the root element (`<html>`). This root font size can be set using CSS. The default browser font size is often 16 pixels.

```css
html {
  font-size: 16px; /* Set the root font size to 16 pixels */
}
```

`Usage in Styling:`
Once the root font size is established, you can use "rem" units to set sizes for other elements. It's a convenient way to create a consistent and scalable layout.

```css
body {
  font-size: 1rem; /* 1rem is equal to the root font size, so this is 16 pixels */
}

h1 {
  font-size: 2rem; /* 2rem is twice the root font size, so this is 32 pixels */
}

p {
  font-size: 0.875rem; /* 0.875rem is 87.5% of the root font size, so this is 14 pixels */
}
```

`Responsive Design:`
One of the advantages of using "rem" units is that they provide a convenient way to create a responsive design. If the user changes the root font size (e.g., by adjusting browser settings), all "rem"-based sizes will adjust accordingly.

```css
@media screen and (max-width: 600px) {
  html {
    font-size: 14px; /* Adjust the root font size for smaller screens */
  }
}
```

Using "rem" units can simplify the process of creating layouts that adapt well to different screen sizes and user preferences. It's especially useful for creating scalable typography and spacing.

## EM Unit

The "em" unit in CSS is a relative unit of measurement that is based on the font size of the parent element. Unlike the "rem" unit, which is relative to the root element's font size, the "em" unit looks to its immediate parent's font size for reference.

Here's a breakdown of how the "em" unit works:

`Setting Font Size:`
The "em" unit is used to set various properties like font size, margin, padding, and more.
If you set the font size of an element using "em," it will be a multiple of the font size of its parent element.

```css
body {
  font-size: 16px; /* Set the font size for the body, which acts as the parent */
}

p {
  font-size: 1.5em; /* The font size of the paragraph is 1.5 times the font size of the parent (16px), so it's 24px */
}

h1 {
  font-size: 2em; /* The font size of the heading is 2 times the font size of the parent (16px), so it's 32px */
}
```

`Nested Elements:`
If you have nested elements, the "em" unit continues to reference the font size of its closest parent.

```css
div {
  font-size: 18px; /* Set the font size for the div */
}

p {
  font-size: 1.2em; /* The font size of the paragraph is 1.2 times the font size of its parent div (18px), so it's 21.6px */
}
```

`Spacing and Sizing:`
"em" units are commonly used for setting spacing and sizing in a way that respects the document's hierarchy.

```css
article {
  font-size: 1.2em; /* Set a base font size for the article */
}

h2 {
  font-size: 1.5em; /* The font size of the heading is 1.5 times the font size of its parent article (1.2em), so it's 1.8em */
}

p {
  margin-bottom: 1.2em; /* The margin is 1.2 times the font size of the paragraph's parent, creating proportional spacing */
}
```

Using "em" units allows for flexible and scalable design, making it easier to maintain consistency and proportionality within a document.

`NOTE:`
Use rem for a consistent base size across the document, em for proportionate sizing within nested elements, and px for fixed dimensions where absolute control is needed.
