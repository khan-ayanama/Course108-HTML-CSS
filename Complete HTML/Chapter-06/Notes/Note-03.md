# Viewport units

Viewport units in CSS are relative units that are based on the dimensions of the viewport, which is the visible area of the web page in the browser. There are four main viewport units:

`vw (Viewport Width):`
Represents a percentage of the viewport's width.
1vw is equal to 1% of the viewport width.
Useful for creating responsive layouts based on the width of the viewport.

```css
div {
  width: 50vw; /* The width of the div is 50% of the viewport width */
}
```

`vh (Viewport Height):`
Represents a percentage of the viewport's height.
1vh is equal to 1% of the viewport height.
Useful for creating responsive layouts based on the height of the viewport.

```css
div {
  height: 75vh; /* The height of the div is 75% of the viewport height */
}
```

`vmin (Minimum Viewport Dimension):`
Represents a percentage of the smaller of the viewport's width or height.
1vmin is equal to 1% of the smaller dimension.
Useful for creating responsive layouts that adapt to the smaller dimension.

```css
div {
  font-size: 5vmin; /* The font size is 5% of the smaller viewport dimension */
}
```

`vmax (Maximum Viewport Dimension):`
Represents a percentage of the larger of the viewport's width or height.
1vmax is equal to 1% of the larger dimension.
Useful for creating responsive layouts that adapt to the larger dimension.

```css
div {
  margin: 2vmax; /* The margin is 2% of the larger viewport dimension */
}
```

Viewport units are particularly handy for creating fluid and responsive designs that adjust based on the size of the user's viewport. They are especially useful when you want elements to scale proportionally to the available space.
