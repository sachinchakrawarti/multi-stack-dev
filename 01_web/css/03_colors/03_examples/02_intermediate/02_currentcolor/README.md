# CSS currentColor Example

## Objective

Learn how to use the **currentColor** keyword in CSS to reuse the current text color for other properties.

---

## Topics Covered

- `currentColor`
- Text Color
- Borders
- Buttons
- Reusable Colors

---

## Files

```text
02_currentcolor/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Observe how changing the text color also changes the border and button colors automatically.

---

## Syntax

```css
color: blue;

border: 2px solid currentColor;
```

---

## How `currentColor` Works

The keyword uses the current value of the `color` property.

Example:

```css
.card{
    color:#1565c0;
    border:2px solid currentColor;
}
```

The border color becomes:

```css
#1565c0
```

---

## Common Properties That Support `currentColor`

- `border-color`
- `outline-color`
- `background`
- `box-shadow`
- `text-shadow`
- `fill` (SVG)
- `stroke` (SVG)
- `caret-color`

---

## Advantages

- Eliminates duplicate color values.
- Makes CSS easier to maintain.
- Keeps related colors synchronized.
- Simplifies theme creation.
- Works well with CSS variables.

---

## Example

```css
.card{
    color:#2e7d32;
    border:2px solid currentColor;
}

button{
    background:currentColor;
}
```

Changing only the `color` property updates both the border and button.

---

## Learning Outcome

After completing this example, you will be able to:

- Understand how `currentColor` works.
- Reuse text colors for other CSS properties.
- Write cleaner and more maintainable CSS.
- Reduce repeated color values in your stylesheets.