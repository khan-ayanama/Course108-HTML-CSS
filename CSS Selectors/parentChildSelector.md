# Parent Child Selector

The most commonly used parent-child selector is the child combinator (>), but there are other variations as well. Here are the variations of parent-child selectors:

## Child Combinator (>)

Selects elements that are direct children of a specified element.

```css
    parent > child {
    /* CSS styles here */
    }
```

Example: ul > li selects all `<li>` elements that are direct children of `<ul>` elements.

## Descendant Selector (Space)

Selects elements that are descendants of a specified element, regardless of their level of nesting.

```css
    ancestor descendant {
    /* CSS styles here */
    }
```

Example: nav a selects all `<a>` elements that are descendants of `<nav>` elements, regardless of how deeply nested they are.

## Adjacent Sibling Selector (+)

Selects an element that is immediately preceded by a specified element.

```css
    element + sibling {
    /* CSS styles here */
    }
```

Example: h2 + p selects all `<p>` elements that are immediately preceded by `<h2>` elements.

## General Sibling Selector (~)

Selects elements that share the same parent and are preceded by a specified element.

```css
    element ~ sibling {
    /* CSS styles here */
    }
```

Example: h2 ~ p selects all `<p>` elements that share the same parent as `<h2>` elements and come after them.
