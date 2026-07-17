# Common CSS Mistakes

---

## Missing Semicolon

❌ Incorrect

```css
h1{
    color: blue
    font-size: 32px;
}
```

✅ Correct

```css
h1{
    color: blue;
    font-size: 32px;
}
```

---

## Missing Units

❌

```css
width:200;
```

✅

```css
width:200px;
```

---

## Using Inline CSS Everywhere

❌

```html
<button style="background:red;">
Buy
</button>
```

✅

```html
<button class="btn">
Buy
</button>
```

```css
.btn{
    background:red;
}
```

---

## Overusing !important

❌

```css
color:red !important;
```

Instead

- Improve specificity
- Organize selectors

---

## Long Selectors

❌

```css
body div.container ul li a span{
}
```

✅

```css
.nav-link{
}
```

---

## Duplicate CSS

❌

```css
.card1{
    margin:20px;
}

.card2{
    margin:20px;
}
```

✅

```css
.card{
    margin:20px;
}
```

---

# Tips

✔ Use External CSS

✔ Follow DRY

✔ Write Meaningful Classes

✔ Test on Multiple Devices