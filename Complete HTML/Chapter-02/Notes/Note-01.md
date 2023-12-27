# Multimedia

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
<!doctype html>
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
<!doctype html>
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
<!doctype html>
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
