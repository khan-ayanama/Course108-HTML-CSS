# Flex-items

`flex-grow:` This property defines the ability for a flex item to grow if necessary. It takes a unitless value that represents the proportion of the available space that the item should take up.

```css
    flex-grow: 2; /* This item will take up twice as much space as other items */
```

`flex-shrink:` This property defines the ability for a flex item to shrink if necessary. It also takes a unitless value.

```css
    flex-shrink: 0; /* This item won't shrink if there's not enough space */
```

`flex-basis:` This property sets the initial size of a flex item. It can be set to a specific length, a percentage, or the auto keyword.

```css
    flex-basis: 50%; /* Initial size is set to 50% of the container */
```

`flex:` This is a shorthand property for flex-grow, flex-shrink, and flex-basis. It allows you to set all three properties in one declaration.

```css
    flex: 1 0 50%; /* flex-grow: 1; flex-shrink: 0; flex-basis: 50%; */
```

`align-self:` This property allows the default alignment to be overridden for individual flex items. It accepts the same values as align-items.

```css
    align-self: flex-end; /* Align this item to the end of the container */
```

`order:` This property allows you to specify the order in which a flex item appears in the flex container. It takes a unitless value, with lower values coming first.

```css
    order: 2; /* This item will appear second in the flex container */
```
