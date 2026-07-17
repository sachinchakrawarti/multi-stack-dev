# CSS Opacity Example

## Objective

Learn how to use the **opacity** property to control the transparency of an entire HTML element.

---

## Topics Covered

- Opacity Property
- Transparency
- Element Visibility
- Opacity Values

---

## Files

```text
01_opacity/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Observe how different `opacity` values affect the appearance of each box.

---

## Syntax

```css
opacity: value;
```

Example:

```css
opacity: 0.5;
```

---

## Opacity Values

| Value | Effect |
|--------|--------|
| `1` | Fully visible |
| `0.75` | Slightly transparent |
| `0.5` | 50% transparent |
| `0.25` | Mostly transparent |
| `0` | Completely invisible |

---

## Important Note

The `opacity` property affects the **entire element**, including:

- Text
- Images
- Borders
- Background
- Child elements

Example:

```css
.card{
    opacity:0.5;
}
```

Everything inside `.card` becomes semi-transparent.

---

## Opacity vs RGBA/HSLA

### Opacity

```css
opacity:0.5;
```

Makes the entire element transparent.

### RGBA

```css
background:rgba(21,101,192,0.5);
```

Only the background color is transparent.

### HSLA

```css
background:hsla(210,80%,45%,0.5);
```

Only the background color is transparent.

---

## Common Use Cases

The `opacity` property is commonly used for:

- Hover effects
- Disabled buttons
- Image overlays
- Loading states
- UI animations
- Fade effects

---

## Learning Outcome

After completing this example, you will be able to:

- Use the `opacity` property in CSS.
- Control the transparency of HTML elements.
- Understand the difference between `opacity` and RGBA/HSLA transparency.
- Apply opacity to create modern visual effects.