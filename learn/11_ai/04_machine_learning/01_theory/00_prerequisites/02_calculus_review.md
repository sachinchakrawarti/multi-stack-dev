# Calculus Review

> **Goal:** Learn the calculus concepts required for Machine Learning, Deep Learning, and Optimization.

---

# Why Calculus for Machine Learning?

Calculus helps us:

- Measure change
- Optimize models
- Minimize errors
- Train neural networks using gradient descent
- Understand probability distributions

---

# Prerequisites

- Algebra
- Functions
- Graphs
- Exponents
- Logarithms

---

# Functions

A function maps an input to exactly one output.

Example:

```text
f(x) = x²
```

| x | f(x) |
|---|------|
|1|1|
|2|4|
|3|9|

Applications

- Prediction models
- Activation functions
- Loss functions

---

# Limits

A limit describes what a function approaches.

Example

```text
lim x→2 (x²) = 4
```

Why it matters

- Foundation of derivatives
- Continuity
- Optimization

---

# Continuity

A function is continuous if it has no breaks.

Continuous

```text
f(x)=x²
```

Not Continuous

```text
1/x at x=0
```

Applications

- Optimization algorithms
- Smooth loss functions

---

# Derivatives

Derivative measures the rate of change.

Notation

```text
dy/dx

f'(x)
```

Example

```text
f(x)=x²

f'(x)=2x
```

Meaning

- How fast something changes
- Slope of a curve

Applications

- Gradient Descent
- Backpropagation
- Optimization

---

# Common Derivatives

| Function | Derivative |
|----------|------------|
| c | 0 |
| x | 1 |
| x² | 2x |
| x³ | 3x² |
| sin(x) | cos(x) |
| cos(x) | -sin(x) |
| eˣ | eˣ |
| ln(x) | 1/x |

---

# Partial Derivatives

Used for functions with multiple variables.

Example

```text
f(x,y)=x²+y²
```

Partial derivative w.r.t x

```text
2x
```

Partial derivative w.r.t y

```text
2y
```

Applications

- Neural Networks
- Multivariable optimization

---

# Gradient

Gradient is a vector of partial derivatives.

Example

```text
∇f(x,y)

=
[df/dx,
 df/dy]
```

Applications

- Gradient Descent
- Deep Learning

---

# Chain Rule

Used when functions are nested.

Example

```text
y = sin(x²)
```

Derivative

```text
cos(x²) × 2x
```

Applications

- Backpropagation
- Deep Learning

---

# Second Derivative

Measures curvature.

Example

```text
f(x)=x²

f''(x)=2
```

Applications

- Convexity
- Newton's Method

---

# Integrals

Integral measures accumulated quantity.

Example

```text
∫ x dx

= x²/2 + C
```

Applications

- Probability
- Area under curves
- Continuous distributions

---

# Definite Integral

Measures area between two points.

Example

```text
∫₀² x dx
```

Applications

- Probability Density Functions
- Statistics

---

# Optimization

Goal

Find minimum or maximum values.

Machine Learning Objective

```text
Minimize Loss
```

Methods

- Gradient Descent
- Stochastic Gradient Descent
- Adam
- RMSProp

---

# Convex Functions

Convex functions have one global minimum.

Example

```text
f(x)=x²
```

Why important

Optimization becomes easier.

---

# Local vs Global Minimum

Local Minimum

- Best nearby point

Global Minimum

- Best overall point

Deep Learning often has many local minima.

---

# Learning Rate

Controls update size.

Small

- Slow learning

Large

- Overshoots minimum

---

# Taylor Series

Approximates functions using polynomials.

Applications

- Optimization
- Numerical methods

---

# Jacobian Matrix

Derivative of vector-valued functions.

Applications

- Neural Networks
- Robotics
- Computer Vision

---

# Hessian Matrix

Matrix of second-order partial derivatives.

Applications

- Newton's Method
- Curvature analysis
- Advanced optimization

---

# ML Applications

- Linear Regression
- Logistic Regression
- Neural Networks
- CNNs
- RNNs
- Transformers
- Gradient Descent
- Reinforcement Learning

---

# Important Formulas

| Topic | Formula |
|--------|---------|
| Derivative | dy/dx |
| Partial Derivative | ∂f/∂x |
| Gradient | ∇f |
| Chain Rule | dy/dx = (dy/du)(du/dx) |
| Integral | ∫f(x)dx |
| Definite Integral | ∫ₐᵇf(x)dx |

---

# Summary

- Functions map inputs to outputs.
- Limits define behavior near a point.
- Derivatives measure change.
- Partial derivatives handle multiple variables.
- Gradient points in the direction of steepest increase.
- Chain Rule enables backpropagation.
- Integrals measure accumulation.
- Optimization minimizes model loss.
- Hessians capture curvature.
- Calculus is the mathematical foundation of modern Machine Learning.