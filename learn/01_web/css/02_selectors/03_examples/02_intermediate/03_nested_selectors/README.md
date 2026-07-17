# Nested Selectors Example

## Objective

Learn how **Nested Selectors (Descendant Selectors)** work in CSS.

A nested selector targets elements **inside another element**. It allows you to style child elements based on their parent, making your CSS more organized and context-specific.

Example:

```css
.card h2{
    color: royalblue;
}

.navbar a{
    text-decoration: none;
}
```

In the examples above:

- Only `<h2>` elements inside `.card` are styled.
- Only `<a>` elements inside `.navbar` are styled.

---

## Files

- `index.html` → HTML structure
- `style.css` → CSS styles

---

## Topics Covered

- Descendant Selectors
- Parent-Child Relationships
- Nested Selectors
- CSS Scope
- Clean CSS Structure

---

## Learning Outcomes

After completing this example, you will understand:

- What nested selectors are
- How descendant selectors work
- How to style elements within specific sections
- Why nested selectors improve maintainability