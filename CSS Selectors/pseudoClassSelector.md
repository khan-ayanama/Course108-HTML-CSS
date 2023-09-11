# Pseudo Class Selector

There are several variations of pseudo-class selectors that you can use. Here are some of the most common ones:

## :hover Pseudo-class

Selects an element when the mouse pointer is placed over it.

```css
    a:hover {
    /* CSS styles here */
    }
```

This selects all `<a>` elements when they are being hovered over.

## :active Pseudo-class

Selects an element that is currently being activated by the user, typically when a mouse button is clicked.

```css
    button:active {
    /* CSS styles here */
    }
```

This selects all `<button>` elements when they are actively being clicked.

## :focus Pseudo-class

Selects an element when it receives focus, such as when it is clicked or tabbed into.

```css
    input:focus {
    /* CSS styles here */
    }
```

This selects all `<input>` elements when they receive focus.

## :first-child Pseudo-class

Selects the first child element of a parent element.

```css
    li:first-child {
    /* CSS styles here */
    }
```

This selects the first `<li>` element among its siblings.

## :last-child Pseudo-class

Selects the last child element of a parent element.

```css
    div > p:last-child {
    /* CSS styles here */
    }
```

This selects the last `<p>` element that is a child of a `<div>`.

## :nth-child() Pseudo-class

Selects elements based on their position within a parent element using a formula.

```css
    li:nth-child(odd) {
    /* CSS styles here */
    }
```

This selects all odd-numbered `<li>` elements.

## :not() Pseudo-class

Selects elements that do not match a specific selector.

```css
    p:not(.special) {
    /* CSS styles here */
    }
```

This selects all `<p>` elements that do not have the class "special."

## :nth-of-type() Pseudo-class

Selects elements based on their position within a parent element of the same type.

```css
    div p:nth-of-type(3) {
    /* CSS styles here */
    }
```

This selects the third `<p>` element within a `<div>`.

## :checked Pseudo-class

Selects radio buttons or checkboxes that are checked.

```css
    input[type="checkbox"]:checked {
    /* CSS styles here */
    }
```

This selects all checked checkboxes.
