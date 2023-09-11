# Class Selector

## Basic Class Selector

Selects elements with a specific class name.

```css
    .my-class {
    /* CSS styles here */
    }
```

This selects all elements with the class "my-class" and applies the specified styles.

## Multiple Class Selector

Selects elements with multiple class names. You can chain class selectors together without spaces.

```css
    .class1.class2 {
    /* CSS styles here */
    }
```

This selects elements that have both "class1" and "class2" classes applied to them.

## Descendant Class Selector

Selects elements with a specific class that are descendants of a certain element.

```css
    .parent-class .child-class {
    /* CSS styles here */
    }
```

This selects elements with the class "child-class" that are descendants of an element with the class "parent-class."

## Element and Class Selector Combination

Selects elements of a specific type with a specific class.

```css
    p.my-class {
    /* CSS styles here */
    }
```

This selects all `<p>` elements with the class "my-class" and applies the specified styles.

## Class Selector with Pseudo-class

Combines a class selector with a pseudo-class to select elements based on their state or position.

```css
    .button:hover {
    /* CSS styles here */
    }
```

This selects elements with the class "button" when the mouse hovers over them.

## Class Selector with Attribute Selector

Selects elements with a specific class and a specific attribute value.

```css
    .active[data-toggle="modal"] {
    /* CSS styles here */
    }
```

This selects elements with the class "active" and a data-toggle attribute set to "modal."

## Class Selector with Attribute Presence

Selects elements with a specific class and a certain attribute, regardless of its value.

```css
    .special[disabled] {

    /* CSS styles here */
    }
```

This selects elements with the class "special" that have a "disabled" attribute, regardless of the attribute's value.

## Class Selector with Attribute Value Matching

Selects elements with a specific class and an attribute whose value matches a specific pattern.

```css
    .icon[src$=".png"] {
    /* CSS styles here */
    }
```

This selects elements with the class "icon" and a src attribute whose value ends with ".png."
