# HTML

## Introduction

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

- The <!DOCTYPE html> declaration defines that this document is an HTML5 document
- The `<html>` element is the root element of an HTML page
- The`<head>` element contains meta information about the HTML page
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading
- The `<p>` element defines a paragraph

## HTML Elements

The HTML element is everything from the start tag to the end tag:

**Note:** Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. Empty elements do not have an end tag!

- HTML tags are not case sensitive: `<P>` means the same as `<p>`.

## HTML Attributes

### Basic structure attribute

`class`

- Specifies one or more class names for an element

Example: `<div class="container">`

`id`

- Specifies a unique id for an element
  Example: `<p id="intro">`

`style`

- Inline CSS styles for an element
  Example: `<p style="color: red;">`

`title`

- Adds extra information about an element
  Example: `<a href="example.com" title="Visit">`

### Link and Navigation Attributes

`href`

- Specifies the URL of a linked resource
  Example: `<a href="https://www.example.com">Link</a>`

`target`

- Specifies where to open linked resources
  Example: `<a href="example.com" target="_blank">`

`rel`

- Defines the relationship between documents
  Example: `<link rel="stylesheet" href="style.css">`

`download`

- Indicates that the hyperlink is to be downloaded
  Example: `<a href="file.pdf" download>Download</a>`

### Image Attributes

**src**
Specifies the source URL of an image
Example: `<img src="image.jpg" alt="...">`

**alt**
Defines alternative text for an image
Example: `<img src="img.jpg" alt="Description">`

**width**
Specifies the width of an image
Example: `<img src="img.jpg" width="200">`

**height**
Specifies the height of an image
Example: `<img src="img.jpg" height="150">`

## Form attribute

**action**
URL where form data is sent when submitted
Example: `<form action="/submit" method="post">`

**method**
HTTP method used to send form data
Example: `<form action="/submit" method="post">`

**name**
Name of the form element
Example: `<input type="text" name="username">`

**placeholder**
Placeholder text for input fields
Example: `<input type="text" placeholder="Name">`

**required**
Specifies that an input field must be filled
Example: `<input type="text" required>`

## Headings

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

## HTML Links

`Basic Link:`

```html
<a href="https://www.example.com">Visit Example.com</a>
```

This creates a hyperlink that, when clicked, takes the user to the specified URL.

`Relative Links:`
Relative links are used to link to pages or resources within the same website. The path is specified relative to the current page.

```html
<a href="/about">About Us</a>
```

`Linking to Email Addresses:`
You can use the mailto: scheme to create links that open the default email client with a pre-filled email address.

```html
<a href="mailto:info@example.com">Send Email</a>
```

`Opening Links in a New Window or Tab:`
The target attribute can be used to control where the linked content will be displayed.

```html
<a href="https://www.example.com" target="_blank"
  >Visit Example.com in a new tab</a
>
```

`Linking to Sections within the Same Page:`
You can use the id attribute to create links that point to specific sections within the same document.

```html
<a href="#section1">Go to Section 1</a>

<!-- ... -->

<h2 id="section1">Section 1</h2>
```

`Linking with Images:`
You can use the `<a>` element to create links around images.

```html
<a href="https://www.example.com">
  <img src="image.jpg" alt="Example Image" />
</a>
```

`Linking to Files (e.g., PDF, Documents):`
Links can also point to various types of files.

```html
<a href="document.pdf">Download Document</a>
```

`Linking with CSS Classes:`
You can use CSS classes to style links.

```html
<a href="#" class="button">Click me</a>
<style>
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
  }
</style>
```

### Link States

`a:link` - This is the default state of a link, the way it looks before it has been visited or interacted with.

`a:visited` - This state applies to links that the user has already visited. Browsers typically keep track of visited links and allow you to style them differently if desired.

`a:hover` - This state is triggered when the user hovers their mouse over the link. It's commonly used to highlight a link or show that it's interactive.

`a:active` - This state occurs at the moment the link is clicked but not yet released. It's often used to give feedback to the user that their click is being processed.

## HTML Images

In HTML, images are displayed using the `<img>` (image) element. The `<img>` element is a self-closing tag that does not have a closing tag. Here's an overview of how to use images in HTML:

`Basic Image:`

```html
<img src="image.jpg" alt="Description" />
```

The src attribute specifies the source URL (file path or URL) of the image.
The alt attribute provides alternative text for accessibility and is displayed if the image cannot be loaded.

`Image with Width and Height:`
You can use the width and height attributes to specify the dimensions of the image.

```html
<img src="image.jpg" alt="Description" width="300" height="200" />
```

`Responsive Image:`
To make an image responsive, you can use the max-width: 100%; CSS style to ensure that it scales within its container.

```html
<img src="image.jpg" alt="Description" style="max-width: 100%;" />
```

`Image as a Link:`
You can use the `<a>` (anchor) element to make an image a clickable link.

```html
<a href="https://www.example.com">
  <img src="image.jpg" alt="Description" />
</a>
```

`Placeholder Image:`
You can use placeholder images for testing or as temporary replacements.

```html
<img src="https://via.placeholder.com/300" alt="Placeholder Image" />
```

`Image with CSS Classes:`
You can use CSS classes to style images.

```html
<img src="image.jpg" alt="Description" class="rounded" />
<style>
  .rounded {
    border-radius: 10px;
  }
</style>
```

`Image Map:`
Image maps allow different regions of an image to be clickable with separate links.

```html
<img src="world-map.jpg" alt="World Map" usemap="#map" />
<map name="map">
  <area
    shape="rect"
    coords="0,0,200,100"
    href="north-america.html"
    alt="North America"
  />
  <area shape="rect" coords="200,0,400,100" href="europe.html" alt="Europe" />
  <!-- Add more areas as needed -->
</map>
```

### Background Images

`Syntax:` background-image: url('image-path.jpg');

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Background Image Demo</title>
    <style>
      body {
        /* Sets the background image */
        background-image: url("background.jpg"); /* Replace 'background.jpg' with your image path */

        /* Controls the repeating of the background image */
        background-repeat: no-repeat; /* Options: repeat, repeat-x, repeat-y, no-repeat */

        /* Sets the starting position of the background image */
        background-position: right top; /* Options: x% y%, xpos ypos, top, bottom, left, right, center */

        /* Sets whether the background image scrolls with the page or is fixed */
        background-attachment: fixed; /* Options: scroll, fixed, local */

        /* Specifies the size of the background image */
        background-size: cover; /* Options: auto, length, percentage, cover, contain */

        /* Example of combining properties in shorthand:
            background: url('background.jpg') no-repeat right top fixed cover;
            */
      }
    </style>
  </head>
  <body>
    <h1>Welcome to Our Website</h1>
    <p>Enjoy the stunning view in the background!</p>
  </body>
</html>
```

In this example, background.jpg is set as a fixed background image that covers the entire page without repeating. It starts from the top-right corner of the page.

### Favicons

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Page Title</title>
    <!-- Add the favicon link -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </head>
  <body>
    <!-- Your page content goes here -->
  </body>
</html>
```

## Picture Element

There are two main purposes for the `<picture>` element:

1. Bandwidth
   If you have a small screen or device, it is not necessary to load a large image file. The browser will use the first `<source>` element with matching attribute values

2. Format Support
   Some browsers or devices may not support all image formats. By using the `<picture>` element, you can add images of all formats, and the browser will use the first format it recognizes, and ignore any of the following elements.

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <source media="(min-width: 450px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="An example image" />
</picture>
```

## HTML Tables

HTML Table Tags
Tag Description
`<table>`Defines a table
`<th>`Defines a header cell in a table
`<tr>`Defines a row in a table
`<td>`Defines a cell in a table
`<caption>`Defines a table caption
`<colgroup>`Specifies a group of one or more columns in a table for formatting
`<col>`Specifies column properties for each column within a `<colgroup>` element
`<thead>`Groups the header content in a table
`<tbody>`Groups the body content in a table
`<tfoot>`Groups the footer content in a table

Example:01

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Car Specifications</title>
    <style>
      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      th,
      td {
        padding: 8px;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
      </tr>
      <tr>
        <td>Toyota</td>
        <td>Camry</td>
        <td>2020</td>
      </tr>
      <tr>
        <td>Honda</td>
        <td>Accord</td>
        <td>2021</td>
      </tr>
      <tr>
        <td>Ford</td>
        <td>Mustang</td>
        <td>2022</td>
      </tr>
    </table>
  </body>
</html>
```

Example:02

```html
<table>
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Toyota</td>
      <td>Camry</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>Honda</td>
      <td>Accord</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>Ford</td>
      <td>Mustang</td>
      <td>2022</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">End of List</td>
    </tr>
  </tfoot>
</table>
```

### Table Borders

**HTML - Basic Border Property**
In HTML, you can directly add a border to your table by using the border attribute on the `<table>` tag. For example:

```html
<table border="1">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

This will create a simple table with a border thickness of 1 pixel around it. However, using the border attribute is considered outdated, and CSS is the recommended way to style tables for more flexibility and control.

**CSS - Styling Table Borders**
CSS provides more comprehensive options for styling table borders. Here are some properties you can use:

`border:` This property allows you to specify the size, style, and color of the border. For example, border: 1px solid black; will create a 1 pixel, solid black border.

`border-collapse`: This property is particularly useful for tables. It determines whether the table borders are collapsed into a single border (border-collapse: collapse;) or separated (border-collapse: separate;).

`border-spacing:` If you have border-collapse: separate;, you can control the spacing between borders with border-spacing. For example, border-spacing: 5px; will create 5 pixels of space between the borders of adjacent cells.

Example with CSS
Here's a basic example using CSS to style a table:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th,
      td {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
      </tr>
    </table>
  </body>
</html>
```

In this example, border-collapse: collapse; ensures that the borders between cells are merged into a single line, giving the table a more unified appearance. Each cell has a 1px solid black border, and there's a light gray background for table headers for better readability.

### Table Sizes

```html
<table style="width:100%">
  <tr>
    <th style="width:70%">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

### Table Headers

To use the first column as table headers, define the first cell in each row as a `<th>` element:

```html
<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
    <td>Eve</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
    <td>Jackson</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>94</td>
    <td>50</td>
  </tr>
</table>
```

### Colspan and Rowspan

```html
<!-- Colspan -->
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>

<!-- Rowspan -->
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>
```

## HTML Lists

**_Unordered Lists_**

- Use the HTML `<ul>` element to define an unordered list
- Use the CSS list-style-type property to define the list item marker
- Use the HTML `<li>` element to define a list item
- List items can contain other HTML elements
- Use the CSS property float:left to display a list horizontally

Example

```html
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

**_Ordered Lists_**

- Use the HTML `<ol>` element to define an ordered list
- Use the HTML type attribute to define the numbering type
- Use the HTML `<li>` element to define a list item
- Lists can be nested
- List items can contain other HTML elements

```html
<!-- Example-01 -->
<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- Example-02 -->
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

**_Description Lists_**

- Use the HTML `<dl>` element to define a description list
- Use the HTML `<dt>` element to define the description term
- Use the HTML `<dd>` element to describe the term in a description list

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

## Block and Inline Element

`Block Element:` It takes full width of window

Examples:

```html
<!-- <address> -->
<!-- <article> -->
<!-- <aside> -->
<!-- <blockquote> -->
<!-- <canvas> -->
<!-- <dd> -->
<!-- <div> -->
<!-- <dl> -->
<!-- <dt> -->
<!-- <fieldset> -->
<!-- <figcaption> -->
<!-- <figure> -->
<!-- <footer> -->
<!-- <form> -->
<!-- <h1> -->
<!-- <h2> -->
<!-- <h3> -->
<!-- <h4> -->
<!-- <h5> -->
<!-- <h6> -->
<!-- <header> -->
<!-- <hr> -->
<!-- <li> -->
<!-- <main> -->
<!-- <nav> -->
<!-- <noscript> -->
<!-- <ol> -->
<!-- <p> -->
<!-- <pre> -->
<!-- <section> -->
<!-- <table> -->
<!-- <tfoot> -->
<!-- <ul> -->
<!-- <video> -->
```

`Inline Element`

```html
<!-- <a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var> -->
```

## HTML Class and ID

```html
<!-- There can be more than one class -->
<div class="content highlight">This is a div element with two classes.</div>

<!-- There can be only one ID of same name -->
<div id="content-1">This is a div element with one Id.</div>
```

## HTML Iframes

An HTML `<iframe>` is an inline frame used within a webpage to embed another document within the current HTML document. This allows for the inclusion of content like videos, maps, or even another web page entirely, without the need for the user to navigate away from the current page.

Basic Syntax
The basic syntax of an `<iframe>` looks like this:

```html
<iframe src="url" width="width" height="height"></iframe>
```

`src:` Specifies the URL of the page that the iframe will display.
`width and height:` Define the size of the iframe. These can be specified in pixels or as a percentage of the container's size.
Example
Here's a simple example of embedding a web page within an iframe:

```html
<iframe src="https://www.example.com" width="600" height="400">
  <p>Your browser does not support iframes.</p>
</iframe>
```

**Attributes**
`src:` The URL of the page to embed.
`width and height:` Dimensions of the iframe.
`name:` A target for hyperlinks and forms.
`sandbox:` Enables an extra set of restrictions for the content in the iframe.
`allow:` Specifies the features the iframe can use (such as microphone or camera).
`allowfullscreen:` Boolean attribute that can enable the iframe to be displayed in full-screen mode.

**_Security and the sandbox Attribute_**
The sandbox attribute enhances security by restricting the actions that content can perform when embedded via an iframe. It supports several values that allow you to fine-tune the restrictions, such as:

`allow-scripts:` Allows the execution of scripts.
`allow-same-origin:` Allows the iframe content to be treated as being from the same origin.
`allow-popups:` Allows popups (such as window.open()).
`allow-forms:` Allows form submission.
`allow-top-navigation:` Allows the content to navigate its top-level browsing context.
Without any value, sandbox applies all restrictions. You can remove specific restrictions by specifying them as values of the attribute.

## Meta Heads

Define the character set used:
`<meta charset="UTF-8">`

Define keywords for search engines:
`<meta name="keywords" content="HTML, CSS, JavaScript">`

Define a description of your web page:
`<meta name="description" content="Free Web tutorials">`

Define the author of a page:
`<meta name="author" content="John Doe">`

Refresh document every 30 seconds:
`<meta http-equiv="refresh" content="30">`

Setting the viewport to make your website look good on all devices:
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## HTML Layout Elements

These elements provide a way to create a meaningful hierarchy and visually organize different sections of your webpage. Here are some common HTML layout elements:

`<header>:`
Represents the header of a document or a section.
Typically contains headings, logos, navigation menus, and other introductory content.

`<nav>:`
Represents a navigation menu.

`<main>:`
Represents the main content of the document.
Should not include headers, footers, or sidebars that are part of the overall page design.

`<section>:`
Represents a generic section of content.
Can be used to group related content together.

`<article>:`
Represents an independent, self-contained piece of content.
Can be used for blog posts, news articles, comments, etc.

`<aside>:`
Represents content that is tangentially related to the content around it.
Often used for sidebars, advertisements, or related links.

`<footer>:`
Represents the footer of a document or a section.
Typically contains copyright information, links to terms of service, and other footer-related content.

`Example:`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>All-in-One HTML Page</title>
  </head>
  <body>
    <header>
      <h1>Website Title</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section>
        <h2>Main Section 1</h2>
        <p>This is the main content of section 1.</p>
      </section>

      <section>
        <h2>Main Section 2</h2>
        <p>This is the main content of section 2.</p>
      </section>

      <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
      </article>

      <aside>
        <h3>Related Links</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <p>&copy; 2023 Website Name. All rights reserved.</p>
    </footer>
  </body>
</html>
```

`<code>`Defines programming code
`<kbd>`Defines keyboard input
`<samp>`Defines computer output
`<var>`Defines a variable
`<pre>`Defines preformatted text

## HTML Enteties

```html
<p>This is an example of reserved characters: &lt;em&gt;italic&lt;/em&gt;</p>

<p>This&nbsp;text&nbsp;will&nbsp;not&nbsp;break.</p>

<p>&copy; 2023 Company Name. All rights reserved.</p>

<p>10 &times; 5 = 50</p>

<p>Caf&eacute; au lait is a popular drink.</p>
```

## HTML Symbols

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Symbols Example</title>
  </head>
  <body>
    <p>Arrow symbols: &rarr; &larr; &uarr; &darr;</p>

    <p>Bullet symbols: &bull; &middot;</p>

    <p>Currency symbols: &dollar; &euro; &pound; &yen;</p>

    <p>Math symbols: &plusmn; &times; &divide; &equals;</p>

    <p>Miscellaneous symbols: &hearts; &spades; &clubs; &diams;</p>

    <p>Trademark and copyright symbols: &trade; &copy; &reg;</p>

    <p>Miscellaneous symbols and dingbats: &star; &check; &cross; &bullet;</p>
  </body>
</html>
```

## HTML Emojis

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Emojis Example</title>
  </head>
  <body>
    <p>This is a smiley face: 😊</p>
    <p>Thumbs up: 👍</p>
    <p>Heart eyes: 😍</p>
    <p>Waving hand: 👋</p>

    <!-- With Unicode -->
    <p>This is a smiley face: &#x1F60A;</p>
    <p>Thumbs up: &#x1F44D;</p>
    <p>Heart eyes: &#x1F60D;</p>
    <p>Waving hand: &#x1F44B;</p>
  </body>
</html>
```

## Multimedia

HTML (Hypertext Markup Language) provides various elements to include multimedia content on web pages. Here are some key HTML multimedia elements:

`<img>:` Used for embedding images.

```html
<img src="image.jpg" alt="Description" />
```

`<audio>:` Embeds audio content on a web page.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
  Your browser does not support the audio tag.
</audio>
```

`<video>:` Embeds video content on a web page.

```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

`<iframe>:` Embeds external content, like videos from YouTube.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
></iframe>
```

`<embed>:` Embeds external applications or interactive content.

```html
<embed src="application.swf" width="500" height="300" />
```

## HTML Video

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Video Example</title>
  </head>
  <body>
    <h1>HTML Video Example</h1>

    <!-- Basic Usage -->
    <video width="640" height="360" controls>
      <source src="example.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Additional Sources for Cross-Browser Compatibility -->
    <video width="640" height="360" controls>
      <source src="example.mp4" type="video/mp4" />
      <source src="example.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <!-- Specifying Different Video Formats for Compatibility -->
    <video width="640" height="360" controls>
      <source src="example.mp4" type="video/mp4" />
      <source src="example.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>

    <!-- Autoplay and Loop Attributes -->
    <video width="640" height="360" controls autoplay loop>
      <source src="example.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </body>
</html>
```

## HTML Audio

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Audio Example</title>
  </head>
  <body>
    <h1>HTML Audio Example</h1>

    <!-- Basic Usage -->
    <audio controls>
      <source src="example.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>

    <!-- Additional Sources for Cross-Browser Compatibility -->
    <audio controls>
      <source src="example.mp3" type="audio/mp3" />
      <source src="example.ogg" type="audio/ogg" />
      Your browser does not support the audio tag.
    </audio>

    <!-- Autoplay and Loop Attributes -->
    <audio controls autoplay loop>
      <source src="example.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  </body>
</html>
```

## HTML Youtube

Embedding a YouTube video in an HTML page is typically done using an `<iframe>` element. Here's an example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML YouTube Video Example</title>
  </head>
  <body>
    <h1>HTML YouTube Video Example</h1>

    <!-- YouTube Video Embed -->
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </body>
</html>
```

`Explanation:`
`<iframe>:` This element is used to embed an external resource, in this case, a YouTube video.
width and height: Specify the dimensions of the embedded video player.
src: Replace "YOUR_VIDEO_ID" with the actual ID of the YouTube video you want to embed. You can find the video ID in the YouTube URL after "v=" (e.g., `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`).
frameborder="0": This attribute removes the border around the iframe.
allowfullscreen: Allows the video to be viewed in fullscreen mode.
Make sure to replace "YOUR_VIDEO_ID" with the actual ID of the YouTube video you want to embed.

## SVG

SVG stands for Scalable Vector Graphics. It's an XML-based markup language for describing two-dimensional based vector graphics. SVG is both a powerful and flexible format that's supported by all modern web browsers. It allows for the creation of complex graphics that can be scaled to any size without losing quality, making it ideal for logos, icons, and detailed illustrations for the web and beyond. Here's a breakdown of its key features and benefits:

1. Vector Format
   Unlike raster images (such as PNG or JPG), which are made up of pixels, SVG graphics are composed of points, lines, and shapes. This means they can be scaled up or down infinitely without any loss of quality or increase in file size.
2. XML-Based
   Being XML-based means that SVG files are editable in any text editor and can be searched, indexed, scripted, and compressed. It's possible to manipulate SVG images directly using CSS and JavaScript.
3. Interactivity and Animation
   SVG supports interactivity and animation. With the use of SVG, along with CSS and JavaScript, you can create dynamic graphics that respond to user interactions or animate elements within the graphics.
4. DOM Support
   SVG elements are part of the Document Object Model (DOM), which means they can be manipulated in the same way as HTML elements using JavaScript. This makes it easy to create interactive web applications with complex graphical components.
5. Accessibility
   Since SVG graphics can be created and manipulated through text files and can include text-based descriptions, they are inherently more accessible than raster images. This makes SVG an excellent choice for web content that must meet accessibility standards.
6. Performance
   For certain types of graphical representations, SVG files can be more efficient than traditional bitmap images, particularly for smaller icons or graphics where the file size can be significantly less.
7. Search Engine Optimization (SEO)
   Texts within SVG graphics are selectable and searchable, which enhances SEO. Search engines can index the content of SVG files, potentially improving the visibility of the graphics in search results.
8. Applications
   SVG has a wide range of applications, from simple logos and icons to complex illustrations and interactive data visualizations. It's used in web design, mobile apps, and even in some desktop applications.
   Creating and Editing SVG
   SVG graphics can be created with any text editor by coding them directly in SVG format, but that requires knowledge of the SVG markup language. Alternatively, many vector graphic design programs, such as Adobe Illustrator, Inkscape, and Sketch, can output graphics in SVG format. These tools provide a more accessible entry point for designers and those not familiar with coding.

Conclusion
SVG offers a versatile and efficient way to create high-quality, interactive, and accessible graphics for the web. Its scalability, combined with its ability to be manipulated via CSS and JavaScript, makes it a powerful tool for web designers and developers aiming to create responsive and engaging web experiences.

## HTML Canvas

The HTML `<canvas>` element is used to draw graphics on a web page. Unlike SVG, which is vector-based, `<canvas>` provides a means to render pixel-based graphics via scripting (usually JavaScript). This makes it particularly well-suited for building graphics-intensive applications such as games, image editing tools, and data visualizations that require dynamic, real-time updates.

**Key Features of HTML Canvas:**

1. Pixel Manipulation
   Direct control over individual pixels allows for complex effects and processing, such as image transformations and filters.
2. Performance
   For applications requiring intensive graphics operations, canvas can be faster, especially when dealing with animations or interactive games.
3. Flexibility
   It's possible to draw shapes, text, images, and other media. Canvas also supports compositing, image smoothing, and more.
   How It Works:
   To use `<canvas>`, you simply include it in your HTML document with a defined width and height:

```html
<canvas
  id="myCanvas"
  width="200"
  height="100"
  style="border:1px solid #000000;"
>
</canvas>
```

Basic Example

`Drawing a Rectangle`

```html
<!DOCTYPE html>
<html>
  <body>
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #000000;"
    >
      Your browser does not support the canvas element.
    </canvas>

    <script>
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(20, 20, 150, 75);
    </script>
  </body>
</html>
```

In this example, we first obtain a reference to the canvas element using document.getElementById(). We then call getContext("2d") to get the 2D rendering context—the actual tool we use to draw. fillStyle sets the color of the fill, and fillRect() draws a rectangle filled with that color.

Example
`Drawing a Circle (Arc)`
To draw a circle or part of a circle, we use the arc() method:

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 \* Math.PI); // Creates a circle
ctx.stroke();
```

This script draws a circle centered at (95, 50) with a radius of 40. stroke() outlines the shape.

Example
`Adding Text`
You can also add text to your canvas:

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "30px Arial";
ctx.fillText("Hello, Boss!", 10, 50);
```

This will render the text "Hello, Boss!" at the position (10, 50) on the canvas.

`Interactive and Animated Graphics`
Canvas is particularly powerful for interactive and animated graphics. Here's a simple animation example:

```html
<canvas id="myCanvas" width="480" height="320"></canvas>

<script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var dx = 2;
  var dy = -2;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;

    requestAnimationFrame(animate);
  }

  animate();
</script>
```

This code creates a simple animation of a ball bouncing around the canvas area. requestAnimationFrame(animate) is a method that tells the browser to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
