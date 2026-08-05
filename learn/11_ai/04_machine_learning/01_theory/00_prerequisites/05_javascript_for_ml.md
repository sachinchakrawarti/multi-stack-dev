# JavaScript for Machine Learning

> **Goal:** Learn the JavaScript concepts required for Machine Learning, AI applications, and browser-based model deployment.

---

# Why JavaScript for Machine Learning?

JavaScript enables you to:

- Build AI-powered web applications
- Run ML models in the browser
- Develop real-time AI interfaces
- Create interactive data visualizations
- Deploy AI without requiring Python on the client

---

# JavaScript Runtime

JavaScript can run in:

- Web Browsers
- Node.js
- Deno
- Bun

---

# Variables

Declare variables using modern syntax.

```javascript
const name = "Alice";
let age = 25;
let learningRate = 0.01;
```

> Prefer `const` unless the value needs to change.

---

# Data Types

| Type | Example |
|------|---------|
| Number | 42 |
| String | `"Hello"` |
| Boolean | `true` |
| Null | `null` |
| Undefined | `undefined` |
| Object | `{}` |
| Array | `[]` |
| Symbol | `Symbol()` |
| BigInt | `100n` |

---

# Operators

Arithmetic

```javascript
+
-
*
/
%
**
```

Comparison

```javascript
==
===
!=
!==
<
>
<=
>=
```

Logical

```javascript
&&
||
!
```

---

# Strings

```javascript
const name = "Alice";

name.length;
name.toUpperCase();
name.toLowerCase();
name.trim();
```

Template Literals

```javascript
const age = 25;

console.log(`${name} is ${age} years old.`);
```

---

# Arrays

```javascript
const numbers = [1, 2, 3, 4];
```

Common Methods

```javascript
push()
pop()
shift()
unshift()
slice()
splice()
includes()
indexOf()
```

Useful Functional Methods

```javascript
map()
filter()
reduce()
find()
some()
every()
forEach()
```

Example

```javascript
const squares = numbers.map(n => n * n);
```

---

# Objects

```javascript
const student = {
    name: "Alice",
    age: 22
};
```

Access Properties

```javascript
student.name;
student["age"];
```

Destructuring

```javascript
const { name, age } = student;
```

---

# Functions

Regular Function

```javascript
function square(x) {
    return x * x;
}
```

Arrow Function

```javascript
const square = x => x * x;
```

---

# Conditional Statements

```javascript
if (score >= 90) {
    console.log("A");
} else if (score >= 75) {
    console.log("B");
} else {
    console.log("C");
}
```

---

# Loops

For Loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

For...of

```javascript
for (const value of numbers) {
    console.log(value);
}
```

---

# ES6 Features

Template Literals

```javascript
`Hello ${name}`
```

Spread Operator

```javascript
const copy = [...numbers];
```

Rest Parameters

```javascript
function sum(...values) {}
```

Default Parameters

```javascript
function greet(name = "Guest") {}
```

---

# Modules

Export

```javascript
export function add(a, b) {
    return a + b;
}
```

Import

```javascript
import { add } from "./math.js";
```

---

# Promises

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

# Async / Await

```javascript
async function loadData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```

---

# Error Handling

```javascript
try {
    riskyOperation();
} catch (error) {
    console.error(error);
}
```

---

# JSON

Convert Object → JSON

```javascript
JSON.stringify(obj);
```

Convert JSON → Object

```javascript
JSON.parse(text);
```

---

# Working with APIs

```javascript
const response = await fetch("/api/users");
const users = await response.json();
```

Applications

- AI APIs
- OpenAI
- Hugging Face
- REST APIs

---

# DOM Manipulation

Select Element

```javascript
document.querySelector("#output");
```

Update Content

```javascript
element.textContent = "Prediction";
```

Handle Events

```javascript
button.addEventListener("click", predict);
```

---

# NumJs (Optional)

NumJs provides NumPy-like arrays for JavaScript.

Example

```javascript
const nj = require("numjs");
```

---

# TensorFlow.js

Purpose

- Train models in JavaScript
- Run models in browsers
- GPU acceleration using WebGL/WebGPU (where supported)

Installation

```bash
npm install @tensorflow/tfjs
```

Example

```javascript
import * as tf from "@tensorflow/tfjs";

const tensor = tf.tensor([1, 2, 3]);
```

Common Operations

```javascript
tensor.shape

tensor.reshape()

tensor.mean()

tensor.sum()

tensor.matMul()
```

---

# Brain.js

Simple neural network library.

Installation

```bash
npm install brain.js
```

Example

```javascript
const brain = require("brain.js");

const net = new brain.NeuralNetwork();
```

---

# ONNX Runtime Web

Purpose

- Run pre-trained ONNX models in the browser.

Installation

```bash
npm install onnxruntime-web
```

Applications

- Image Classification
- Object Detection
- NLP Models

---

# Data Visualization

Chart.js

```bash
npm install chart.js
```

Applications

- Accuracy
- Loss Curves
- Predictions

Other Libraries

- D3.js
- Plotly.js
- ECharts

---

# Node.js for Machine Learning

Useful Packages

```bash
npm install
```

Common Packages

- express
- axios
- dotenv
- csv-parser
- ml-matrix

---

# ML Workflow in JavaScript

```text
Load Data
      ↓
Preprocess Data
      ↓
Convert to Tensors
      ↓
Train Model
      ↓
Evaluate Model
      ↓
Save Model
      ↓
Deploy to Browser or Server
```

---

# Useful JavaScript Libraries

| Library | Purpose |
|----------|---------|
| TensorFlow.js | Deep Learning |
| Brain.js | Neural Networks |
| ONNX Runtime Web | Run ONNX models |
| ml.js | Machine Learning algorithms |
| NumJs | Numerical computing |
| Chart.js | Charts |
| D3.js | Data Visualization |
| Plotly.js | Interactive Visualization |

---

# Best Practices

- Prefer `const` over `let`.
- Use `===` instead of `==`.
- Write modular code using ES modules.
- Use `async`/`await` for asynchronous operations.
- Validate user input.
- Keep functions small and reusable.
- Use ESLint and Prettier for code quality.

---

# Summary

- Learn modern JavaScript (ES6+) fundamentals.
- Master arrays, objects, functions, and asynchronous programming.
- Understand JSON and REST APIs.
- Manipulate the DOM for interactive AI applications.
- Use TensorFlow.js to train and run models in JavaScript.
- Deploy AI applications in browsers or Node.js.
- Visualize predictions and metrics using JavaScript charting libraries.