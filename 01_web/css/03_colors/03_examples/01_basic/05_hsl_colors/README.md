# CSS HSL Colors Example

## Objective

Learn how to use the **HSL (Hue, Saturation, Lightness)** color model in CSS.

---

## Topics Covered

- HSL Color Format
- Hue
- Saturation
- Lightness
- Background Colors

---

## Files

```text
05_hsl_colors/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Observe how different HSL values produce different colors.

---

## HSL Syntax

```css
hsl(hue, saturation, lightness)
```

Example:

```css
background: hsl(210, 80%, 45%);
```

---

## HSL Components

### Hue (H)

Represents the color on the color wheel.

| Degree | Color |
|---------|-------|
| 0° | Red |
| 60° | Yellow |
| 120° | Green |
| 180° | Cyan |
| 240° | Blue |
| 300° | Magenta |
| 360° | Red |

---

### Saturation (S)

Controls the intensity of the color.

- `0%` → Gray
- `100%` → Full color

---

### Lightness (L)

Controls how light or dark the color is.

- `0%` → Black
- `50%` → Normal color
- `100%` → White

---

## Why Use HSL?

HSL is easier to understand and adjust than RGB because you can independently control:

- Hue (Color)
- Saturation (Intensity)
- Lightness (Brightness)

It is commonly used for:

- Themes
- Dark mode
- Color palettes
- UI design
- Dynamic color generation

---

## Learning Outcome

After completing this example, you will be able to:

- Use HSL colors in CSS.
- Understand Hue, Saturation, and Lightness.
- Create different colors by changing HSL values.
- Build flexible and maintainable color schemes.