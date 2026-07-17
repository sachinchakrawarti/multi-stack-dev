# Monolithic vs Distributed Systems

## Introduction

One of the most important decisions in System Design is choosing the right architecture for your application.

Two common architectural styles are:

- **Monolithic Architecture**
- **Distributed Architecture**

A monolithic application keeps all functionality in a single application, while a distributed system divides functionality across multiple computers or services that work together.

Both approaches have advantages and disadvantages. The right choice depends on the application's size, complexity, scalability requirements, team size, and business goals.

---

# What Is a Monolithic System?

A **Monolithic System** is an application where all components are built, deployed, and run as a single unit.

Typical modules include:

- User Interface
- Authentication
- Business Logic
- Payment Processing
- Database Access
- Notifications

Everything exists in one project and is deployed together.

---

## Monolithic Architecture

```text
                    Users
                      │
                      ▼
        +---------------------------+
        |     Monolithic App        |
        |---------------------------|
        | User Interface            |
        | Authentication            |
        | Business Logic            |
        | Payment Module            |
        | Notification Module       |
        | Database Access           |
        +---------------------------+
                      │
                      ▼
                 Database
```

---

## Example

A college management system may contain:

- Student Management
- Faculty Management
- Attendance
- Fees
- Examination
- Results

All modules are inside one application.

---

# Advantages of Monolithic Architecture

## Simple Development

Developers work on a single codebase.

---

## Easy Deployment

Only one application needs to be deployed.

---

## Simple Testing

Testing is easier because everything runs together.

---

## Faster Communication

Modules communicate through function calls instead of network requests.

---

## Lower Initial Cost

Suitable for startups and small projects.

---

# Disadvantages of Monolithic Architecture

## Difficult to Scale

The entire application must be scaled even if only one module requires more resources.

---

## Large Codebase

As the application grows, managing the code becomes difficult.

---

## Slow Deployment

Even a small change requires redeploying the entire application.

---

## Technology Lock-In

All modules usually use the same programming language and framework.

---

## Single Point of Failure

A major issue in one module can affect the whole application.

---

# What Is a Distributed System?

A **Distributed System** consists of multiple independent services or servers working together over a network.

Each service performs a specific responsibility.

Examples:

- Authentication Service
- User Service
- Payment Service
- Notification Service
- Search Service

These services communicate using APIs, message queues, or event streams.

---

# Distributed Architecture

```text
                     Users
                       │
                       ▼
                 Load Balancer
                       │
     ┌─────────────────┼─────────────────┐
     ▼                 ▼                 ▼
+-----------+    +-----------+    +-----------+
| User      |    | Payment   |    | Search    |
| Service   |    | Service   |    | Service   |
+-----------+    +-----------+    +-----------+
      │                 │                 │
      └────────────┬────┴────────────┬────┘
                   ▼                 ▼
              Databases        Message Queue
```

---

# Advantages of Distributed Systems

## High Scalability

Each service can scale independently.

Example:

If only the Search Service receives heavy traffic, only that service is scaled.

---

## Better Availability

If one service fails, the remaining services can continue working.

---

## Independent Deployment

Teams can deploy services separately.

---

## Faster Development

Different teams can work on different services simultaneously.

---

## Technology Flexibility

Each service can use the most appropriate programming language or framework.

Example:

- Java
- Go
- Python
- Node.js

can all exist in the same system.

---

## Better Fault Isolation

Problems are isolated to individual services.

---

# Disadvantages of Distributed Systems

## Complex Architecture

Managing multiple services is significantly more difficult.

---

## Network Latency

Services communicate over a network, introducing delays.

---

## Data Consistency Challenges

Keeping data synchronized across multiple services can be difficult.

---

## Monitoring Complexity

Logs, metrics, and tracing must be collected from many services.

---

## Higher Infrastructure Cost

Running multiple servers, databases, and networking components increases operational costs.

---

# Monolithic vs Distributed Comparison

| Feature | Monolithic | Distributed |
|----------|------------|-------------|
| Codebase | Single | Multiple Services |
| Deployment | Single Deployment | Independent Deployments |
| Scalability | Scale Entire App | Scale Individual Services |
| Maintenance | Harder as App Grows | Easier with Proper Organization |
| Communication | Function Calls | Network Requests |
| Fault Isolation | Low | High |
| Performance | Faster Internal Calls | Network Overhead |
| Infrastructure | Simple | Complex |
| Development Teams | Small Teams | Multiple Teams |
| Technology Choice | Usually One Stack | Multiple Technologies |
| Cost | Lower Initially | Higher Initially |

---

# Memory Representation

## Monolithic

```text
Client
   │
   ▼
Single Application
   │
   ▼
Single Database
```

---

## Distributed

```text
Client
   │
   ▼
API Gateway
   │
 ┌─┼──────────────┐
 ▼ ▼              ▼
Auth Service  User Service
     │
     ▼
Payment Service
     │
     ▼
Notification Service
```

---

# Real-World Examples

## Monolithic Systems

- Small business websites
- College projects
- Inventory management systems
- Personal blogs
- Internal office tools

---

## Distributed Systems

- Amazon
- Netflix
- Google
- WhatsApp
- Facebook
- Uber
- Spotify

---

# When Should You Choose a Monolithic Architecture?

Choose a monolithic architecture when:

- Building a startup MVP
- Developing a small application
- Working with a small team
- Requiring fast development
- Having a limited budget
- The application is unlikely to grow significantly

---

# When Should You Choose a Distributed Architecture?

Choose a distributed architecture when:

- Supporting millions of users
- Expecting rapid growth
- Having multiple development teams
- Requiring high availability
- Needing independent deployments
- Building cloud-native applications

---

# Can a Monolith Become Distributed?

Yes.

Many successful companies started with a monolithic application and later transitioned to distributed systems.

Examples include:

- Amazon
- Netflix
- Uber
- Spotify

This approach allows teams to move quickly at first and adopt more complex architectures as the application grows.

---

# Best Practices

- Start with the simplest architecture that meets current requirements.
- Avoid unnecessary complexity in early-stage projects.
- Design modular code, even within a monolith.
- Introduce distributed services only when there is a clear need.
- Monitor performance and scalability before redesigning the architecture.

---

# Common Mistakes

- Choosing microservices or distributed systems too early.
- Splitting services without clear boundaries.
- Ignoring communication overhead between services.
- Underestimating operational complexity.
- Assuming distributed systems automatically improve performance.

---

# Interview Questions

1. What is a monolithic architecture?
2. What is a distributed system?
3. What are the advantages of a monolithic application?
4. What are the disadvantages of distributed systems?
5. When should you choose a monolithic architecture?
6. How does scalability differ between monolithic and distributed systems?
7. Why do distributed systems require load balancers?
8. What challenges arise in distributed architectures?
9. Can a monolithic application evolve into a distributed system?
10. Which architecture would you choose for a startup, and why?

---

# Summary

- A **Monolithic Architecture** packages all application components into a single deployable unit. It is simple to build and suitable for small to medium-sized applications.
- A **Distributed Architecture** divides functionality across multiple independent services that communicate over a network. It offers better scalability, fault isolation, and flexibility but introduces greater complexity.
- Neither architecture is universally better. The best choice depends on the application's requirements, expected growth, team size, and operational constraints.
- Many successful companies begin with a monolith and gradually migrate to distributed systems as their products and user base expand.

---

# Next Topic

**0006_system_design_process**