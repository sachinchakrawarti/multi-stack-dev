# Java for Machine Learning

> **Goal:** Learn the Java concepts required for Machine Learning, Data Processing, and AI application development.

---

# Why Java for Machine Learning?

Java is widely used for:

- Enterprise AI applications
- Big Data processing
- Distributed systems
- Backend APIs for ML services
- High-performance applications

---

# Java Development Setup

Requirements

- JDK 21+ (LTS recommended)
- IntelliJ IDEA or VS Code
- Maven or Gradle

Verify Installation

```bash
java --version
javac --version
```

---

# Basic Program

```java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hello, Machine Learning!");
    }

}
```

---

# Variables

```java
int age = 25;
double learningRate = 0.01;
String name = "Alice";
boolean trained = false;
```

---

# Primitive Data Types

| Type | Example |
|------|---------|
| byte | 100 |
| short | 1000 |
| int | 10000 |
| long | 100000L |
| float | 3.14f |
| double | 3.14159 |
| char | 'A' |
| boolean | true |

---

# Operators

Arithmetic

```java
+
-
*
/
%
```

Comparison

```java
==
!=
<
>
<=
>=
```

Logical

```java
&&
||
!
```

---

# Strings

```java
String text = "Machine Learning";
```

Methods

```java
text.length();
text.toUpperCase();
text.toLowerCase();
text.substring(0, 7);
text.contains("Machine");
```

---

# Arrays

```java
int[] numbers = {1, 2, 3, 4};
```

Loop

```java
for (int number : numbers) {
    System.out.println(number);
}
```

---

# Collections

## ArrayList

```java
List<String> names = new ArrayList<>();

names.add("Alice");
names.add("Bob");
```

## HashMap

```java
Map<String, Integer> scores = new HashMap<>();

scores.put("Alice", 95);
```

## HashSet

```java
Set<Integer> ids = new HashSet<>();
```

---

# Conditional Statements

```java
if (score >= 90) {
    System.out.println("A");
} else if (score >= 75) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```

---

# Loops

For Loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

While Loop

```java
while (condition) {

}
```

---

# Methods

```java
public static int square(int x) {
    return x * x;
}
```

---

# Classes and Objects

```java
class Student {

    String name;

    Student(String name) {
        this.name = name;
    }

    void greet() {
        System.out.println(name);
    }

}
```

Usage

```java
Student s = new Student("Alice");
s.greet();
```

---

# OOP Concepts

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

---

# Exception Handling

```java
try {

    int value = Integer.parseInt("10");

} catch (NumberFormatException e) {

    System.out.println(e.getMessage());

}
```

---

# File Handling

Read File

```java
Files.readString(Path.of("data.txt"));
```

Write File

```java
Files.writeString(Path.of("output.txt"), "Hello");
```

---

# Generics

```java
List<Integer> numbers = new ArrayList<>();
```

Benefits

- Type safety
- Reusable code

---

# Lambda Expressions

```java
numbers.forEach(n -> System.out.println(n));
```

---

# Streams API

Filter

```java
numbers.stream()
       .filter(n -> n > 5)
       .toList();
```

Map

```java
numbers.stream()
       .map(n -> n * n)
       .toList();
```

Reduce

```java
numbers.stream()
       .reduce(0, Integer::sum);
```

---

# Maven

Initialize dependencies.

Example

```xml
<dependency>
    <groupId>org.deeplearning4j</groupId>
    <artifactId>deeplearning4j-core</artifactId>
    <version>1.0.0-M2.1</version>
</dependency>
```

Useful Commands

```bash
mvn clean

mvn compile

mvn test

mvn package
```

---

# Gradle

```gradle
dependencies {

    implementation "org.nd4j:nd4j-native-platform:1.0.0-M2.1"

}
```

---

# ND4J

Purpose

- Numerical computing
- Matrix operations
- Tensor operations

Example

```java
INDArray matrix = Nd4j.create(new double[][]{
    {1, 2},
    {3, 4}
});
```

Common Operations

```java
shape()

transpose()

reshape()

mmul()

sum()
```

---

# Deeplearning4j (DL4J)

Purpose

- Deep Learning
- Neural Networks
- Classification
- Regression

Example

```java
MultiLayerNetwork network;
```

Applications

- Image Classification
- NLP
- Recommendation Systems

---

# Weka

Purpose

- Classical Machine Learning

Algorithms

- Decision Trees
- K-Means
- Naive Bayes
- SVM

---

# Apache Spark MLlib

Purpose

- Distributed Machine Learning
- Big Data Processing

Applications

- Large-scale model training
- Feature engineering
- Clustering

---

# Smile

Purpose

- Statistical analysis
- Machine Learning
- Data visualization

Algorithms

- Random Forest
- Logistic Regression
- KNN
- PCA

---

# DJL (Deep Java Library)

Purpose

- Deep Learning framework for Java

Supports

- PyTorch
- TensorFlow
- MXNet
- ONNX Runtime

Applications

- Model inference
- Transfer learning
- Production AI

---

# ML Workflow in Java

```text
Load Data
      ↓
Clean Data
      ↓
Feature Engineering
      ↓
Train Model
      ↓
Evaluate Model
      ↓
Save Model
      ↓
Deploy API
```

---

# Useful Java Libraries

| Library | Purpose |
|----------|---------|
| ND4J | Numerical Computing |
| Deeplearning4j | Deep Learning |
| DJL | Deep Learning Framework |
| Weka | Classical Machine Learning |
| Smile | ML & Statistics |
| Apache Spark MLlib | Distributed Machine Learning |
| OpenCSV | CSV Processing |
| Jackson | JSON Processing |

---

# Best Practices

- Follow Java naming conventions.
- Prefer interfaces over concrete implementations.
- Use generics for type safety.
- Handle exceptions appropriately.
- Use Maven or Gradle for dependency management.
- Write unit tests with JUnit.
- Keep classes focused on a single responsibility.

---

# Summary

- Learn Java syntax and object-oriented programming.
- Master collections, streams, and lambda expressions.
- Use Maven or Gradle for project management.
- Perform numerical computing with ND4J.
- Build deep learning models with Deeplearning4j or DJL.
- Use Spark MLlib for large-scale data processing.
- Deploy Java-based Machine Learning applications in enterprise environments.