# Descendant Selector

The basic syntax for an ancestor descendant selector is:

```css
    ancestor descendant {
    /* CSS styles here */
    }
```

Here's a breakdown of how they work:

## Ancestor

This is the element that serves as the ancestor or parent element.

## Descendant

This is the element that is nested inside the ancestor element.

Here are some examples of ancestor descendant selectors:

## Basic Descendant Selector

Selects all descendants of a specific element.

```css
    ul li {
    /* CSS styles here */
    }
```

This selects all `<li>` elements that are descendants of `<ul>` elements.

## Specific Ancestor and Descendant Selector

Selects descendants of a specific ancestor element.

```css
    .sidebar p {
    /* CSS styles here */
    }
```

This selects all `<p>` elements that are descendants of an element with the class "sidebar."

## Nested Descendant Selectors

You can nest multiple levels of descendants within ancestors.

```css
    .container article p {
    /* CSS styles here */
    }
```

This selects all `<p>` elements that are descendants of `<article>` elements that are themselves descendants of an element with the class "container."

## Universal Selector with Descendant Selector

Selects all descendants of a specific element using the universal selector.

```css
    #main-content * {
    /* CSS styles here */
    }
```

This selects all elements that are descendants of an element with the ID "main-content."
