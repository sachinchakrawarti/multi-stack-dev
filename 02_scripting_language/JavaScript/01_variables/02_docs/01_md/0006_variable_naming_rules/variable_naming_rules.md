# Variable Naming Rules in JavaScript

## Introduction

Choosing good variable names is an important part of writing clean and maintainable JavaScript code. A meaningful variable name makes your code easier to read, understand, debug, and maintain.

JavaScript has specific rules for naming variables, along with widely accepted naming conventions that professional developers follow.

---

# What Is a Variable Name?

A **variable name** (also called an **identifier**) is the name used to identify a variable.

Example:

```javascript
let age = 22;
```

In this example:

- Keyword → `let`
- Variable Name → `age`
- Value → `22`

---

# JavaScript Naming Rules

## Rule 1: Must Start with a Letter, Underscore (`_`), or Dollar Sign (`$`)

Valid:

```javascript
let name;

let _score;

let $price;
```

Invalid:

```javascript
let 1name;

let 9age;
```

Variable names cannot begin with a number.

---

## Rule 2: Numbers Can Appear After the First Character

Valid:

```javascript
let student1;

let user2026;

let version2;
```

Invalid:

```javascript
let 2026Year;
```

---

## Rule 3: No Spaces

Incorrect:

```javascript
let first name = "Sachin";
```

Correct:

```javascript
let firstName = "Sachin";
```

---

## Rule 4: No Special Characters

Invalid:

```javascript
let user-name;

let email@address;

let total#marks;
```

Valid:

```javascript
let userName;

let emailAddress;

let totalMarks;
```

Only `_` and `$` are allowed as special characters.

---

## Rule 5: Variable Names Are Case-Sensitive

These are different variables:

```javascript
let age = 20;

let Age = 25;

let AGE = 30;
```

JavaScript treats each as a separate identifier.

---

## Rule 6: Reserved Keywords Cannot Be Used

Incorrect:

```javascript
let class = "A";

let return = 5;

let function = "test";
```

Correct:

```javascript
let className = "A";

let returnValue = 5;

let functionName = "test";
```

---

# Valid Variable Names

```javascript
let name;

let firstName;

let studentAge;

let totalMarks;

let user123;

let _counter;

let $price;

let employeeSalary;

const MAX_USERS = 100;
```

---

# Invalid Variable Names

```javascript
let 123name;

let first name;

let my-name;

let user@email;

let total#marks;

let class;

let return;
```

---

# Good Naming Examples

Instead of:

```javascript
let a;

let b;

let x;
```

Use:

```javascript
let studentName;

let totalMarks;

let accountBalance;
```

Descriptive names make your code much easier to understand.

---

# camelCase Convention

The standard naming convention for JavaScript variables is **camelCase**.

Examples:

```javascript
let firstName;

let lastName;

let totalMarks;

let userAge;

let accountBalance;
```

The first word starts with a lowercase letter, and each subsequent word starts with an uppercase letter.

---

# PascalCase

PascalCase capitalizes the first letter of every word.

Example:

```javascript
StudentProfile

EmployeeDetails
```

PascalCase is commonly used for:

- Classes
- Constructor functions
- React components

It is **not** the standard for regular variable names.

---

# snake_case

Uses underscores between words.

Example:

```javascript
student_name

total_marks
```

While valid in JavaScript, snake_case is more common in languages like Python.

---

# UPPER_SNAKE_CASE

Uppercase letters with underscores are commonly used for constants.

Example:

```javascript
const MAX_USERS = 100;

const API_URL = "https://example.com";

const PI = 3.14159;
```

---

# Naming Based on Purpose

## Boolean Variables

Use names that clearly indicate a true/false value.

```javascript
let isLoggedIn;

let hasPermission;

let canEdit;

let isStudent;
```

---

## Arrays

Use plural names.

```javascript
let students;

let books;

let colors;

let products;
```

---

## Objects

Use singular names.

```javascript
let student;

let employee;

let product;
```

---

## Functions

Use action words.

```javascript
calculateTotal();

printInvoice();

sendEmail();

loginUser();
```

---

# Memory Representation

```javascript
let studentName = "Sachin";

let age = 22;

let isStudent = true;
```

Memory

```text
studentName → "Sachin"

age         → 22

isStudent   → true
```

---

# Common Mistakes

## Using Single-Letter Names

Poor:

```javascript
let x = 100;
```

Better:

```javascript
let totalMarks = 100;
```

---

## Using Abbreviations

Poor:

```javascript
let stdNm;
```

Better:

```javascript
let studentName;
```

---

## Using Confusing Names

Poor:

```javascript
let data;

let info;

let value;
```

Better:

```javascript
let userEmail;

let totalPrice;

let currentTemperature;
```

---

## Mixing Naming Styles

Avoid:

```javascript
let student_name;

let StudentAge;

let totalMarks;
```

Use a consistent style:

```javascript
let studentName;

let studentAge;

let totalMarks;
```

---

# Best Practices

- Use meaningful names.
- Follow camelCase for variables.
- Use PascalCase for classes.
- Use UPPER_SNAKE_CASE for constants (optional).
- Keep names concise but descriptive.
- Avoid unnecessary abbreviations.
- Avoid single-letter variable names except for simple loop counters (`i`, `j`, `k`).

---

# Interview Questions

### 1. What characters can a variable name start with?

A letter, an underscore (`_`), or a dollar sign (`$`).

---

### 2. Can a variable name start with a number?

No.

---

### 3. Are variable names case-sensitive?

Yes.

`age` and `Age` are different variables.

---

### 4. Can reserved keywords be used as variable names?

No.

---

### 5. What is the recommended naming convention for JavaScript variables?

camelCase.

---

### 6. Which naming convention is commonly used for constants?

UPPER_SNAKE_CASE (optional, based on project style).

---

# Key Points

- Variable names are called identifiers.
- Names must start with a letter, `_`, or `$`.
- Numbers can appear after the first character.
- Spaces and most special characters are not allowed.
- Variable names are case-sensitive.
- Reserved keywords cannot be used.
- Use camelCase for variables.
- Choose meaningful and descriptive names.

---

# Summary

Good variable names make JavaScript code easier to read, understand, and maintain. By following JavaScript's naming rules and using consistent naming conventions such as camelCase, you can write professional-quality code that is easier for both you and other developers to work with. Meaningful names also reduce bugs and improve the overall quality of your programs.