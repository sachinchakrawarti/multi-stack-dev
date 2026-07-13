# Challenge 04: Build a Modern Product Card

## Difficulty

🟡 Intermediate

---

# Objective

In this challenge, you will build a **modern Product Card** similar to those used on Amazon, Flipkart, Apple, and other e-commerce websites.

This challenge helps you practice real-world CSS by combining multiple selectors and layout techniques.

---

# Concepts Covered

- Universal Selector
- Element Selectors
- Class Selectors
- Descendant Selectors
- Pseudo-class Selectors (`:hover`)
- CSS Reset
- Flexbox
- Border Radius
- Box Shadow
- CSS Transitions

---

# Problem Statement

Create a product card similar to the layout below.

```text
+------------------------------------------------+
|                                                |
|              Product Image                     |
|                                                |
+------------------------------------------------+
| Electronics                                    |
|                                                |
| Wireless Bluetooth Headphones                  |
|                                                |
| Premium noise cancellation with 40 hours       |
| battery backup and crystal-clear sound.        |
|                                                |
| ₹4,999                           ⭐ 4.8         |
|                                                |
|          [ Buy Now ]                           |
+------------------------------------------------+
```

---

# Requirements

## HTML Structure

Your product card should include:

- Product Image
- Product Category
- Product Title
- Product Description
- Product Price
- Product Rating
- Buy Now Button

Suggested HTML structure:

```html
<div class="product-card">

    <img src="product.jpg" alt="Product">

    <div class="product-content">

        <span class="category">
            Electronics
        </span>

        <h2>
            Wireless Headphones
        </h2>

        <p>
            Product description...
        </p>

        <div class="price-rating">

            <span class="price">
                ₹4,999
            </span>

            <span class="rating">
                ⭐ 4.8
            </span>

        </div>

        <button>
            Buy Now
        </button>

    </div>

</div>
```

---

# CSS Requirements

Apply the following styles.

## Universal Selector

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

---

## Product Card

- White background
- Rounded corners
- Box shadow
- Fixed width (around 350px)
- Hidden overflow
- Smooth hover animation

---

## Product Image

- Full width
- Responsive
- Display block

---

## Product Category

- Blue badge
- Rounded corners
- Small font
- Bold text

---

## Product Title

- Large font
- Dark color
- Bold

---

## Description

- Gray text
- Comfortable line spacing

---

## Price & Rating

Display them on the same row using Flexbox.

Example:

```text
₹4,999                ⭐ 4.8
```

---

## Buy Button

- Full width
- Blue background
- White text
- Rounded corners
- Hover effect

---

## Hover Animation

When hovering over the card:

- Move slightly upward
- Increase shadow
- Smooth transition

Example:

```css
.product-card:hover{
    transform:translateY(-8px);
}
```

---

# CSS Selectors to Use

Use all of the following selectors.

```css
*
body
.container
.product-card
.product-card:hover
.product-card img
.product-content
.category
.product-content h2
.product-content p
.price-rating
.price
.rating
button
button:hover
```

---

# Expected Output

```text
+-------------------------------------------+
|               Product Image               |
+-------------------------------------------+
| Electronics                               |
|                                           |
| Wireless Bluetooth Headphones             |
|                                           |
| Premium sound with ANC...                 |
|                                           |
| ₹4,999                 ⭐ 4.8              |
|                                           |
|             Buy Now                       |
+-------------------------------------------+
```

---

# Bonus Challenge 1

Add a **SALE** badge.

Example:

```text
SALE
```

Display it at the top-right corner of the product image.

---

# Bonus Challenge 2

Add an **Add to Wishlist ❤️** icon.

---

# Bonus Challenge 3

Display the old price with a strike-through.

Example:

```text
₹6,999   ₹4,999
```

---

# Bonus Challenge 4

Add a discount percentage.

Example:

```text
29% OFF
```

---

# Bonus Challenge 5

Create **three product cards** using Flexbox.

Example:

```text
+---------+   +---------+   +---------+
| Product |   | Product |   | Product |
+---------+   +---------+   +---------+
```

---

# Learning Outcomes

After completing this challenge, you should be able to:

- Build reusable product cards
- Use descendant selectors
- Apply hover effects
- Create Flexbox layouts
- Design modern UI components
- Build responsive cards
- Write clean and maintainable CSS

---

# Challenge Checklist

- [ ] CSS Reset applied
- [ ] Product image added
- [ ] Category badge created
- [ ] Title styled
- [ ] Description styled
- [ ] Price displayed
- [ ] Rating displayed
- [ ] Buy button created
- [ ] Hover animation added
- [ ] Box shadow used
- [ ] Rounded corners added
- [ ] Responsive layout (Bonus)

---

# Estimated Time

**25–35 Minutes**

---

# Next Challenge

➡ **Challenge 05: Build a Complete Mini Website**