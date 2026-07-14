# CSS Color Contrast Example

## Objective

Learn why **color contrast** is important for readability and accessibility in web design.

---

## Topics Covered

- Color Contrast
- Accessibility
- WCAG Guidelines
- Readable Text
- Good vs Poor Contrast

---

## Files

```text
05_color_contrast/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Compare the examples of good, poor, and excellent color contrast.

---

## What is Color Contrast?

Color contrast is the difference in brightness between foreground (text) and background colors.

Good contrast makes content easier to read for all users.

---

## Good Contrast Example

```css
background:#ffffff;
color:#222222;
```

✔ Easy to read

---

## Poor Contrast Example

```css
background:#ffffff;
color:#dddddd;
```

✘ Difficult to read

---

## Excellent Contrast Example

```css
background:#263238;
color:#ffffff;
```

✔ High readability

---

## WCAG Recommendations

For accessibility, the recommended minimum contrast ratio is:

| Text Type | Minimum Contrast Ratio |
|-----------|------------------------|
| Normal Text | **4.5 : 1** |
| Large Text | **3 : 1** |

Following these guidelines helps make websites accessible to more users.

---

## Best Practices

- Use dark text on light backgrounds or light text on dark backgrounds.
- Avoid low-contrast color combinations.
- Test your designs with accessibility tools.
- Don't rely only on color to convey information.
- Maintain consistent contrast throughout your website.

---

## Useful Accessibility Tools

- Lighthouse
- WAVE
- axe DevTools
- Chrome DevTools
- WebAIM Contrast Checker

---

## Learning Outcome

After completing this example, you will be able to:

- Understand what color contrast is.
- Identify good and poor contrast combinations.
- Build more readable and accessible web pages.
- Follow basic WCAG accessibility recommendations.