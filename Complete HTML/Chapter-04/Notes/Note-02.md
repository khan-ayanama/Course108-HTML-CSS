# Box Model

The CSS box model is a fundamental concept that defines the structure of an HTML element. Each element in a webpage can be considered as a rectangular box, and the box model consists of several components that affect the layout and presentation of these boxes.

Here are the main components of the CSS box model:

`Content:`
This is the actual content of the box, such as text, images, or other media.

`Padding:`
Padding is the space between the content and the border. It provides internal spacing within the box. You can set padding using properties like padding-top, padding-right, padding-bottom, and padding-left.

`Border:`
The border surrounds the padding and content. It can have a specified width, style, and color. You can set border properties using border-width, border-style, and border-color, or use the shorthand border property.

`Margin:`
The margin is the space outside the border. It provides spacing between the box and its surrounding elements. You can set margin using properties like margin-top, margin-right, margin-bottom, and margin-left.
Here's an example of how the box model is represented in CSS:

```css
/* Define a box with content, padding, border, and margin */
.box {
  width: 200px;
  height: 150px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}
```

`And in HTML:`

```html
<div class="box">This is the content of the box.</div>
```

In this example, the total width and height of the box would be calculated as follows:

Width: width + padding-left + padding-right + border-left-width + border-right-width
Height: height + padding-top + padding-bottom + border-top-width + border-bottom-width
The margin is additional space outside this calculated width and height, affecting the spacing between this box and other elements.

## Margin

In CSS, the margin property is used to control the spacing outside an element. It defines the space between the border of an element and the adjacent elements in the layout. The margin property can be set using various values:

`Single Value:`
Setting a single value applies the same margin to all four sides of the element.

```css
.example {
  margin: 10px; /* Applies 10 pixels of margin to all sides */
}
```

`Two Values:`
Setting two values applies the first value to the top and bottom margins and the second value to the left and right margins.

```css
.example {
  margin: 10px 20px; /* Applies 10 pixels top and bottom, 20 pixels left and right */
}
```

`Three Values:`
Setting three v applies the first value to the top margin, the second value to the left and right margins, and the third value to the bottom margin.

```css
.example {
  margin: 10px 20px 15px; /* Applies 10 pixels top, 20 pixels left and right, 15 pixels bottom */
}
```

`Four Values:`
Setting four values applies each value to the top, right, bottom, and left margins, in that order.

```css
.example {
  margin: 10px 20px 15px 5px; /* Applies 10 pixels top, 20 pixels right, 15 pixels bottom, 5 pixels left */
}
```

`Auto:`
The auto value can be used to allow the browser to automatically calculate the margin. It is often used in horizontal centering.

```css
.example {
  margin-left: auto;
  margin-right: auto;
}
```

Here's a simple example applying margin to a div element:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .example {
        width: 200px;
        height: 100px;
        border: 1px solid #333;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div class="example">This is a box with margin.</div>
  </body>
</html>
```

In this example, the .example div has a margin of 20 pixels on all sides, creating space around it

## Block vs Inline element

### Block-Level Elements

`Definition:`
Block-level elements create a "block" or a rectangular box in the document flow. They typically start on a new line and extend the full width of their containing element, pushing subsequent content down.
Examples:

```html
<div>
  <p></p>
  <h1>
    ,
    <h2>
      , ...,
      <h6>
        <ul>
          ,
          <ol>
            ,
            <li>
              <table>
                <form></form>
              </table>
            </li>
          </ol>
        </ul>
      </h6>
    </h2>
  </h1>
</div>
```

`Default Display:`
Block-level elements have a default display property of block.

### Inline Elements

Definition:

Inline elements do not create a new block; they flow within the content and only take up as much width as necessary. They do not start on a new line, and subsequent elements will appear on the same line.
Examples:

```html
<span>
  <a>
    <strong
      >,
      <em
        >,
        <b
          >,
          <i>
            <img />
            <br />, <small>, <code></code></small></i></b></em></strong></a
></span>
```

`Default Display:`
Inline elements have a default display property of inline.

### Key Differences

`Layout:`
Block-level elements create a new block and typically start on a new line.
Inline elements do not create a new block and flow within the content.

`Width:`
Block-level elements take up the full width available by default.
Inline elements only take up as much width as necessary.

`Height:`
Block-level elements can have a specified height, and they will affect the vertical space.
Inline elements generally do not have a specified height and only take up space vertically as needed for the content.

## Image element

The `<img>` element in HTML can be styled using CSS properties just like any other HTML element. Here are some common CSS properties that can be applied to the `<img>` element:

`Width and Height:`
You can use the width and height properties to control the dimensions of the image.

```css
img {
  width: 300px;
  height: 200px;
}
```

`Max Width:`
To ensure that the image is responsive and doesn't exceed a certain width, you can use the max-width property.

```css
img {
  max-width: 100%;
  height: auto;
}
```

`Border:`
You can add a border around the image using the border property.

```css
img {
  border: 1px solid #ccc;
}
```

`Margin and Padding:`
You can use margin and padding properties to create space around and within the image.

```css
img {
  margin: 10px;
  padding: 5px;
}
```

`Display:`
Though the `<img>` element is an inline element by default, you can change its display property to block or inline-block if you want it to behave like a block-level element.

```css
img {
  display: block;
}
```

`Opacity:`
You can control the transparency of the image using the opacity property.

```css
img {
  opacity: 0.8;
}
```

## Inline Block

The `display: inline-block;` property in CSS is used to make an element behave as an inline-level block container. This means the element will flow in the content like an inline element, but it will also respect width and height properties like a block-level element. This is particularly useful when you want an element to appear inline with the surrounding content but still have block-level properties.

## Default Margin Styles

Here are some common default styles applied by browsers:

`body Element:`
Margin: 8px on all sides.
Font-size: Typically 16px.
Line-height: Normal.
h1 to h6 Headings:

`Reset Browser Styles`

```css
/* Reset some default styles */
body,
h1,
p,
ul,
ol,
li,
a,
img {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* Additional resets and styles... */
```

## Inheritence

Inheritance is a mechanism that allows certain properties of an element to be passed down to its descendants. When a property is set on a parent element, the child elements can inherit that property value unless overridden.

Here are key points about inheritance in CSS:

`Inherited Properties:`
Not all properties are inherited. Only certain properties are designed to be inherited by default. Examples of inherited properties include font-family, font-size, color, line-height, etc.

`Non-Inherited Properties:`
Properties like border, margin, padding, and width are not inherited. Each element needs to specify these properties individually.
Using the inherit Keyword:

You can force an element to inherit a specific property value by using the inherit keyword.

```css
.parent {
  font-family: Arial, sans-serif;
}

.child {
  font-family: inherit; /* The font-family of the child will be inherited from the parent */
}
```

`Cascading:`
The concept of inheritance is part of the broader idea of the cascade in CSS. The cascade defines the order in which styles are applied, and inheritance is one aspect of how styles are inherited from parent to child elements.

## Text-Align

The text-align property in CSS is used to set the horizontal alignment of text content within an element. It applies to inline-level and block-level elements. Here are the common values for the text-align property:

Left (Default):

The text is aligned to the left side.

```css
.example {
  text-align: left;
  text-align: right;
  text-align: center;
  text-align: justify;
}
```

## Font-Weight

The font-weight property in CSS is used to set the thickness or boldness of the characters in a text. It accepts various values ranging from numeric values to predefined keywords.

Here are some commonly used values for the font-weight property:

`Normal:`
The default value. It specifies a normal (non-bold) font weight.

```css
.example {
  font-weight: normal;
  font-weight: bold;
}
```

`Bolder:`
It increases the font weight relative to the parent element. If the parent is normal, it is equivalent to bold. If the parent is bold, it results in a bolder weight.

```css
.parent {
  font-weight: bold;
}
.child {
  font-weight: bolder; /* This will be bolder than the parent */
}
```

`Lighter:`
It decreases the font weight relative to the parent element. If the parent is bold, it results in a lighter weight.

```css
.parent {
  font-weight: bold;
}
.child {
  font-weight: lighter; /* This will be lighter than the parent */
}
```

`Numeric Values:`
You can use numeric values ranging from 100 to 900 to set specific font weights. Common values include 100 (Thin), 400 (Normal), and 700 (Bold).

```css
.example {
  font-weight: 700; /* Equivalent to bold */
}
```

## Text Properties

text-related properties in CSS that allow you to control the appearance and layout of text. Here are some important ones:

`font-family:`
Specifies the font family for the text. It can be set to a specific font or a generic font family.

```css
.example {
  font-family: "Arial", sans-serif;
}
```

`font-size:`
Sets the size of the font. It can be specified in various units such as pixels, ems, or percentages.

```css
.example {
  font-size: 16px;
}
```

`line-height:`
Defines the amount of space above and below inline elements. It's often used to control the spacing between lines of text.

```css
.example {
  line-height: 1.5;
}
```

`color:`
Specifies the color of the text.

```css
.example {
  color: #333;
}
```

`text-decoration:`
Sets the decoration of text, such as underline or overline.

```css
.example {
  text-decoration: underline;
}
```

`text-transform:`
Controls the capitalization of text.

```css
.example {
  text-transform: uppercase;
}
```

`letter-spacing:`
Adjusts the space between characters in text.

```css
.example {
  letter-spacing: 2px;
}
```

`word-spacing:`
Controls the space between words in text.

```css
.example {
  word-spacing: 5px;
}
```

`text-indent:`
Sets the indentation of the first line of text within an element.

```css
.example {
  text-indent: 20px;
}
```

**white-space Property:**
The white-space property determines how white space characters (spaces, tabs, and line breaks) inside an element are handled. Here are some common values for the white-space property:

`normal:`
The default value. Sequences of white space are collapsed, and text wraps as necessary.

```css
.example {
  white-space: normal;
}
```

`nowrap:`
White space is collapsed, and the text does not wrap. It continues on the same line.

```css
.example {
  white-space: nowrap;
}
```

`pre:`
White space is preserved, and the text is displayed exactly as it appears in the HTML code, including line breaks.

```css
.example {
  white-space: pre;
}
```

`pre-line:`
White space is preserved, but line breaks are honored.

```css
.example {
  white-space: pre-line;
}
```

`pre-wrap:`
White space is preserved, and the text wraps as necessary.

```css
.example {
  white-space: pre-wrap;
}
```

`overflow Property:`
The overflow propety controls what happens when content overflows the box of its containing element. It can be used to hide the overflow, display a scrollbar, or affect the layout in other ways. Here are some common values for the overflow property:

visible:

Default value. Content is not clipped, and it may overflow the box.

```css
.example {
  overflow: visible;
}
```

`hidden:`
Content that overflows the box is clipped and not visible.

```css
.example {
  overflow: hidden;
}
```

`scroll:`
The box will provide a scrollbar to access the overflowed content.

```css
.example {
  overflow: scroll;
}
```

`auto:`
The browser will decide whether to provide a scrollbar based on the content size and the box size.

```css
.example {
  overflow: auto;
}
```

`overflow-x and overflow-y:`
You can also apply overflow-x and overflow-y to control overflow independently in the horizontal and vertical directions.

```css
.example {
  overflow-x: hidden;
  overflow-y: auto;
}
```
