# How CSS Works

---

## Web Technologies

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Presentation |
| JavaScript | Behavior |

---

# Browser Rendering Process

```text
User Requests Website
        │
        ▼
Download HTML
        │
        ▼
Parse HTML
        │
        ▼
Download CSS
        │
        ▼
Parse CSS
        │
        ▼
Match Selectors
        │
        ▼
Apply Styles
        │
        ▼
Render Web Page
```

---

# Browser Workflow

```text
HTML
 │
 ▼
DOM Tree
 │
 ▼
CSS
 │
 ▼
CSSOM Tree
 │
 ▼
Render Tree
 │
 ▼
Layout
 │
 ▼
Paint
 │
 ▼
Screen
```

---

# Example

HTML

```html
<h1>Hello CSS</h1>
```

CSS

```css
h1{
    color:blue;
    font-size:40px;
}
```

Browser Output

- Blue heading
- 40px font size

---

# Key Points

✅ Browser downloads HTML

✅ Browser downloads CSS

✅ CSS matches HTML elements

✅ Styles are applied

✅ Final webpage is rendered