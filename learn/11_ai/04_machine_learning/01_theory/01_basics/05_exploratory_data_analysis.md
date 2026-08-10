# Exploratory Data Analysis (EDA)

> **Goal:** Learn how to explore, understand, and visualize data before building Machine Learning models.

---

# What is Exploratory Data Analysis (EDA)?

**Exploratory Data Analysis (EDA)** is the process of examining, summarizing, and visualizing a dataset to discover patterns, detect anomalies, test assumptions, and understand the data before model training.

> **EDA answers an important question:** *"What does my data look like?"*

---

# Why is EDA Important?

EDA helps you:

- Understand your dataset
- Detect missing values
- Identify outliers
- Discover relationships between features
- Detect data imbalance
- Find errors and inconsistencies
- Select useful features
- Improve model performance

Skipping EDA often leads to poor model performance.

---

# Position of EDA in the ML Workflow

```text
Business Problem
        ↓
Collect Data
        ↓
Clean Data
        ↓
Exploratory Data Analysis (EDA)
        ↓
Feature Engineering
        ↓
Model Training
```

---

# Objectives of EDA

- Understand dataset structure
- Summarize important statistics
- Visualize distributions
- Find hidden patterns
- Detect anomalies
- Identify correlations
- Validate assumptions

---

# Types of EDA

## Univariate Analysis

Analyzes **one variable** at a time.

Examples

- Age distribution
- Salary distribution
- Product categories

Questions

- What is the average?
- What is the range?
- Are there outliers?

---

## Bivariate Analysis

Analyzes the relationship between **two variables**.

Examples

- Age vs Salary
- Height vs Weight
- Study Hours vs Marks

Questions

- Are they related?
- Is the relationship positive or negative?

---

## Multivariate Analysis

Analyzes **three or more variables** together.

Examples

- Customer Age
- Income
- Purchase Amount

Applications

- Feature interaction
- Pattern discovery
- Customer segmentation

---

# Dataset Overview

Before visualizing data, inspect its basic properties.

Check

- Number of rows
- Number of columns
- Feature names
- Data types
- Memory usage

Example

```text
Rows: 10,000

Columns: 15
```

---

# Understanding Features

Features can be classified into different types.

## Numerical Features

Examples

- Age
- Salary
- Temperature

---

## Categorical Features

Examples

- Gender
- Country
- Product Category

---

## Boolean Features

Examples

- Purchased
- Is Premium User
- Passed Exam

---

## Date & Time Features

Examples

- Order Date
- Login Time
- Transaction Timestamp

---

# Descriptive Statistics

Useful statistical measures.

| Metric | Description |
|---------|-------------|
| Count | Number of observations |
| Mean | Average value |
| Median | Middle value |
| Mode | Most frequent value |
| Minimum | Smallest value |
| Maximum | Largest value |
| Variance | Data spread |
| Standard Deviation | Dispersion from the mean |

---

# Missing Values

Missing values reduce data quality.

Example

```text
Age

25

NULL

31
```

Detection

- Count missing values
- Calculate missing percentage
- Visualize missing data

Solutions

- Remove rows
- Remove columns
- Fill with mean
- Fill with median
- Fill with mode
- Predict missing values

---

# Duplicate Data

Duplicate records can bias the model.

Example

```text
Alice

Alice

Bob
```

Action

- Detect duplicates
- Remove unnecessary duplicates

---

# Outlier Detection

Outliers are unusually high or low values.

Example

```text
Salary

₹35,000
₹42,000
₹50,000
₹9,00,000
```

Detection Methods

- Box Plot
- IQR
- Z-Score

Treatment

- Remove
- Cap
- Transform
- Investigate before deciding

---

# Distribution Analysis

Understanding feature distributions helps choose preprocessing techniques.

Common Distributions

- Normal Distribution
- Uniform Distribution
- Right-skewed
- Left-skewed
- Multimodal

---

# Correlation Analysis

Correlation measures how strongly two variables are related.

Range

```text
-1  ←────── 0 ─────→ +1
```

| Value | Meaning |
|--------|---------|
| +1 | Perfect positive correlation |
| 0 | No correlation |
| -1 | Perfect negative correlation |

Applications

- Feature selection
- Detect multicollinearity

---

# Class Imbalance

Classification datasets may have unequal class distributions.

Example

```text
Spam

95%

Not Spam

5%
```

Problems

- Poor prediction for minority class
- Misleading accuracy

Solutions

- Oversampling
- Undersampling
- SMOTE
- Class weighting

---

# Common EDA Visualizations

## Histogram

Shows the distribution of numerical values.

Best For

- Age
- Salary
- Height

---

## Bar Chart

Shows frequency of categories.

Best For

- Gender
- Product Type
- Country

---

## Pie Chart

Shows category proportions.

Best For

- Market share
- Survey responses

Use sparingly when there are many categories.

---

## Scatter Plot

Shows the relationship between two numerical variables.

Best For

- Height vs Weight
- Sales vs Advertising

---

## Line Chart

Shows trends over time.

Best For

- Stock prices
- Website traffic
- Monthly sales

---

## Box Plot

Shows

- Median
- Quartiles
- Outliers

Useful for detecting unusual observations.

---

## Heatmap

Visualizes correlation between numerical features.

Applications

- Feature selection
- Multicollinearity detection

---

# Feature Relationships

Questions to Explore

- Which features are highly correlated?
- Which features are independent?
- Which features influence the target?

---

# Target Variable Analysis

Study the output variable separately.

Regression

- Distribution
- Outliers
- Range

Classification

- Class balance
- Number of classes

---

# Feature Engineering Opportunities

EDA often reveals opportunities to create better features.

Examples

Date

```text
2026-07-29

↓

Year
Month
Weekday
Quarter
```

Customer Data

```text
Registration Date
Last Purchase

↓

Customer Lifetime
```

---

# Common Python Libraries

| Library | Purpose |
|----------|---------|
| Pandas | Data exploration |
| NumPy | Numerical operations |
| Matplotlib | Basic visualization |
| Seaborn | Statistical visualization |
| Plotly | Interactive charts |
| Sweetviz | Automated EDA |
| ydata-profiling | Automated profiling |

---

# Typical EDA Workflow

```text
Load Dataset
      ↓
Inspect Structure
      ↓
Check Data Types
      ↓
Handle Missing Values
      ↓
Remove Duplicates
      ↓
Detect Outliers
      ↓
Analyze Distributions
      ↓
Visualize Relationships
      ↓
Analyze Correlations
      ↓
Generate Insights
      ↓
Prepare Features
```

---

# Common Mistakes

- Skipping EDA entirely
- Ignoring missing values
- Ignoring outliers
- Relying only on summary statistics
- Assuming correlation implies causation
- Forgetting to inspect the target variable
- Using inappropriate charts for the data type

---

# Best Practices

- Understand the business problem first.
- Explore every feature before modeling.
- Combine statistics with visualizations.
- Document important findings.
- Investigate anomalies before removing them.
- Keep preprocessing reproducible.
- Let EDA guide feature engineering.

---

# Summary

- Exploratory Data Analysis (EDA) is the process of understanding data before model training.
- EDA identifies missing values, outliers, duplicates, and feature relationships.
- Statistical summaries and visualizations reveal patterns that improve decision-making.
- Insights from EDA drive better feature engineering and model selection.
- A thorough EDA is one of the most important steps in a successful Machine Learning project.