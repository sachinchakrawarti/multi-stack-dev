# CSS Best Practices

---

# Write External CSS

✔ Reusable

✔ Clean HTML

✔ Easy Maintenance

---

# Use Meaningful Class Names

❌

```css
.red{}
.box1{}
```

✅

```css
.primary-button{}

.user-card{}
```

---

# Keep CSS DRY

Don't Repeat Yourself

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

# Use CSS Variables

```css
:root{

--primary:#1565c0;

}

.button{

background:var(--primary);

}
```

---

# Responsive Design

```css
@media(max-width:768px){

.container{

width:95%;

}

}
```

---

# Organize Files

```text
css/

base/

layout/

components/

pages/

utilities/
```

---

# Professional Checklist

✅ External CSS

✅ Meaningful Classes

✅ Responsive Design

✅ Reusable Code

✅ Comments

✅ Remove Unused CSS

✅ Consistent Formatting

---

# Remember

> Clean CSS is easier to read,

> easier to maintain,

> and easier to scale.