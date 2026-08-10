# Data Collection & Data Processing

> **Goal:** Learn how to collect, clean, transform, and prepare data for Machine Learning models.

---

# Why is Data Important?

Data is the foundation of every Machine Learning model.

A model can only learn patterns that exist in the data it receives.

> **Rule:** Better data usually leads to better models.

---

# Machine Learning Data Pipeline

```text
Data Sources
      ↓
Data Collection
      ↓
Data Storage
      ↓
Data Cleaning
      ↓
Data Preprocessing
      ↓
Feature Engineering
      ↓
Train / Validation / Test Split
      ↓
Model Training
```

---

# What is Data Collection?

Data collection is the process of gathering information from different sources to train Machine Learning models.

Goals

- Collect relevant data
- Ensure data quality
- Gather sufficient examples
- Minimize bias

---

# Types of Data

## Structured Data

Organized into rows and columns.

Examples

- Customer database
- Sales records
- Employee information

```text
+----+-------+-----+
| ID | Name  | Age |
+----+-------+-----+
| 1  | Alice | 25  |
| 2  | Bob   | 30  |
+----+-------+-----+
```

---

## Semi-Structured Data

Contains tags or key-value pairs but doesn't follow a strict table structure.

Examples

- JSON
- XML
- YAML

Example JSON

```json
{
  "name": "Alice",
  "age": 25
}
```

---

## Unstructured Data

Has no predefined format.

Examples

- Images
- Videos
- Audio
- Emails
- Documents
- Social media posts

---

# Common Data Sources

## Databases

Examples

- MySQL
- PostgreSQL
- MongoDB
- SQL Server

---

## Files

- CSV
- Excel
- JSON
- XML
- Parquet

---

## APIs

Examples

- Weather APIs
- Payment APIs
- Social Media APIs
- Open Data APIs

---

## Web Scraping

Extract data from websites.

Popular Libraries

- BeautifulSoup
- Scrapy
- Selenium

> Always respect a website's Terms of Service and `robots.txt`, and comply with applicable laws.

---

## Sensors & IoT

Examples

- Temperature sensors
- GPS devices
- Wearables
- Smart home devices

---

## User-Generated Data

Examples

- Reviews
- Ratings
- Search history
- Clickstream data
- Uploaded files

---

# Data Collection Methods

- Manual entry
- Surveys
- Online forms
- APIs
- Web scraping
- Sensor networks
- Log files
- Third-party datasets

---

# Data Quality

Good data should be:

- Accurate
- Complete
- Consistent
- Relevant
- Timely
- Reliable

Poor-quality data leads to poor predictions.

---

# Common Data Quality Problems

- Missing values
- Duplicate records
- Incorrect values
- Inconsistent formats
- Outliers
- Noise
- Imbalanced classes

---

# Data Cleaning

Data cleaning removes errors and inconsistencies.

Tasks

- Remove duplicates
- Handle missing values
- Fix incorrect entries
- Correct inconsistent formats
- Remove invalid records

Example

Before

```text
Age
25
30
NULL
25
```

After

```text
Age
25
30
28
25
```

---

# Handling Missing Values

Common Strategies

- Remove rows
- Remove columns
- Fill with mean
- Fill with median
- Fill with mode
- Forward fill
- Backward fill
- Predict missing values

Choice depends on the dataset and problem.

---

# Handling Duplicate Data

Duplicates can bias the model.

Example

```text
Alice
Alice
Bob
```

After removing duplicates

```text
Alice
Bob
```

---

# Handling Outliers

Outliers are unusually large or small values.

Detection Methods

- Box Plot
- Z-Score
- IQR (Interquartile Range)

Options

- Remove
- Cap
- Transform
- Keep (if meaningful)

---

# Data Preprocessing

Prepare cleaned data for Machine Learning.

Tasks

- Normalize values
- Standardize features
- Encode categories
- Scale numerical data
- Convert data types

---

# Feature Engineering

Create or improve features that help the model learn.

Examples

Date

```text
2026-07-29

↓

Year
Month
Day
Weekday
Quarter
```

Customer Data

```text
First Purchase
Last Purchase

↓

Customer Lifetime
```

---

# Feature Selection

Choose the most useful features.

Benefits

- Faster training
- Reduced overfitting
- Better interpretability
- Lower memory usage

Methods

- Correlation analysis
- Statistical tests
- Recursive Feature Elimination (RFE)
- Tree-based feature importance

---

# Encoding Categorical Data

Convert categories into numbers.

## Label Encoding

```text
Low    → 0
Medium → 1
High   → 2
```

Useful for **ordinal** categories.

---

## One-Hot Encoding

```text
Red

↓

[1,0,0]

Blue

↓

[0,1,0]
```

Useful for **nominal** categories.

---

# Feature Scaling

Many algorithms perform better when features have similar ranges.

## Normalization

Scales values to a fixed range (commonly 0 to 1).

Applications

- Neural Networks
- KNN

---

## Standardization

Centers data around a mean of 0 with a standard deviation of 1.

Applications

- Logistic Regression
- SVM
- PCA

---

# Data Splitting

Separate data for training and evaluation.

Typical Split

```text
Training Set      70%
Validation Set    15%
Testing Set       15%
```

Alternative

```text
Training Set      80%
Testing Set       20%
```

---

# Data Augmentation

Increase dataset size by creating modified versions of existing data.

Image Examples

- Rotation
- Flip
- Crop
- Brightness adjustment
- Zoom

Text Examples

- Synonym replacement
- Back translation

Benefits

- More training examples
- Better generalization
- Reduced overfitting

---

# Data Annotation

Assign labels to raw data.

Examples

- Image labels
- Bounding boxes
- Text categories
- Audio transcripts

Annotation quality directly impacts supervised learning performance.

---

# Data Storage Formats

| Format | Best Use |
|---------|----------|
| CSV | Tabular data |
| Excel | Small datasets |
| JSON | APIs and nested data |
| Parquet | Large-scale analytics |
| Avro | Distributed systems |
| SQL Database | Structured data |
| NoSQL Database | Flexible document data |

---

# Ethical Considerations

When collecting data:

- Obtain appropriate consent where required.
- Respect privacy regulations.
- Avoid collecting unnecessary personal data.
- Reduce bias in datasets.
- Protect sensitive information.
- Store data securely.

---

# Best Practices

- Define data requirements before collecting.
- Validate data at ingestion.
- Automate cleaning where possible.
- Document every preprocessing step.
- Keep raw data unchanged.
- Version datasets.
- Monitor data quality over time.
- Use reproducible preprocessing pipelines.

---

# Popular Python Libraries

| Library | Purpose |
|----------|---------|
| Pandas | Data manipulation |
| NumPy | Numerical computing |
| Scikit-learn | Preprocessing and feature engineering |
| OpenCV | Image processing |
| NLTK | Natural Language Processing |
| PySpark | Big data processing |
| Polars | High-performance DataFrames |

---

# Summary

- High-quality data is essential for successful Machine Learning.
- Data collection gathers information from reliable sources.
- Data cleaning removes errors, duplicates, and inconsistencies.
- Data preprocessing transforms data into a model-ready format.
- Feature engineering and feature selection improve model performance.
- Proper train, validation, and test splits enable reliable evaluation.
- A well-designed data pipeline leads to more accurate and robust ML models.