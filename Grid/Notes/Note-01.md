# CSS GRID

```css

    .container{
        grid-template-column: 1fr 1fr 1fr;
        grid-template-column: repeat(3,1fr);
        grid-template-column: 300px repeat(2,1fr);
        grid-auto-columns: 200px;
        column-gap: 20px;
        row-gap: 20px;
        gap: 10px(row) 20px(column);
        grid-auto-column: 200px;

        grid-auto-flow: row || column || dense;


        /* VARIABL COLUMN */
        grid-template-column: repeat(auto-fit, 200px)
        grid-template-column: repeat(auto-fill, 200px)
        grid-template-column: repeat(auto-fill, minmax(200px,1fr))


        /* ROW PROPERTIES */

        /* It will set the 100 px size of first two rows not all */
        grid-template-rows: 100px 100px;

        /* if you want to implicitly set the size of all rows */
        grid-auto-rows: 100px;

        /* Alignment Properties */
        justify-items: center; // (Not to confuse with justify-content of flex)
        align-items: end: (same as flex)

        /* shortcut for both justify-items and align-items */
        place-items: end start: (align-items, justif-items)

        /* content properties */
        justify-content: center;
        align-content: center;
        /* short-hand */
        place-content: center space-between; ( vertical, horizontal)
    }
    

    .item-1{
        grid-column-start: 1;
        grid-column-end: 3;
        /* short-hand */
        grid-column: 1/3;
        grid-column: 1/ span 2;
        grid-column: span 2;

        /* for complete column */
        grid-column: 1/-1;

        grid-row-start: 1;
        grid-row-end: 3;
        /* short-hand */
        grid-row: 1/3;
        grid-row: 1/ span 2;
        grid-row: span 3;
    }

    .item-2{
        align-self: center; (vertical)
        justify-self: start; (horizonal)
        place-self: center end; (vertical, horizontal)
    }
```

## GPT Answer

`display:` Specifies the type of container. Use grid to enable CSS Grid.

```css
.grid-container {
    display: grid;
}
```

`grid-template-rows and grid-template-columns:` Defines the size of the rows and columns in the grid.

```css
    .grid-container {
        grid-template-rows: 100px 200px; /* Define two rows with heights of 100px and 200px */
        grid-template-columns: 1fr 2fr; /* Define two columns with a ratio of 1:2 */
    }
```

`grid-template-areas:` Assigns names to grid areas, making it easy to create a layout using named areas.

```css
    .grid-container {
        grid-template-areas:
            "header header header"
            "sidebar main main"
            "footer footer footer";
    }
```

`grid-template:` A shorthand for grid-template-rows, grid-template-columns, and grid-template-areas.

```css
    .grid-container {
        grid-template:
            "header header header"
            "sidebar main main"
            "footer footer footer" /
            1fr 2fr; /* Define rows, columns, and their sizes in one property */
    }
```

`grid-row-gap and grid-column-gap (or row-gap and column-gap):` Sets the size of the gap between rows and columns in the grid.

```css
    .grid-container {
        row-gap: 10px; /* Sets a gap of 10px between rows */
        column-gap: 20px; /* Sets a gap of 20px between columns */
    }
```

`gap:` A shorthand for setting both row and column gaps at the same time.

```css
    .grid-container {
        gap: 10px 20px; /* Sets a gap of 10px between rows and 20px between columns */
    }
```

`justify-items and align-items:` Aligns grid items within their respective grid areas along the inline (horizontal) and block (vertical) axes.

```css
    .grid-container {
        justify-items: center; /* Align items in the center along the inline axis */
        align-items: center; /* Align items in the center along the block axis */
    }
```

`justify-content and align-content:` Aligns the grid along the inline and block axes, respectively.

```css
    .grid-container {
        justify-content: center; /* Align the grid in the center along the inline axis */
        align-content: center; /* Align the grid in the center along the block axis */
    }
```

`place-items:` A shorthand for setting both justify-items and align-items at the same time.

```css
    .grid-container {
        place-items: center; /* Center items both along the inline and block axes */
    }
```

`place-content:` A shorthand for setting both justify-content and align-content at the same time.

```css
    .grid-container {
        place-content: center; /* Center the grid both along the inline and block axes */
    }
```

`grid-auto-rows and grid-auto-columns:` Defines the size of implicitly created rows and columns.

```css
    .grid-container {
        grid-auto-rows: 100px; /* Define the size of implicitly created rows */
        grid-auto-columns: 1fr; /* Define the size of implicitly created columns */
    }
```

`grid-auto-flow:` Specifies how the auto-placement algorithm works for implicitly created grid items.

* `row:` Place items by filling each row before moving to the next one.
* `column:` Place items by filling each column before moving to the next one.
* `dense:` Attempt to fill in holes earlier in the grid if smaller items come later.

```css
    .grid-container {
        grid-auto-flow: row; /* Auto-place items by filling each row before moving to the next one */
    }
```

`grid:` A shorthand for several grid-related properties, including grid-template, grid-gap, grid-auto-rows, grid-auto-columns, and grid-auto-flow.

```css
    .grid-container {
        grid:
            "header header header"
            "sidebar main main"
            "footer footer footer" /
            1fr 2fr; /* Define rows, columns, and their sizes, auto-placement, and gaps in one property */
    }
```
