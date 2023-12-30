# CSS Selectors

## Attribute Selectors

CSS attribute selectors allow you to select HTML elements based on the presence or value of their attributes. Here are some common types of attribute selectors:

Attribute Exists Selector:

`Syntax: [attribute]`
Example: Selects all elements with a specified attribute, regardless of its value.

```css
[target] {
  /* styles here */
}
```

_Attribute Equals Selector:_
`Syntax: [attribute=value]`
Example: Selects elements with a specific attribute value.

```css
[type="text"] {
  /* styles here */
}
```

_Attribute Starts With Selector:_
`Syntax: [attribute^=value]`
Example: Selects elements with an attribute that starts with a specified value.

```css
[href^="https://"]
{
  /* styles here */
}
```

_Attribute Ends With Selector:_
`Syntax: [attribute$=value]`
Example: Selects elements with an attribute that ends with a specified value.

```css
[src$=".png"] {
  /* styles here */
}
```

_Attribute Contains Selector:_
`Syntax: [attribute*=value]`
Example: Selects elements with an attribute containing a specified value.

```css
[class*="button"] {
  /* styles here */
}
```

_Attribute Space Separated Values Selector:_
`Syntax: [attribute~=value]`
Example: Selects elements with an attribute containing a specified value within a space-separated list.

```css
[class~="highlight"] {
  /* styles here */
}
```
