# Flex Container

In CSS, when you're working with flexbox, you use the properties on the parent container (the flex container) to control the layout of its children (flex items). Here are the main flex container properties:

`display: flex;`

This property turns an element into a flex container. It enables flex properties on the children of that element.

```css
    .flex-container {
    display: flex;
    }
```

`flex-direction:`

This property establishes the main axis of the flex container. It defines the direction in which the flex items are placed.

```css
    .flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
    }
```

`justify-content:`

This property aligns flex items along the main axis of the flex container. It controls the spacing between and around the flex items.

```css
    .flex-container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }
```

`align-items:`

This property aligns flex items along the cross axis of the flex container.

```css
    .flex-container {
    align-items: stretch | flex-start | flex-end | center | baseline;
    }
```

`align-self:`

This property allows the default alignment to be overridden for individual flex items.

```css
    .flex-item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
```

`flex-wrap:`

This property defines whether flex items are forced onto one line or can wrap onto multiple lines.

```css
    .flex-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
    }
```

`flex-flow:`

This is a shorthand property for setting both flex-direction and flex-wrap in one declaration.

```css
    .flex-container {
    flex-flow: row nowrap;
    }
```

`align-content:`

The align-content property in Flexbox is used to align the flex container's lines within the flex container when there is extra space on the cross axis. It has an effect when the flex container has multiple lines (rows or columns) of flex items.

Here is an explanation of align-content along with examples:

Basic Usage:
align-content accepts the following values:

* `flex-start:` Lines are packed at the start of the container.
* `flex-end:` Lines are packed at the end of the container.
* `center: Lines` are centered in the container.
* `space-between:` Lines are evenly distributed; the first line is at the start, and the last line is at the end.
* `space-around:` Lines are evenly distributed with equal space around each line.
* `stretch:` Lines stretch to take up the remaining space.

```css
    .flex-container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
```
