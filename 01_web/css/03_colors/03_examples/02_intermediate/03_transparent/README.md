# CSS `transparent` Keyword Example

## Objective

Learn how to use the **`transparent`** keyword in CSS to create fully transparent colors.

---

## Topics Covered

- `transparent`
- Transparent Background
- Transparent Border
- Transparent Button
- Hover Effect

---

## Files

```text
03_transparent/
│
├── index.html
├── style.css
└── README.md
```

---

## How to Run

1. Open `index.html` in your web browser.
2. Observe how the `transparent` keyword affects backgrounds and borders.

---

## Syntax

```css
background: transparent;
```

or

```css
border-color: transparent;
```

---

## What is `transparent`?

The `transparent` keyword represents a **fully transparent color**.

It is equivalent to:

```css
rgba(0,0,0,0)
```

---

## Common Uses

The `transparent` keyword is commonly used for:

- Transparent backgrounds
- Transparent borders
- Buttons
- Hover effects
- Form controls
- Navigation menus

---

## Example

```css
button{
    background:transparent;
    border:2px solid #1565c0;
    color:#1565c0;
}
```

---

## `transparent` vs `opacity`

### `transparent`

```css
background:transparent;
```

Only the specified color becomes transparent.

---

### `opacity`

```css
opacity:0.5;
```

The entire element becomes transparent, including:

- Text
- Images
- Borders
- Child elements

---

## Advantages

- Simple to use
- Improves UI design
- Useful for hover effects
- Works well with borders
- Keeps other element properties unaffected

---

## Learning Outcome

After completing this example, you will be able to:

- Use the `transparent` keyword in CSS.
- Create transparent backgrounds and borders.
- Design outline-style buttons.
- Understand the difference between `transparent` and `opacity`.
- Apply transparent colors in modern web interfaces.