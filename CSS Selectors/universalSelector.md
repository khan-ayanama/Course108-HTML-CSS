# Universal Selector

## Universal Selector with Specific Property

```css
* {
    margin: 0;
    padding: 0;
}
```

## Universal Selector with Specific Property in Specific Context

```css
.container * {
    color: blue;
}
```

## Universal Selector with Pseudo-elements

```css
*::before {
    content: "★";
}
```

### Universal Selector with Attribute Selectors

```css
*[data-custom] {
    background-color: yellow;
}
```

## Universal Selector in Specific Elements

```css
.menu * {
    font-weight: bold;
}
```

## Universal Selector for Form Elements

```css
input * {
    border: 1px solid #ccc;
}
```

## Universal Selector with Pseudo-selectors for Specific Parts

```css
*::first-line {
    font-weight: bold;
}
```

## Universal Selector in Combination

```css
h1 *, p * {
    color: red;
}
```
