# Common Mistakes with JavaScript Data Types

## Introduction

Understanding JavaScript data types is essential, but many beginners make common mistakes when working with variables, values, type conversion, arrays, objects, and comparisons.

Learning these mistakes will help you write cleaner, more reliable, and bug-free JavaScript code.

---

# 1. Storing Numbers as Strings

One of the most common mistakes is storing numeric values as strings when they are intended for calculations.

Incorrect:

```javascript
const age = "25";

console.log(age + 5);
```

Output

```text
255
```

Correct:

```javascript
const age = 25;

console.log(age + 5);
```

Output

```text
30
```

---

# 2. Using `==` Instead of `===`

The loose equality operator (`==`) performs automatic type coercion.

Incorrect:

```javascript
console.log(10 == "10");
```

Output

```text
true
```

Correct:

```javascript
console.log(10 === "10");
```

Output

```text
false
```

Always prefer `===` unless type coercion is intentionally required.

---

# 3. Confusing `null` and `undefined`

Although they seem similar, they have different meanings.

```javascript
let city;
let address = null;

console.log(city);
console.log(address);
```

Output

```text
undefined
null
```

- `undefined` means a value has not been assigned.
- `null` means an empty value has been assigned intentionally.

---

# 4. Assuming Arrays Have Their Own `typeof`

Many beginners expect:

```javascript
console.log(typeof []);
```

Output

```text
array
```

Actual Output

```text
object
```

Correct way:

```javascript
console.log(Array.isArray([]));
```

Output

```text
true
```

---

# 5. Comparing `NaN`

`NaN` is never equal to itself.

Incorrect:

```javascript
console.log(NaN === NaN);
```

Output

```text
false
```

Correct:

```javascript
console.log(Number.isNaN(NaN));
```

Output

```text
true
```

---

# 6. Forgetting Type Conversion

HTML form values are strings.

Incorrect:

```javascript
const a = "10";
const b = "20";

console.log(a + b);
```

Output

```text
1020
```

Correct:

```javascript
console.log(Number(a) + Number(b));
```

Output

```text
30
```

---

# 7. Relying Too Much on Type Coercion

Automatic type conversion can produce unexpected results.

```javascript
console.log("5" + 2);
```

Output

```text
52
```

Example:

```javascript
console.log("5" - 2);
```

Output

```text
3
```

Prefer explicit conversions for better readability.

---

# 8. Assuming Empty Arrays Are Falsy

Incorrect assumption:

```javascript
if ([]) {
    console.log("Falsy");
}
```

Actual Output

```text
Falsy
```

The code executes because empty arrays are **truthy**.

---

# 9. Assuming Empty Objects Are Falsy

```javascript
if ({}) {
    console.log("Executed");
}
```

Output

```text
Executed
```

Empty objects are also truthy.

---

# 10. Calling `toString()` on `null` or `undefined`

Incorrect:

```javascript
let value = null;

// value.toString();
```

Output

```text
TypeError
```

Correct:

```javascript
console.log(String(value));
```

Output

```text
null
```

---

# 11. Dividing by Zero

Some beginners expect an error.

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

JavaScript returns `Infinity`, not an exception.

---

# 12. Assuming Functions Are Primitive Values

Functions are objects.

```javascript
function greet() {}

console.log(typeof greet);
```

Output

```text
function
```

Functions can be assigned, passed, returned, and have properties.

---

# 13. Comparing Objects or Arrays by Value

Objects and arrays are compared by reference.

Incorrect expectation:

```javascript
const a = [1, 2];
const b = [1, 2];

console.log(a === b);
```

Output

```text
false
```

Although they contain the same values, they are different objects in memory.

---

# 14. Forgetting That Objects Are Mutable

```javascript
const user = {
    name: "Sachin"
};

user.name = "Rahul";

console.log(user);
```

Output

```text
{ name: "Rahul" }
```

`const` prevents reassignment of the variable, not modification of the object's properties.

---

# 15. Using `||` for Default Values

```javascript
const count = 0;

console.log(count || 10);
```

Output

```text
10
```

If `0` is a valid value, use the nullish coalescing operator.

```javascript
console.log(count ?? 10);
```

Output

```text
0
```

---

# 16. Ignoring Input Validation

Never assume user input is valid.

Incorrect:

```javascript
const age = Number("Hello");

console.log(age + 10);
```

Output

```text
NaN
```

Correct:

```javascript
if (!Number.isNaN(age)) {
    console.log(age + 10);
}
```

---

# Summary of Common Mistakes

| Mistake | Recommended Practice |
|---------|----------------------|
| Using `==` | Use `===` |
| Storing numbers as strings | Store numbers as `Number` values |
| Using `typeof` for arrays | Use `Array.isArray()` |
| Comparing `NaN` directly | Use `Number.isNaN()` |
| Relying on coercion | Perform explicit conversion |
| Confusing `null` and `undefined` | Understand their meanings |
| Comparing arrays or objects by value | Remember they are reference types |
| Assuming empty arrays are falsy | Empty arrays are truthy |
| Assuming empty objects are falsy | Empty objects are truthy |
| Forgetting to validate input | Validate before processing |

---

# Best Practices

- Use meaningful variable names.
- Prefer `const` whenever possible.
- Use strict equality (`===`).
- Convert values explicitly.
- Validate user input.
- Use `Array.isArray()` for arrays.
- Handle `NaN` using `Number.isNaN()`.
- Write readable and predictable code.

---

# Interview Questions

1. Why is `===` preferred over `==`?
2. What is the difference between `null` and `undefined`?
3. Why does `typeof []` return `"object"`?
4. Why is `NaN === NaN` false?
5. How do you correctly check for `NaN`?
6. Why are arrays compared by reference?
7. Why does `10 / 0` return `Infinity`?
8. What mistake can occur when using the `+` operator with strings?
9. Why should you validate user input?
10. What are the most common mistakes beginners make with JavaScript data types?

---

# Key Points

- Most bugs come from incorrect assumptions about data types.
- Prefer explicit type conversion over automatic coercion.
- Use strict equality (`===`) to avoid unexpected results.
- Understand the difference between primitive and reference data types.
- Validate data before performing calculations.
- Following best practices makes JavaScript code more reliable and easier to maintain.

---

# Next Topic

# `Interview Questions`