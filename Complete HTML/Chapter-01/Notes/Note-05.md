# HTML Basics

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
<!doctype html>
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

## HTML Computer Code

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
<!doctype html>
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
<!doctype html>
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
