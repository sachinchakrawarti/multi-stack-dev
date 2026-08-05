# Types of Machine Learning

> **Goal:** Understand the four major types of Machine Learning, how they work, when to use them, and their real-world applications.

---

# Overview

Machine Learning algorithms are commonly divided into four categories:

```text
Machine Learning
│
├── Supervised Learning
├── Unsupervised Learning
├── Semi-Supervised Learning
└── Reinforcement Learning
```

Each type differs in the kind of data it uses and how it learns.

---

# Comparison

| Learning Type | Uses Labels | Goal | Example |
|---------------|------------|------|---------|
| Supervised | ✅ Yes | Predict output | House price prediction |
| Unsupervised | ❌ No | Discover patterns | Customer segmentation |
| Semi-Supervised | ⚠️ Some | Improve learning with limited labels | Medical image classification |
| Reinforcement | Reward-based | Learn optimal actions | Robot navigation |

---

# 1. Supervised Learning

## Definition

The model learns from **labeled data**, where every training example has both input features and the correct output.

```text
Input Features
      ↓
Machine Learning Model
      ↓
Predicted Output
```

Training Data

```text
House Size → Price

1200 sq.ft → ₹45,00,000

1500 sq.ft → ₹58,00,000

1800 sq.ft → ₹72,00,000
```

The model learns the relationship between input and output.

---

## Types of Supervised Learning

### Regression

Predicts **continuous numeric values**.

Examples

- House prices
- Temperature
- Sales forecasting
- Stock prices

Popular Algorithms

- Linear Regression
- Ridge Regression
- Lasso Regression
- Decision Tree Regressor
- Random Forest Regressor

---

### Classification

Predicts **categories or classes**.

Examples

- Spam detection
- Disease diagnosis
- Image classification
- Fraud detection

Popular Algorithms

- Logistic Regression
- Decision Tree
- Random Forest
- Support Vector Machine (SVM)
- K-Nearest Neighbors (KNN)
- Naive Bayes

---

## Advantages

- High accuracy with quality labeled data.
- Easy to evaluate using known outputs.
- Suitable for prediction tasks.

## Limitations

- Requires labeled datasets.
- Labeling can be expensive and time-consuming.
- Performance depends on data quality.

---

# 2. Unsupervised Learning

## Definition

The model learns from **unlabeled data** and discovers hidden structures or relationships.

```text
Unlabeled Data
        ↓
Find Patterns
        ↓
Clusters / Relationships
```

Examples

- Customer segmentation
- Market basket analysis
- Topic modeling
- Anomaly detection

---

## Common Tasks

### Clustering

Groups similar data points together.

Algorithms

- K-Means
- DBSCAN
- Hierarchical Clustering

Applications

- Customer segmentation
- Image grouping
- Social network analysis

---

### Dimensionality Reduction

Reduces the number of features while preserving important information.

Algorithms

- PCA
- t-SNE
- UMAP

Applications

- Data visualization
- Noise reduction
- Faster model training

---

### Association Rule Mining

Finds relationships between items.

Example

```text
Customers who buy bread often buy butter.
```

Algorithms

- Apriori
- FP-Growth

Applications

- Recommendation systems
- Retail analytics

---

## Advantages

- No labeled data required.
- Finds hidden patterns.
- Useful for exploratory data analysis.

## Limitations

- Harder to evaluate.
- Results may require interpretation.
- Clusters may not always be meaningful.

---

# 3. Semi-Supervised Learning

## Definition

Uses a **small amount of labeled data** together with a **large amount of unlabeled data**.

```text
Labeled Data
       +
Unlabeled Data
        ↓
Train Model
```

Applications

- Medical imaging
- Speech recognition
- Face recognition
- Document classification

Advantages

- Reduces labeling costs.
- Often improves performance over using only labeled data.
- Useful when labels are difficult to obtain.

Limitations

- More complex training.
- Sensitive to poor-quality unlabeled data.

---

# 4. Reinforcement Learning

## Definition

An **agent** learns by interacting with an **environment** and receiving **rewards** or **penalties**.

```text
Environment
      ↑
Reward
      ↑
Action
      ↑
Agent
```

The objective is to maximize the total reward over time.

---

## Key Components

| Component | Description |
|-----------|-------------|
| Agent | Learner or decision-maker |
| Environment | World in which the agent operates |
| State | Current situation |
| Action | Decision taken by the agent |
| Reward | Feedback from the environment |
| Policy | Strategy used by the agent |

---

## Applications

- Robotics
- Self-driving cars
- Game AI
- Recommendation systems
- Resource allocation
- Autonomous drones

---

## Popular Algorithms

- Q-Learning
- SARSA
- Deep Q Network (DQN)
- Policy Gradient
- PPO (Proximal Policy Optimization)

---

## Advantages

- Learns through experience.
- Suitable for sequential decision-making.
- Adapts to changing environments.

## Limitations

- Requires many interactions.
- Computationally expensive.
- Designing reward functions can be challenging.

---

# Choosing the Right Learning Type

| Problem | Recommended Learning Type |
|----------|---------------------------|
| Predict house prices | Supervised (Regression) |
| Detect spam emails | Supervised (Classification) |
| Segment customers | Unsupervised (Clustering) |
| Reduce dataset dimensions | Unsupervised (PCA) |
| Diagnose diseases with limited labels | Semi-Supervised |
| Train a game-playing AI | Reinforcement Learning |
| Autonomous navigation | Reinforcement Learning |

---

# Real-World Examples

| Industry | Learning Type | Example |
|----------|---------------|---------|
| Healthcare | Supervised | Disease prediction |
| Banking | Supervised | Fraud detection |
| Retail | Unsupervised | Customer segmentation |
| E-commerce | Unsupervised | Product recommendations |
| Autonomous Vehicles | Reinforcement | Driving decisions |
| Robotics | Reinforcement | Motion planning |
| Medical Imaging | Semi-Supervised | Tumor classification |

---

# Summary

- **Supervised Learning** learns from labeled data and is used for regression and classification.
- **Unsupervised Learning** discovers hidden patterns in unlabeled data through clustering, dimensionality reduction, and association analysis.
- **Semi-Supervised Learning** combines a small labeled dataset with a large unlabeled dataset to improve model performance.
- **Reinforcement Learning** trains an agent to make decisions by maximizing rewards through interaction with an environment.
- Choosing the right learning type depends on the available data and the problem you want to solve.