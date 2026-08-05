# What are LSTM and GRU?

> **Goal:** Understand what Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks are, why they were developed, how they work at a high level, and where they are used.

---

# Introduction

**LSTM (Long Short-Term Memory)** and **GRU (Gated Recurrent Unit)** are advanced types of **Recurrent Neural Networks (RNNs)** designed to learn patterns in **sequential data**.

Unlike traditional neural networks, they can remember information from previous time steps, making them ideal for tasks where **order and context matter**.

Examples of sequential data include:

- Text
- Speech
- Time series
- Music
- Sensor readings
- DNA sequences
- Financial market data

---

# Why Were LSTM and GRU Created?

Traditional Recurrent Neural Networks (RNNs) struggle to learn long-term relationships because of problems such as:

- Vanishing gradients
- Exploding gradients
- Forgetting earlier information
- Difficulty learning long sequences

LSTM and GRU solve these problems using **gating mechanisms** that control what information should be remembered, updated, or forgotten.

---

# Evolution of Sequence Models

```text
Artificial Neural Network (ANN)
            │
            ▼
Recurrent Neural Network (RNN)
            │
            ▼
Long Short-Term Memory (LSTM)
            │
            ▼
Gated Recurrent Unit (GRU)
            │
            ▼
Transformer Models
```

---

# What is Sequential Data?

Sequential data is data where **the order of elements is important**.

Examples

Text

```text
I love Machine Learning.
```

Changing the order changes the meaning.

Time Series

```text
Monday
Tuesday
Wednesday
Thursday
```

Speech

```text
Audio Samples
```

Video

```text
Frame 1
Frame 2
Frame 3
Frame 4
```

---

# Why Ordinary Neural Networks Cannot Handle Sequences Well

A traditional feedforward neural network processes every input independently.

```text
Input

↓

Neural Network

↓

Output
```

It has **no memory** of previous inputs.

For sequential problems, previous information is often essential.

Example

```text
"The movie was not"

↓

The next word changes the meaning.
```

Without memory, the model loses context.

---

# Recurrent Neural Networks (RNN)

RNNs introduce a **hidden state** that carries information from previous time steps.

```text
Input₁ → Hidden₁
             │
             ▼
Input₂ → Hidden₂
             │
             ▼
Input₃ → Hidden₃
             │
             ▼
Output
```

This allows the network to remember earlier inputs.

---

# Limitations of RNNs

As sequences become longer, RNNs struggle to remember distant information.

Example

```text
John was born in Canada.

...

After many sentences...

He speaks English.
```

The word **"He"** refers to **John**, but a simple RNN may forget that relationship.

Problems

- Vanishing gradients
- Exploding gradients
- Poor long-term memory
- Difficult training

---

# What is LSTM?

**LSTM (Long Short-Term Memory)** is a special type of RNN that can remember information over long periods.

It introduces a **memory cell** and several **gates** to control the flow of information.

Main Components

- Cell State
- Hidden State
- Forget Gate
- Input Gate
- Output Gate

---

# LSTM Concept

```text
Previous Memory
        │
        ▼
Forget Gate
        │
        ▼
Input Gate
        │
        ▼
Memory Cell
        │
        ▼
Output Gate
        │
        ▼
Next Hidden State
```

The gates determine:

- What to forget
- What to learn
- What to output

---

# What is GRU?

**GRU (Gated Recurrent Unit)** is a simplified version of LSTM.

Instead of three gates, it uses only two.

Components

- Update Gate
- Reset Gate

There is **no separate cell state**.

This makes GRUs simpler and often faster to train.

---

# GRU Concept

```text
Previous Hidden State
          │
          ▼
Reset Gate
          │
          ▼
Update Gate
          │
          ▼
New Hidden State
```

---

# LSTM vs GRU at a Glance

| Feature | LSTM | GRU |
|----------|------|-----|
| Memory Cell | Yes | No |
| Hidden State | Yes | Yes |
| Forget Gate | Yes | No |
| Input Gate | Yes | No |
| Output Gate | Yes | No |
| Update Gate | No | Yes |
| Reset Gate | No | Yes |
| Parameters | More | Fewer |
| Training Speed | Slower | Faster |
| Memory Usage | Higher | Lower |

---

# How LSTM and GRU Learn

During training, the network repeatedly performs:

```text
Input Sequence
        ↓
Forward Pass
        ↓
Prediction
        ↓
Calculate Loss
        ↓
Backpropagation Through Time (BPTT)
        ↓
Update Weights
        ↓
Repeat
```

Over time, the model learns which information should be remembered and which should be ignored.

---

# Applications of LSTM

- Text generation
- Machine translation
- Sentiment analysis
- Speech recognition
- Handwriting recognition
- Weather forecasting
- Stock price prediction
- Time-series forecasting
- Medical diagnosis
- Fraud detection

---

# Applications of GRU

- Chatbots
- Language modeling
- Time-series forecasting
- Customer behavior prediction
- Recommendation systems
- IoT sensor analysis
- Predictive maintenance
- Financial forecasting

---

# Advantages of LSTM

- Learns long-term dependencies
- Handles long sequences effectively
- Reduces vanishing gradient problems
- Works well on complex sequence tasks

---

# Advantages of GRU

- Simpler architecture
- Faster training
- Fewer parameters
- Lower memory usage
- Often performs similarly to LSTM

---

# Limitations

LSTM

- Computationally expensive
- More parameters
- Longer training time

GRU

- Smaller memory capacity than LSTM
- May perform worse on some very long sequences

---

# LSTM or GRU?

Choose **LSTM** when:

- Long-term memory is important
- Very long sequences must be modeled
- Maximum accuracy is preferred over speed

Choose **GRU** when:

- Faster training is required
- The dataset is smaller
- Lower memory usage is important
- Similar accuracy with reduced complexity is acceptable

---

# Modern Perspective

Although **Transformers** dominate many NLP tasks today, LSTM and GRU remain important because they:

- Are easier to understand
- Require fewer computational resources
- Work well for many time-series problems
- Are commonly used in embedded and edge devices
- Remain valuable for educational purposes and many production systems

---

# Key Terminology

| Term | Meaning |
|------|---------|
| Sequence | Ordered data |
| Time Step | One element in a sequence |
| Hidden State | Short-term memory passed between steps |
| Cell State | Long-term memory in LSTM |
| Gate | Controls information flow |
| BPTT | Backpropagation Through Time |
| Vanishing Gradient | Gradients become too small during training |
| Exploding Gradient | Gradients become excessively large during training |

---

# Summary

- LSTM and GRU are advanced Recurrent Neural Networks designed for sequential data.
- They overcome many limitations of traditional RNNs by using gating mechanisms to manage information flow.
- LSTM uses a memory cell with forget, input, and output gates.
- GRU simplifies the architecture by using update and reset gates, resulting in fewer parameters and faster training.
- Both architectures are widely used for natural language processing, speech recognition, and time-series forecasting.
- Understanding LSTM and GRU provides a strong foundation for studying modern sequence models and Transformer architectures.