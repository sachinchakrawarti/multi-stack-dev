# Introduction to Recurrent Neural Networks (RNN)

> **Goal:** Understand what Recurrent Neural Networks (RNNs) are, why they were developed, how they work, their architecture, strengths, limitations, and role in modern Deep Learning.

---

# What is a Recurrent Neural Network?

A **Recurrent Neural Network (RNN)** is a type of **Artificial Neural Network (ANN)** designed to process **sequential or time-dependent data**.

Unlike traditional neural networks, an RNN remembers information from previous inputs using an internal memory called the **hidden state**.

This enables it to understand context and temporal relationships.

---

# Why Do We Need RNNs?

Many real-world problems involve data where **order matters**.

Examples

- Sentences
- Speech
- Videos
- Stock prices
- Weather data
- Sensor readings
- DNA sequences

Traditional neural networks process each input independently and cannot remember previous information.

Example

```text
Sentence

"I love Machine Learning."

Word Order

I → love → Machine → Learning
```

Changing the order changes the meaning.

---

# Traditional Neural Network

A Feedforward Neural Network processes each input separately.

```text
Input

↓

Neural Network

↓

Output
```

Characteristics

- No memory
- No context
- No sequence awareness

Suitable for

- Image classification
- Tabular data
- Basic regression

---

# Sequential Data

Sequential data has an order that carries meaning.

Examples

Text

```text
Hello
↓

How
↓

Are
↓

You
```

Time Series

```text
Day 1

↓

Day 2

↓

Day 3
```

Speech

```text
Audio Frame 1

↓

Audio Frame 2

↓

Audio Frame 3
```

---

# RNN Architecture

An RNN introduces a **hidden state** that stores information from previous time steps.

```text
x₁ ──► [RNN] ──► h₁
               │
               ▼
x₂ ──► [RNN] ──► h₂
               │
               ▼
x₃ ──► [RNN] ──► h₃
               │
               ▼
x₄ ──► [RNN] ──► h₄
```

Where

- **xₜ** = Input at time step *t*
- **hₜ** = Hidden state at time step *t*

---

# Unrolled RNN

An RNN can be visualized by unfolding it through time.

```text
      h₀
       │
       ▼
x₁ → [RNN] → h₁ → y₁
              │
              ▼
x₂ → [RNN] → h₂ → y₂
              │
              ▼
x₃ → [RNN] → h₃ → y₃
              │
              ▼
x₄ → [RNN] → h₄ → y₄
```

The same network and weights are reused at every time step.

---

# Hidden State

The hidden state acts as the network's memory.

```text
Previous Hidden State

+

Current Input

↓

New Hidden State
```

It stores useful information from previous inputs and passes it to the next step.

---

# How an RNN Works

At each time step:

1. Receive the current input.
2. Combine it with the previous hidden state.
3. Compute a new hidden state.
4. Produce an output.
5. Pass the hidden state to the next time step.

---

# Weight Sharing

One important property of RNNs is **weight sharing**.

```text
Time 1

[RNN]

↓

Time 2

[RNN]

↓

Time 3

[RNN]
```

All time steps use the **same weights**.

Benefits

- Fewer parameters
- Better generalization
- Efficient learning

---

# Types of RNN Architectures

## One-to-One

```text
Input

↓

Output
```

Example

- Image classification

---

## One-to-Many

```text
Image

↓

Caption
```

Example

- Image caption generation

---

## Many-to-One

```text
Words

↓

Sentiment
```

Applications

- Sentiment analysis
- Spam detection

---

## Many-to-Many

```text
Sentence

↓

Translated Sentence
```

Applications

- Machine translation
- Speech recognition
- Named Entity Recognition

---

# Training an RNN

Training follows these steps.

```text
Input Sequence
       ↓
Forward Pass
       ↓
Prediction
       ↓
Loss Calculation
       ↓
Backpropagation Through Time (BPTT)
       ↓
Update Weights
```

The process repeats until the model converges.

---

# Applications of RNNs

Natural Language Processing

- Language modeling
- Text generation
- Machine translation
- Chatbots

Speech Processing

- Speech recognition
- Voice assistants

Finance

- Stock prediction
- Market forecasting

Healthcare

- ECG analysis
- Patient monitoring

IoT

- Sensor prediction
- Predictive maintenance

Weather

- Rainfall prediction
- Temperature forecasting

---

# Advantages

- Handles sequential data naturally.
- Maintains context through hidden states.
- Shares weights across time.
- Supports variable-length sequences.
- Useful for language and time-series tasks.

---

# Limitations

RNNs have several drawbacks.

## Vanishing Gradient

Gradients become extremely small.

Effects

- Cannot learn long-term dependencies.
- Early information is forgotten.

---

## Exploding Gradient

Gradients become excessively large.

Effects

- Unstable training.
- Numerical overflow.
- Poor convergence.

---

## Short-Term Memory

Simple RNNs remember only recent inputs.

They struggle with very long sequences.

---

## Slow Training

RNN computations depend on previous time steps, making training sequential and less parallelizable.

---

# Why LSTM and GRU Were Developed

To overcome the limitations of standard RNNs.

Problems Solved

- Vanishing gradients
- Long-term memory
- Better information flow

Evolution

```text
ANN

↓

RNN

↓

LSTM

↓

GRU

↓

Transformer
```

---

# RNN vs LSTM vs GRU

| Feature | RNN | LSTM | GRU |
|----------|-----|------|-----|
| Memory | Short | Long | Long |
| Gates | No | 3 | 2 |
| Cell State | No | Yes | No |
| Parameters | Few | Many | Moderate |
| Training Speed | Fast | Slower | Faster |
| Long-Term Dependencies | Poor | Excellent | Very Good |

---

# Modern Usage

Today, Transformers dominate many Natural Language Processing tasks because they can process sequences in parallel and capture long-range dependencies more effectively.

However, RNNs are still valuable for:

- Learning sequence modeling concepts
- Small datasets
- Lightweight time-series models
- Embedded systems
- Resource-constrained environments

---

# Key Terminology

| Term | Description |
|------|-------------|
| Sequence | Ordered data |
| Time Step | One element in a sequence |
| Hidden State | Internal memory passed through time |
| Weight Sharing | Same parameters used at every time step |
| BPTT | Backpropagation Through Time |
| Vanishing Gradient | Gradients become too small |
| Exploding Gradient | Gradients become too large |

---

# Summary

- Recurrent Neural Networks (RNNs) are neural networks designed for sequential and time-dependent data.
- RNNs maintain a hidden state that allows them to remember information from previous inputs.
- They are widely used in language processing, speech recognition, and time-series forecasting.
- Standard RNNs suffer from vanishing gradients, exploding gradients, and limited long-term memory.
- LSTM and GRU were introduced to overcome these limitations and remain important sequence models, even in the era of Transformers.