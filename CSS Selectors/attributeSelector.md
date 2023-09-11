# Attribute Selector

There are several variations of attribute selectors that you can use. Here are the most common ones:

## Attribute Exists Selector ([attribute])

Selects elements that have a specified attribute, regardless of its value.

```css
    [data-attribute] {
    /* CSS styles here */
    }
```

This selects all elements with a data-attribute attribute, regardless of the attribute's value.

## Attribute Equals Selector ([attribute="value"])

Selects elements with a specified attribute that has an exact matching value.

```css
    [href="https://example.com"] {
    /* CSS styles here */
    }
```

This selects all elements with an href attribute equal to `"https://example.com."`

## Attribute Starts With Selector ([attribute^="value"])

Selects elements with a specified attribute whose value starts with a given string.

```css
    [class^="btn-"] {
    /* CSS styles here */
    }
```

This selects all elements with a class attribute that starts with "btn-."

## Attribute Ends With Selector ([attribute$="value"])

Selects elements with a specified attribute whose value ends with a given string.

```css
    [src$=".jpg"] {
    /* CSS styles here */
    }
```

This selects all elements with a src attribute that ends with ".jpg."

## Attribute Contains Selector ([attribute*="value"])

Selects elements with a specified attribute that contains a given substring.

```css
    [title*="important"] {
    /* CSS styles here */
    }
```

This selects all elements with a title attribute that contains the word "important."

## Attribute Value List Selector ([attribute~="value"])

Selects elements with a specified attribute that contains a list of space-separated values, one of which matches the given value.

```css
    [class~="active"] {
    /* CSS styles here */
    }
```

This selects all elements with a class attribute containing the word "active" as one of its values.

## Attribute Value Prefix Selector ([attribute|="value"])

Selects elements with a specified attribute that either matches the given value exactly or starts with the given value followed by a hyphen.

```css
    [lang|="en"] {
    /* CSS styles here */
    }
```

This selects all elements with a lang attribute set to "en" or starting with "en-" (e.g., "en-US").
