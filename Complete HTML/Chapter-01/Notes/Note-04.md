# HTML Basics

## HTML Tables

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }

      th,
      td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    </style>
    <title>HTML Table Example</title>
  </head>
  <body>
    <table>
      <caption>
        Sample Table
      </caption>
      <thead>
        <tr>
          <th colspan="2">Header 1 & 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Spanned Cell</td>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
        <tr>
          <td colspan="2">Colspanned Cells</td>
          <td>Row 3, Cell 3</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

- The table has a caption: "Sample Table."
- The headers in the first row span two columns using colspan.
- The data cells in the first column span two rows using rowspan.
- Borders are added to the table and cells for better visibility.
- Alternating row colors are applied for better readability.

## HTML Lists

- Ordered List (`<ol>`):
  An ordered list is used for items that have a specific sequence or order. Each list item is marked with a number.

  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  ```

- Unordered List (`<ul>`):
  An unordered list is used for items that don't have a specific order or sequence. Each list item is typically marked with a bullet point.

  ```html
  <ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
  </ul>
  ```

- Definition List (`<dl>`):
  A definition list is used for terms and their corresponding definitions. It consists of `<dt>` (definition term) and `<dd>` (definition description) elements.

  ```html
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>
  ```

- Nested Lists:
  Lists can be nested within each other to create hierarchical structures.

  ```html
  <ul>
    <li>Item 1</li>
    <li>
      Item 2
      <ul>
        <li>Subitem 2.1</li>
        <li>Subitem 2.2</li>
      </ul>
    </li>
    <li>Item 3</li>
  </ul>
  ```

## Inlinve vs Block

`Inline Elements:`
Inline elements are elements that do not start on a new line and only take up as much width as necessary. They typically flow within the content and don't force a new line to begin. Examples of inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, and `<img>`.

`Block-Level Elements:`
Block-level elements, on the other hand, start on a new line and stretch to fill the full width of their containing element. They create a block or box structure in the document. Examples of block-level elements include `<div>, <p>, <h1> to <h6>, <ul>, <ol>, <li>, and <table>.`

`Inline vs. Block:`
Here's a comparison to illustrate the difference between inline and block elements:

### Inline

- Flows within the content.
- Ignores any attempt to set width and height.
- Does not start on a new line.
- Adjacent inline elements appear on the same line.

### Block

- Starts on a new line.
- Occupies the full width of the available space.
- Allows setting width and height.
- Forces a new line to begin after the block-level element.

## Iframe

In HTML, the `<iframe>` (inline frame) element is used to embed another document within the current HTML document. This allows you to display content from another source, such as a different web page, a video, or a document, directly within your web page.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IFrame Example</title>
  </head>
  <body>
    <h2>Embedded Web Page</h2>

    <iframe
      src="https://www.example.com"
      width="600"
      height="400"
      title="Embedded Web Page"
    ></iframe>
  </body>
</html>
```

`In this example:`

- The src attribute specifies the URL of the document to be embedded.
- The width and height attributes define the dimensions of the iframe.
- The title attribute provides a title for the embedded content, enhancing accessibility.
- You can also embed other types of content, such as videos, maps, or documents. Here's an example of embedding a YouTube video:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube Video"
></iframe>
```

`Responsive Iframe:`
To make the iframe responsive (adapt to different screen sizes), you can use CSS. Here's an example:

```html
<style>
  iframe {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
</style>
```

This CSS ensures that the iframe maintains a 16:9 aspect ratio and adjusts its height based on the width.

Remember that when embedding content from external sources, it's important to ensure that you have the right to do so and comply with the terms of service of the external site.
