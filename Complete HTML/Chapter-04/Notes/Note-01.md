# CSS Classes

## Specificity

The more specific a selector is, the higher its specificity, and it will override styles with lower specificity. Specificity is calculated using a four-part value:

`Inline Styles:` These styles are applied directly to an HTML element using the style attribute. They have the highest specificity.

```html
<div style="color: red;">This text is red.</div>
```

`ID Selectors:` An ID selector is denoted by a hash (#) followed by the ID of an HTML element. It has higher specificity than class or element selectors.

```css
#unique-element {
  color: blue;
}
```

`Class Selectors, Attribute Selectors, and Pseudo-Classes:` These selectors are less specific than ID selectors but more specific than element selectors.

```css
.important {
  font-weight: bold;
}

[type="text"] {
  border: 1px solid black;
}

p:hover {
  color: purple;
}
```

`Element Selectors:` These are the least specific selectors and have the lowest priority.

```css
p {
  font-size: 16px;
}
```

When multiple selectors have equal specificity, the one that comes later in the stylesheet takes precedence.

## Composite Selectors

When dealing with composite selectors, which are selectors that combine different types of selectors, the specificity is determined by the sum of the individual specificities of its parts.

Here's how specificity works with some examples:

`Element and Class Selector:`

```css
p.warning {
  color: red; /* specificity: 11 (1 for the element selector + 10 for the class selector) */
}
```

`ID and Pseudo-Class Selector:`

```css
#unique-element:hover {
  background-color: yellow; /* specificity: 110 (100 for the ID selector + 10 for the pseudo-class selector) */
}
```

`Multiple Classes:`

```css
.important.urgent {
  font-weight: bold; /* specificity: 20 (10 for each class selector) */
}
```

`Descendant Selector:`

```css
article p {
  margin: 10px; /* specificity: 20 (10 for each element selector) */
}
```

`Child Selector:`

```css
section > h2 {
  font-size: 24px; /* specificity: 21 (10 for the element selector + 1 for the child combinator) */
}
```

It's important to note that the universal selector (\*) has a specificity of 0.

When you have conflicting rules with different specificities, the rule with the higher specificity will take precedence. If specificities are equal, the rule that appears later in the stylesheet will win.
