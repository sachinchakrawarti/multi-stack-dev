# Probability & Statistics Review

> **Goal:** Learn the probability and statistics concepts required for Machine Learning, Deep Learning, and Data Science.

---

# Why Probability & Statistics?

Machine Learning models use probability and statistics to:

- Understand uncertainty
- Analyze data
- Make predictions
- Estimate parameters
- Evaluate model performance

---

# Basic Terminology

| Term | Meaning |
|------|---------|
| Population | Entire dataset |
| Sample | Subset of a population |
| Observation | Single data point |
| Feature | Input variable |
| Target | Output variable |

---

# Random Variables

A variable whose value depends on chance.

Examples

- Dice roll
- Coin toss
- Weather
- Customer purchase

Types

- Discrete
- Continuous

---

# Probability

Probability measures how likely an event is.

Range

```text
0 ≤ P(Event) ≤ 1
```

Examples

- Coin toss
- Dice roll
- Rain prediction

---

# Events

An event is an outcome of an experiment.

Examples

- Rolling a 6
- Getting heads
- Selecting a spam email

Types

- Simple
- Compound
- Independent
- Dependent

---

# Conditional Probability

Probability of an event given another event.

Applications

- Spam detection
- Medical diagnosis
- Recommendation systems

---

# Bayes' Theorem

Updates probability using new evidence.

Applications

- Naive Bayes
- Medical diagnosis
- Spam filtering
- Fraud detection

---

# Probability Distributions

Describe how probabilities are distributed.

Common distributions

- Bernoulli
- Binomial
- Uniform
- Normal (Gaussian)
- Poisson
- Exponential

Applications

- Data modeling
- Simulation
- Machine Learning

---

# Bernoulli Distribution

Represents a single trial.

Examples

- Yes / No
- Success / Failure
- True / False

---

# Binomial Distribution

Models repeated Bernoulli trials.

Examples

- Number of heads
- Number of defective products

---

# Normal Distribution

The most common probability distribution.

Characteristics

- Bell-shaped
- Symmetric
- Mean = Median = Mode

Applications

- Statistics
- Machine Learning
- Standardization

---

# Mean

Average value.

Formula

```text
Mean = Sum / Number of values
```

Applications

- Data summarization
- Feature scaling

---

# Median

Middle value after sorting.

Advantages

- Resistant to outliers

---

# Mode

Most frequently occurring value.

Applications

- Categorical data

---

# Variance

Measures how spread out data is.

Low variance

- Data is close together.

High variance

- Data is widely spread.

Applications

- Model analysis
- Feature engineering

---

# Standard Deviation

Square root of variance.

Properties

- Same unit as data
- Measures spread

Applications

- Standardization
- Outlier detection

---

# Covariance

Measures how two variables change together.

Positive

- Increase together

Negative

- One increases while the other decreases

---

# Correlation

Measures strength of relationship.

Range

```text
-1 to +1
```

Values

- +1 → Perfect positive
- 0 → No correlation
- -1 → Perfect negative

Applications

- Feature selection
- Data analysis

---

# Probability Density Function (PDF)

Used for continuous variables.

Applications

- Gaussian distribution
- Continuous probability

---

# Cumulative Distribution Function (CDF)

Probability that

```text
X ≤ x
```

Applications

- Probability calculations
- Statistical analysis

---

# Sampling

Selecting part of a population.

Methods

- Random Sampling
- Stratified Sampling
- Systematic Sampling

Applications

- Training datasets
- Surveys

---

# Central Limit Theorem

As sample size increases,

the sampling distribution approaches a normal distribution.

Importance

- Foundation of statistics
- Confidence intervals
- Hypothesis testing

---

# Hypothesis Testing

Used to determine whether a claim is supported by data.

Concepts

- Null hypothesis (H₀)
- Alternative hypothesis (H₁)
- Significance level
- p-value

Applications

- A/B Testing
- Scientific research

---

# Bias and Variance

High Bias

- Underfitting

High Variance

- Overfitting

Goal

- Balance both

---

# Maximum Likelihood Estimation (MLE)

Finds parameters that maximize the likelihood of observed data.

Applications

- Logistic Regression
- Gaussian Models
- Bayesian Statistics

---

# Evaluation Metrics

Regression

- MAE
- MSE
- RMSE
- R² Score

Classification

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC

---

# ML Applications

- Linear Regression
- Logistic Regression
- Naive Bayes
- Decision Trees
- Random Forests
- Support Vector Machines
- Neural Networks
- Reinforcement Learning

---

# Important Concepts

| Topic | Purpose |
|--------|---------|
| Probability | Measure uncertainty |
| Mean | Average |
| Median | Middle value |
| Mode | Most frequent value |
| Variance | Measure spread |
| Standard Deviation | Spread in original units |
| Correlation | Relationship strength |
| Bayes' Theorem | Update probabilities |
| MLE | Estimate parameters |
| CLT | Sampling theory |

---

# Summary

- Probability models uncertainty.
- Statistics summarizes and analyzes data.
- Distributions describe how data behaves.
- Mean, median, and mode measure central tendency.
- Variance and standard deviation measure spread.
- Correlation measures relationships between variables.
- Bayes' Theorem updates probabilities using evidence.
- Sampling and the Central Limit Theorem underpin statistical inference.
- Probability and statistics are essential for building, training, and evaluating Machine Learning models.