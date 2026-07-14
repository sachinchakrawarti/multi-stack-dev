# CSS Color Palette Example

## Objective

Learn how to organize and display a **color palette** for consistent web design.

---

## Topics Covered

- Color Palette
- Brand Colors
- Semantic Colors
- UI Consistency
- CSS Styling

---

## Files

```text
04_color_palette/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Explore the sample color palette displayed in a responsive grid.

---

## What is a Color Palette?

A **color palette** is a predefined collection of colors used consistently throughout a website or application.

Using a palette helps maintain:

- Visual consistency
- Brand identity
- Better user experience
- Easier maintenance

---

## Example Palette

| Purpose | Color |
|---------|-------|
| Primary | `#1565C0` |
| Secondary | `#0D47A1` |
| Success | `#2E7D32` |
| Warning | `#F9A825` |
| Danger | `#D32F2F` |
| Neutral | `#455A64` |

---

## Best Practices

- Limit the number of primary colors.
- Use semantic names like `primary`, `success`, and `danger`.
- Ensure good contrast for readability.
- Keep colors consistent across the project.
- Store colors in CSS variables for easy reuse.

Example:

```css
:root{
    --primary:#1565C0;
    --success:#2E7D32;
    --danger:#D32F2F;
}
```

---

## Learning Outcome

After completing this example, you will be able to:

- Create a reusable color palette.
- Organize colors by purpose.
- Build consistent user interfaces.
- Prepare a foundation for larger design systems using CSS variables.