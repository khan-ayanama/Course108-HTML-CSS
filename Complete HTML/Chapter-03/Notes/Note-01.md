# CSS Introduction

## CSS Fonts

When it comes to styling fonts using CSS (Cascading Style Sheets), there are several properties and techniques you can use to customize the appearance of text on your web pages. Here are some key CSS font properties:

`font-family:`
Specifies the font family for an element. You can provide a list of font family names, and the browser will use the first available font in the list.

```css
body {
  font-family: "Helvetica", Arial, sans-serif;
}
```

`font-size:`
Sets the size of the font. You can use various units such as pixels (px), ems (em), or percentages (%).

```css
h1 {
  font-size: 24px;
}
```

`font-weight:`
Specifies the thickness of the font characters. Values include normal, bold, bolder, or lighter, as well as numeric values like 100, 200, ..., 900.

```css
p {
  font-weight: bold;
}
```

`font-style:`
Sets the style of the font, such as normal, italic, or oblique.

```css
em {
  font-style: italic;
}
```

`font-variant:`
Controls the usage of small caps for font variants.

```css
p {
  font-variant: small-caps;
}
```

`line-height:`
Sets the height of a line of text. It can be a number, percentage, or unit value.

```css
body {
  line-height: 1.5;
}
```

`text-align:`
Aligns the text within an element. Values include left, right, center, or justify.

```css
div {
  text-align: center;
}
```

`text-decoration:`
Adds decorations to text, such as underline, overline, line-through, or none.

```css
a {
  text-decoration: underline;
}
```

`text-transform:`
Controls the capitalization of text. Values include uppercase, lowercase, capitalize, and none.

```css
h2 {
  text-transform: uppercase;
}
```

`letter-spacing:`
Adjusts the space between characters.

```css
p {
  letter-spacing: 1px;
}
```

`font:`
A shorthand property that combines several font properties into a single declaration.

```css
p {
  font:
    italic bold 16px/1.5 "Times New Roman",
    serif;
}
```

## Font Colors

Colors play a crucial role in web design, and CSS provides various ways to define and apply colors to elements. Here are some key ways to work with colors in CSS:

`Named Colors:`
CSS has a set of predefined color names that you can use.

```css
h1 {
  color: red;
}
```

`Hexadecimal Colors:`
Represented by a six-digit code (e.g., #RRGGBB), where RR represents red, GG represents green, and BB represents blue.

```css
p {
  color: #336699;
}
```

`RGB Colors:`
Represented by the values of red, green, and blue in the range 0 to 255.

```css
div {
  background-color: rgb(255, 0, 0);
}
```

`RGBA Colors:`
Similar to RGB but with an additional alpha channel for transparency (0 to 1).

```css
span {
  background-color: rgba(0, 128, 0, 0.5);
}
```

`HSL Colors:`
Represented by hue (0 to 360), saturation (0% to 100%), and lightness (0% to 100%).

```css
a {
  color: hsl(120, 100%, 50%);
}
```

`HSLA Colors:`
Similar to HSL but with an additional alpha channel for transparency (0 to 1).

```css
a:hover {
  background-color: hsla(240, 100%, 50%, 0.7);
}
```

`System Colors:`
CSS provides certain system color keywords, like buttonface, buttonhighlight, etc., which can be used in some cases.

```css
button {
  background-color: ButtonFace;
}
```

`CurrentColor Keyword:`
Refers to the computed value of the 'color' property. Useful for creating dynamic styles.

```css
p {
  color: blue;

  border: 2px solid currentColor;
}
```

`Linear Gradients:`
Create smooth transitions between two or more specified colors.

```css
div {
  background: linear-gradient(to right, red, yellow);
}
```

`Radial Gradients:`
Similar to linear gradients but radiate from a center point.

```css
div {
  background: radial-gradient(circle, red, yellow);
}
```
