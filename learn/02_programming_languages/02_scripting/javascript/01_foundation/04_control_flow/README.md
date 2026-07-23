# JavaScript Control Flow

## Overview

Control Flow determines the order in which JavaScript statements are executed.

By default, JavaScript executes code from top to bottom. Control flow allows programs to make decisions, repeat tasks, and handle different situations.

Control Flow helps us build programs that can:

- Make decisions
- Execute code conditionally
- Repeat tasks
- Handle errors
- Control program execution

---

# Module Structure

```text
04_control_flow/

├── 01_docs/
│   ├── 01_md/
│   └── 02_pdf/
│
├── 02_code/
│
├── 03_notes/
│
├── 04_ppt/
│
├── 05_assessments/
│
└── assets/
```

---

# Learning Objectives

After completing this module, you will understand:

- What control flow means.
- How JavaScript executes statements.
- Conditional statements.
- Looping statements.
- Error handling.
- Advanced control flow concepts.
- Real-world usage of control flow.

---

# What is Control Flow?

Normally JavaScript executes code sequentially.

Example:

```javascript
console.log("Start");

console.log("Middle");

console.log("End");
```

Execution:

```text
Start
 ↓
Middle
 ↓
End
```

Control flow allows us to change this execution order.

---

# Topics Covered

---

# 01. Control Flow Fundamentals

| Lesson | Topic |
|---|---|
|0001|What Is Control Flow|
|0002|Why Use Control Flow|
|0003|Control Flow Overview|

---

# 02. Conditional Statements

Conditional statements execute code based on conditions.

Topics:

- if statement
- if else statement
- else if ladder
- nested if
- switch statement

Example:

```javascript
let age = 18;

if(age >= 18){

    console.log("Allowed");

}
```

---

# 03. If Statement

Used to execute code when a condition is true.

Syntax:

```javascript
if(condition){

    // code

}
```

Example:

```javascript
let temperature = 35;

if(temperature > 30){

    console.log("Hot");

}
```

---

# 04. If Else Statement

Used when there are two possible outcomes.

Example:

```javascript
let marks = 40;

if(marks >= 50){

    console.log("Pass");

}
else{

    console.log("Fail");

}
```

---

# 05. Else If Ladder

Used when multiple conditions exist.

Example:

```javascript
let score = 85;

if(score >= 90){

    console.log("A");

}
else if(score >= 70){

    console.log("B");

}
else{

    console.log("C");

}
```

---

# 06. Nested If

An if statement inside another if statement.

Example:

```javascript
let username = "admin";

let password = "1234";


if(username){

    if(password){

        console.log("Login Success");

    }

}
```

---

# 07. Switch Statement

Used for multiple fixed choices.

Example:

```javascript
let day = 2;


switch(day){

case 1:
console.log("Monday");
break;


case 2:
console.log("Tuesday");
break;

}
```

---

# 08. Ternary Operator

Short form of if-else.

Syntax:

```javascript
condition ? trueValue : falseValue;
```

Example:

```javascript
let age = 20;

let result = age >= 18 
? "Adult"
: "Minor";
```

---

# 09. Truthy and Falsy Values

JavaScript converts values into boolean form.

Falsy values:

```javascript
false
0
""
null
undefined
NaN
```

Example:

```javascript
if("Hello"){

console.log("Executed");

}
```

---

# 10. Loops

Loops repeat code multiple times.

Types:

- for loop
- while loop
- do while loop
- for in loop
- for of loop

---

# 11. For Loop

Used when the number of repetitions is known.

Example:

```javascript
for(let i=1;i<=5;i++){

console.log(i);

}
```

Output:

```
1
2
3
4
5
```

---

# 12. While Loop

Runs while a condition is true.

Example:

```javascript
let count = 1;


while(count <= 5){

console.log(count);

count++;

}
```

---

# 13. Do While Loop

Runs at least once before checking the condition.

Example:

```javascript
let number = 1;


do{

console.log(number);

number++;

}
while(number <= 5);
```

---

# 14. For In Loop

Used to iterate object properties.

Example:

```javascript
const user={
name:"John",
age:25
};


for(let key in user){

console.log(key);

}
```

---

# 15. For Of Loop

Used for iterable values.

Example:

```javascript
let colors=[
"red",
"blue",
"green"
];


for(let color of colors){

console.log(color);

}
```

---

# 16. Loop Control Statements

## Break

Stops the loop.

```javascript
break;
```

---

## Continue

Skips current iteration.

```javascript
continue;
```

---

# 17. Exception Handling

Used to handle runtime errors.

Topics:

- try
- catch
- finally
- throw

Example:

```javascript
try{

console.log(value);

}
catch(error){

console.log(error);

}
```

---

# 18. Try Catch

Handles errors safely.

Example:

```javascript
try{

let result = 10/0;

}

catch(error){

console.log(error);

}
```

---

# 19. Throw Statement

Creates custom errors.

Example:

```javascript
throw new Error("Invalid Input");
```

---

# 20. Finally Block

Always executes.

Example:

```javascript
try{

console.log("Try");

}
finally{

console.log("Always Runs");

}
```

---

# Code Examples

All practical examples are available:

```
02_code/
```

Format:

```
0001_topic_name/

└── topic_name.nnb
```

---

# Assessments

Practice and testing:

```
05_assessments/
```

Includes:

- MCQ
- True/False
- Fill in the blanks
- Find the Error
- Predict Output
- Complete Code
- Debugging Challenge
- Mini Projects
- Mock Tests

---

# Real-World Applications

Control flow is used in:

- Login systems
- Payment processing
- User permissions
- Form validation
- Games
- Search filters
- Shopping carts
- API responses
- React applications
- Backend services

---

# Recommended Learning Order

Follow this sequence:

```
01 What Is Control Flow
          ↓
02 Conditional Statements
          ↓
03 If / Else
          ↓
04 Switch
          ↓
05 Loops
          ↓
06 Break & Continue
          ↓
07 Error Handling
          ↓
08 Practice Projects
```

---

# Next Module

<h2>
➡️ <a href="../05_functions/README.md" style="color:#1E90FF;text-decoration:none;">
<strong>05 Functions</strong>
</a>
</h2>