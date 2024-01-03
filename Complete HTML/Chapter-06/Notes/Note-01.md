# Absolute Units

Absolute units in CSS are units of measurement that are fixed and do not change based on the size of the viewport or the user's settings. Unlike relative units, which are dependent on other values, absolute units provide a constant size. Here are some commonly used absolute units in CSS:

`Pixels (px):` Pixels are the most common absolute unit. One pixel is a single dot on a screen, and its size is fixed.

```css
div {
  width: 200px;
  height: 100px;
}
```

`Inches (in):` Represents inches. For example:

```css
/*  inch ≈ 96 pixels */
div {
  width: 2in;
  height: 1in;
}
```

`Centimeters (cm):` Represents centimeters. For example:

```css
/* <!-- 1 cm ≈ 37.8 pixels --> */
div {
  width: 5cm;
  height: 2cm;
}
```

`Millimeters (mm):` Represents millimeters. For example:

```css
/* 1 mm ≈ 3.78 pixels */
div {
  width: 50mm;
  height: 20mm;
}
```

`Points (pt):` A point is equal to 1/72 of an inch. For example:

```css
/* 1 point ≈ 1.33 pixels */
div {
  font-size: 12pt;
}
```

`Picas (pc):` A pica is equal to 12 points. For example:

```css
/* 1 pica ≈ 16 pixels */
div {
  line-height: 1.5pc;
}
```

Keep in mind that using absolute units may lead to designs that do not adapt well to different screen sizes and resolutions. It's often recommended to use relative units like percentages or ems for a more flexible and responsive layout.
