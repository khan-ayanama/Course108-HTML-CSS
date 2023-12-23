# Elements

## Heading

The `<h1>` to `<h6>` elements create headings with different levels of importance.

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

## Paragraphs

```html
<p>
  This is a paragraph of text. It can contain various elements like
  <strong>strong</strong>, <em>emphasized</em>, and <a href="#">links</a>.
</p>
<p>This is another paragraph.</p>
```

`Note:`

- The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
- The HTML `<br>` element defines a line break.
- The HTML `<pre>` element defines preformatted text.

## HTML Styles

### Inline Styles

```html
<p style="color: red; font-size: 18px;">This is a red and larger text.</p>
```

### Internal Styles

```html
    <head>
    <title>Document with Internal Styles</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        }

        h1 {
        color: #333;
        text-align: center;
        }

        p {
        color: #555;
        line-height: 1.6;
        }
    </style>
    </head>
    <body>
    <h1>Main Title</h1>
    <p>This is a paragraph with internal styles.</p>
    </body>
    </html>
```

## External Styles

External styles involve placing CSS rules in a separate file and linking it to the HTML document using the `<link>` element.

## HTML Formatting Elements

- `<b>`Defines bold text
- `<em>`Defines emphasized text
- `<i>`Defines a part of text in an alternate voice or mood
- `<small>`Defines smaller text
- `<strong>`Defines important text
- `<sub>`Defines subscripted text
- `<sup>`Defines superscripted text
- `<ins>`Defines inserted text
- `<del>`Defines deleted text
- `<mark>`Defines marked/highlighted text

## HTML Quotation

`<blockquote> Element`:
The `<blockquote>` element is used to represent a block of text that is a quotation from another source. It's typically displayed with indentation.

Example:

```html
<blockquote>
  <p>This is a quotation from another source.</p>
  <footer>Author of the Source</footer>
</blockquote>
```

`<q> Element:`
The `<q>` element is used to define inline quotations. It's designed for short quotations, and browsers usually add quotation marks around the text.

Example:

```html
<p>The <q>quick brown fox</q> jumps over the lazy dog.</p>
```

`<cite> Element:`
The `<cite>` element is often used within `<blockquote>` or `<q>` to provide the source or reference of the quotation.

Example:

```html
<blockquote>
  <p>This is a quotation from another source.</p>
  <cite>Author of the Source</cite>
</blockquote>
```

`Nesting and Combining:`
You can nest `<blockquote>` and `<q>` elements as needed for more complex quotations.

Example:

```html
<blockquote>
  <p>
    This is a quotation from another source that includes an inline quotation:
    <q>inline quote here</q>.
  </p>
  <footer>Author of the Source</footer>
</blockquote>
```

## HTML Comments

```html
<!-- This is a single-line comment -->
<p>This is a paragraph of text.</p>

<!--
    This is a multi-line comment.
    It can span multiple lines.
    -->
<p>This is another paragraph of text.</p>
```

## HTML Colors

`Named Colors:`
HTML supports a set of named colors that you can use directly in your styles. Some examples include:

```html
<p style="color: red;">This text is red.</p>
<p style="color: blue;">This text is blue.</p>
<p style="color: green;">This text is green.</p>
```

`Hexadecimal Colors:`
Hexadecimal values represent colors using a combination of six characters (0-9 and A-F), where the first two characters represent the red component, the next two represent green, and the last two represent blue. For example:

```html
<p style="color: #ff0000;">This text is red.</p>
<p style="color: #00ff00;">This text is green.</p>
<p style="color: #0000ff;">This text is blue.</p>
```

`RGB Colors:`
RGB values represent colors using the red, green, and blue components. Each component is a number from 0 to 255. For example:

```html
<p style="color: rgb(255, 0, 0);">This text is red.</p>
<p style="color: rgb(0, 255, 0);">This text is green.</p>
<p style="color: rgb(0, 0, 255);">This text is blue.</p>
```

`HSL Colors:`
HSL values represent colors using hue, saturation, and lightness. Hue is a degree on the color wheel (0 to 360), saturation is a percentage (0% to 100%), and lightness is also a percentage (0% to 100%). For example:

```html
<p style="color: hsl(0, 100%, 50%);">This text is red.</p>
<p style="color: hsl(120, 100%, 50%);">This text is green.</p>
<p style="color: hsl(240, 100%, 50%);">This text is blue.</p>
```
