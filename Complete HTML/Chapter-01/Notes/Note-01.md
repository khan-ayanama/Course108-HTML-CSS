# Introduction

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

```html
<!doctype html>
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
