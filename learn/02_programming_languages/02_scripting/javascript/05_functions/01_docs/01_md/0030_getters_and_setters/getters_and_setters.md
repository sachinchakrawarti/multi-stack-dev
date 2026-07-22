# Getters and Setters

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Getters and Setters?](#what-are-getters-and-setters)
- [Why Do We Need Getters and Setters?](#why-do-we-need-getters-and-setters)
- [How Getters and Setters Work](#how-getters-and-setters-work)
- [Syntax](#syntax)
- [Getter Methods](#getter-methods)
- [Setter Methods](#setter-methods)
- [Getters and Setters Together](#getters-and-setters-together)
- [Examples](#examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Limitations](#limitations)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Getters and Setters.
- Create computed properties using getters.
- Control property updates using setters.
- Validate data before assigning values.
- Apply Getters and Setters in real-world applications.

---

# Introduction

Imagine an ATM.

When you check your account balance, the ATM **shows** the balance.

When you deposit money, the ATM **updates** the balance only after validating your transaction.

Similarly, JavaScript allows objects to control how properties are **read** and **updated** using **Getters** and **Setters**.

Instead of directly accessing a property, you can define special methods that automatically run whenever a property is read or written.

---

# What are Getters and Setters?

A **Getter** is a special method that runs when a property is **read**.

A **Setter** is a special method that runs when a property is **assigned a value**.

They allow controlled access to object properties.

Example

```javascript
const person = {

    firstName: "Sachin",

    lastName: "Chakrawarti",

    get fullName() {

        return `${this.firstName} ${this.lastName}`;

    }

};

console.log(person.fullName);
```

Output

```
Sachin Chakrawarti
```

Notice that `fullName` is accessed like a property, not as a function.

---

# Why Do We Need Getters and Setters?

They provide many benefits:

- Data validation.
- Computed properties.
- Data hiding.
- Encapsulation.
- Controlled property access.
- Cleaner APIs.

Instead of exposing internal data directly, you control how it is accessed and modified.

---

# How Getters and Setters Work

```text
Object Created
        │
        ▼
Property Access
        │
        ▼
Getter Executes
        │
        ▼
Returns Value

-------------------------

Property Assignment
        │
        ▼
Setter Executes
        │
        ▼
Validate Data
        │
        ▼
Store Value
```

---

# Syntax

```javascript
const object = {

    get propertyName() {

        return value;

    },

    set propertyName(value) {

        // update value

    }

};
```

---

# Getter Methods

A Getter returns a value whenever a property is accessed.

Example

```javascript
const rectangle = {

    width: 10,

    height: 20,

    get area() {

        return this.width * this.height;

    }

};

console.log(rectangle.area);
```

Output

```
200
```

The getter calculates the area every time it is accessed.

---

# Setter Methods

A Setter runs whenever a property receives a new value.

Example

```javascript
const user = {

    _age: 20,

    set age(value) {

        if (value > 0) {

            this._age = value;

        }

    }

};

user.age = 25;

console.log(user._age);
```

Output

```
25
```

---

# Getters and Setters Together

Example

```javascript
const person = {

    firstName: "Sachin",

    lastName: "Chakrawarti",

    get fullName() {

        return `${this.firstName} ${this.lastName}`;

    },

    set fullName(value) {

        const parts = value.split(" ");

        this.firstName = parts[0];

        this.lastName = parts[1];

    }

};

console.log(person.fullName);

person.fullName = "Rahul Sharma";

console.log(person.fullName);
```

Output

```
Sachin Chakrawarti
Rahul Sharma
```

---

# Examples

## Example 1 — Temperature Converter

```javascript
const temperature = {

    celsius: 25,

    get fahrenheit() {

        return (this.celsius * 9) / 5 + 32;

    }

};

console.log(temperature.fahrenheit);
```

Output

```
77
```

---

## Example 2 — Password Validation

```javascript
const account = {

    _password: "",

    set password(value) {

        if (value.length >= 8) {

            this._password = value;

        }

    }

};

account.password = "JavaScript123";

console.log(account._password);
```

---

## Example 3 — Student Full Name

```javascript
const student = {

    firstName: "John",

    lastName: "Doe",

    get fullName() {

        return `${this.firstName} ${this.lastName}`;

    }

};

console.log(student.fullName);
```

---

## Example 4 — Product Discount

```javascript
const product = {

    price: 1000,

    discount: 20,

    get finalPrice() {

        return this.price - (this.price * this.discount) / 100;

    }

};

console.log(product.finalPrice);
```

Output

```
800
```

---

# Real-World Use Cases

Getters and Setters are commonly used in:

- Form validation.
- User authentication.
- Banking applications.
- Shopping carts.
- Inventory systems.
- Data transformation.
- React state management.
- API models.
- Business logic.

Example

```javascript
user.password = "SecurePassword123";
```

The setter validates the password before storing it.

---

# Advantages

Getters and Setters provide many benefits.

- Encapsulation.
- Validation.
- Computed properties.
- Cleaner object APIs.
- Improved maintainability.
- Better security.

---

# Limitations

They also have some limitations.

- Can make debugging more difficult.
- Too much hidden logic may confuse developers.
- Overusing them can reduce readability.

---

# Common Mistakes

## Calling a Getter Like a Function

❌ Incorrect

```javascript
console.log(person.fullName());
```

---

✅ Correct

```javascript
console.log(person.fullName);
```

---

## Recursive Setter

❌ Incorrect

```javascript
set age(value) {

    this.age = value;

}
```

This causes infinite recursion.

---

✅ Correct

```javascript
set age(value) {

    this._age = value;

}
```

---

## Forgetting Validation

Always validate incoming data when necessary.

Example

```javascript
set age(value) {

    if (value >= 0) {

        this._age = value;

    }

}
```

---

# Best Practices

- Use getters for computed values.
- Use setters for validation.
- Avoid complex business logic inside getters.
- Prefix internal variables with `_` when appropriate.
- Keep getter and setter names meaningful.
- Use them only when controlled access is required.

---

# Summary

In this lesson, you learned:

- What Getters and Setters are.
- How they work.
- Creating computed properties.
- Validating values.
- Common mistakes.
- Best practices.
- Real-world applications.

Getters and Setters help create cleaner, safer, and more maintainable JavaScript objects by controlling how data is accessed and modified.

---

# Interview Questions

1. What is a Getter?
2. What is a Setter?
3. Why are Getters and Setters useful?
4. What is the difference between a method and a Getter?
5. Why are Getters accessed without parentheses?
6. Why should setters validate data?
7. What happens if a Setter assigns to the same property it manages?

---

# Practice Exercise

1. Create a `Rectangle` object with an `area` getter.
2. Build a `Student` object with a `fullName` getter.
3. Create a `BankAccount` object with a validated `balance` setter.
4. Build a `Temperature` object with Celsius and Fahrenheit conversion.
5. Create a `Product` object with a computed `finalPrice` getter.

---

# Key Takeaway

> **Getters and Setters are special object methods that control how properties are read and updated. Getters compute or retrieve values, while Setters validate and modify data, making JavaScript objects more secure, maintainable, and expressive.**

---

# Next Lesson

<h2>
➡️ <a href="../0031_function_hoisting/function_hoisting.md" style="color:#1E90FF; text-decoration:none;">
<strong>Function Hoisting</strong>
</a>
</h2>