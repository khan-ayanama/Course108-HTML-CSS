# HTML Basics

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
<a href="https://www.example.com" target="_blank">Visit Example.com in a new tab</a>
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
    <img src="image.jpg" alt="Example Image">
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

## HTML Images

In HTML, images are displayed using the `<img>` (image) element. The `<img>` element is a self-closing tag that does not have a closing tag. Here's an overview of how to use images in HTML:

`Basic Image:`

```html
    <img src="image.jpg" alt="Description">
```

The src attribute specifies the source URL (file path or URL) of the image.
The alt attribute provides alternative text for accessibility and is displayed if the image cannot be loaded.

`Image with Width and Height:`
You can use the width and height attributes to specify the dimensions of the image.

```html
    <img src="image.jpg" alt="Description" width="300" height="200">
```

`Responsive Image:`
To make an image responsive, you can use the max-width: 100%; CSS style to ensure that it scales within its container.

```html
    <img src="image.jpg" alt="Description" style="max-width: 100%;">
```

`Image as a Link:`
You can use the `<a>` (anchor) element to make an image a clickable link.

```html
    <a href="https://www.example.com">
    <img src="image.jpg" alt="Description">
    </a>
```

`Placeholder Image:`
You can use placeholder images for testing or as temporary replacements.

```html
    <img src="https://via.placeholder.com/300" alt="Placeholder Image">
```

`Image with CSS Classes:`
You can use CSS classes to style images.

```html
    <img src="image.jpg" alt="Description" class="rounded">
    <style>
        .rounded {
            border-radius: 10px;
        }
    </style>

```

`Image Map:`
Image maps allow different regions of an image to be clickable with separate links.

```html
    <img src="world-map.jpg" alt="World Map" usemap="#map">
    <map name="map">
    <area shape="rect" coords="0,0,200,100" href="north-america.html" alt="North America">
    <area shape="rect" coords="200,0,400,100" href="europe.html" alt="Europe">
    <!-- Add more areas as needed -->
    </map>
```

## Favicons

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <!-- Add the favicon link -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    </head>
    <body>
    <!-- Your page content goes here -->
    </body>
    </html>
```
