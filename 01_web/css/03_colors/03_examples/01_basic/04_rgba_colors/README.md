# CSS RGBA Colors Example

## Objective

Learn how to use **RGBA (Red, Green, Blue, Alpha)** colors in CSS to create transparent color effects.

---

## Topics Covered

- RGBA Color Format
- Alpha (Transparency)
- Background Colors
- Opacity vs RGBA

---

## Files

```text
04_rgba_colors/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in any web browser.
2. Observe how changing the **Alpha** value affects transparency.

---

## RGBA Syntax

```css
rgba(red, green, blue, alpha)
```

Example:

```css
background: rgba(21, 101, 192, 0.5);
```

Where:

- **Red:** `21`
- **Green:** `101`
- **Blue:** `192`
- **Alpha:** `0.5`

---

## Alpha Value Range

| Alpha Value | Transparency |
|--------------|--------------|
| `1` | Fully visible |
| `0.75` | Slightly transparent |
| `0.5` | 50% transparent |
| `0.25` | Mostly transparent |
| `0` | Completely transparent |

---

## Why Use RGBA?

RGBA is useful when you want:

- Transparent backgrounds
- Overlay effects
- Hover effects
- Cards with transparency
- Modern UI designs

---

## RGBA vs Opacity

### RGBA

```css
background: rgba(0,0,255,0.5);
```

Only the **background color** becomes transparent.

---

### Opacity

```css
opacity:0.5;
```

The **entire element** becomes transparent, including:

- Text
- Images
- Borders
- Child elements

---

## Learning Outcome

After completing this example, you will be able to:

- Use RGBA colors in CSS.
- Control transparency with the Alpha value.
- Understand the difference between RGBA and `opacity`.
- Create modern UI effects using transparent colors.