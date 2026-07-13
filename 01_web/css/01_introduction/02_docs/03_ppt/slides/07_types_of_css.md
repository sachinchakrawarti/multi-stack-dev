# Types of CSS

---

# Three Types

1. Inline CSS

2. Internal CSS

3. External CSS

---

# Inline CSS

```html
<h1 style="color:red;">
Hello
</h1>
```

### Advantages

- Quick testing

### Disadvantages

- Hard to maintain

---

# Internal CSS

```html
<head>

<style>

h1{
    color:blue;
}

</style>

</head>
```

Best for

- Small projects

---

# External CSS

style.css

```css
h1{
    color:green;
}
```

HTML

```html
<link rel="stylesheet" href="style.css">
```

---

# Comparison

| Feature | Inline | Internal | External |
|---------|--------|----------|----------|
|Reusable|❌|❌|✅|
|Maintainable|❌|⚠|✅|
|Recommended|❌|⚠|✅|

---

# CSS Priority

```text
Inline CSS
      ▲
Internal CSS
      ▲
External CSS
```

Highest Priority

**Inline CSS**

---

# Recommendation

Always use

## External CSS

for professional projects.