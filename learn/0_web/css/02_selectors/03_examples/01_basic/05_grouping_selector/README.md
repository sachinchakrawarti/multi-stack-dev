# Grouping Selector Example

## Objective

Learn how to use the **Grouping Selector** in CSS.

A Grouping Selector allows multiple selectors to share the same CSS rules by separating them with commas (`,`). This reduces duplicate code and makes stylesheets cleaner and easier to maintain.

Example:

```css
h1,
h2,
p{
    color: #1565c0;
}
```

The above CSS applies the same text color to all `<h1>`, `<h2>`, and `<p>` elements.

---

## Files

- `index.html` → HTML structure
- `style.css` → CSS styles

---

## Selectors Used

- `h1, h2`
- `p, li`
- `button, a`
- `header, footer`

---

## Learning Outcomes

After completing this example, you will understand:

- What a Grouping Selector is
- How to group multiple selectors
- How grouping reduces duplicate CSS
- Best practices for writing cleaner stylesheets