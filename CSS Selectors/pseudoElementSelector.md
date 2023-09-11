# Pseudo Element Selector

Pseudo-element selectors in CSS are used to select and style specific parts of an element, such as the first letter or first line of text. Here are some variations of pseudo-element selectors:

## ::before Pseudo-element

Selects and styles the content inserted before the content of an element.

```css
    p::before {
    content: "★ ";
    color: blue;
    }
```

This adds a blue star (★) before the content of all `<p>` elements.

## ::after Pseudo-element

Selects and styles the content inserted after the content of an element.

```css
    blockquote::after {
    content: " - Author";
    font-style: italic;
    }
```

This adds an italicized author's name after all `<blockquote>` elements.

## ::first-letter Pseudo-element

Selects and styles the first letter of text within an element.

```css
    p::first-letter {
    font-size: 150%;
    color: red;
    }
```

This increases the font size and changes the color of the first letter within all `<p>` elements.

## ::first-line Pseudo-element

Selects and styles the first line of text within an element.

```css
    h2::first-line {
    font-weight: bold;
    text-transform: uppercase;
    }
```

This makes the first line of text within all `<h2>` elements bold and uppercase.

## ::selection Pseudo-element

Selects and styles the portion of text that is selected by the user.

```css
    ::selection {
    background-color: yellow;
    color: black;
    }
```

This changes the background color and text color for selected text within all elements.

## ::placeholder Pseudo-element (for input fields)

Selects and styles the placeholder text in input fields.

```css
    input::placeholder {
    color: #999;
}
```

his changes the color of placeholder text in all input fields.

## ::marker Pseudo-element (for list items)

Selects and styles the marker (e.g., bullet or number) of a list item.

```css
    li::marker {
    content: "• ";
    color: green;
    }
```

This changes the marker style and color for all list items.

Pseudo-elements allow you to target and style specific parts of elements, adding a layer of precision and customization to your CSS styles.
