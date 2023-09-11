# Element Selector

In CSS, element selectors target HTML elements by their tag name. Here are various types of element selectors that you can use to style specific HTML elements:

## Type Selector: Selects elements by their HTML tag name

```css
    p {
    /* CSS styles here */
    }
```

This selects all `<p>` (paragraph) elements and applies the specified styles.

## Universal Selector: Selects all elements on the page

```css
    * {
    /* CSS styles here */
    }
```

This selects all HTML elements and applies the specified styles globally.

## Grouping Selector: Combines multiple element selectors to apply the same styles to different elements

```css
    h1, h2, h3 {
    /* CSS styles here */
    }
```

This selects <`h1>`, <`h2>`, and <`h3>` elements and applies the specified styles to all of them.

## Child Selector: Selects elements that are direct children of a specified element

```css
    ul > li {
    /* CSS styles here */
    }
```

This selects all <`li>` elements that are direct children of <`ul>` elements.

## Adjacent Sibling Selector: Selects an element that is immediately preceded by a specified element

```css
    h2 + p {
    /* CSS styles here */
    }
```

This selects `<p>` elements that are immediately preceded by an <`h2>` element.

## General Sibling Selector: Selects elements that share the same parent and are preceded by a specified element

```css
    h2 ~ p {
    /* CSS styles here */
    }
```

This selects `<p>` elements that share the same parent as an `<h2>` element and come after it.
