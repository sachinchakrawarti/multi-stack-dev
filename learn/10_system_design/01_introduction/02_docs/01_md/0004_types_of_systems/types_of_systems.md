# Types of Systems in System Design

## Introduction

A **system** is a collection of interconnected components that work together to achieve a specific goal. In software engineering, a system consists of hardware, software, databases, networks, APIs, and users that interact to provide services.

There are many different types of systems. Each type is designed to solve specific business problems and has its own advantages, disadvantages, and use cases.

Understanding these system types helps software engineers choose the right architecture for an application.

---

# What Is a System?

A system is a group of components working together to perform a task.

Example:

An online shopping website consists of:

- Frontend (User Interface)
- Backend Services
- Database
- Payment Gateway
- Notification Service
- Authentication Service

Together, these components form a complete software system.

---

# Classification of Systems

Software systems can be classified in many ways:

- Standalone Systems
- Client-Server Systems
- Monolithic Systems
- Distributed Systems
- Centralized Systems
- Decentralized Systems
- Peer-to-Peer Systems
- Microservices
- Event-Driven Systems
- Real-Time Systems
- Cloud-Based Systems

---

# 1. Standalone System

A standalone system runs on a single computer without depending on a network.

Examples:

- Calculator
- Paint
- Notepad
- Offline games

Architecture

```text
+----------------------+
|      Computer        |
|----------------------|
|   Application        |
|   Local Storage      |
+----------------------+
```

### Advantages

- Simple
- Fast
- Easy to maintain
- No internet required

### Disadvantages

- Cannot share data easily
- Limited scalability
- Single user

---

# 2. Client-Server System

The client sends requests to the server, and the server processes them.

Examples

- Gmail
- Banking applications
- College ERP
- Facebook

Architecture

```text
Client
   │
   ▼
Server
   │
   ▼
Database
```

### Advantages

- Centralized management
- Easier updates
- Multiple users

### Disadvantages

- Server bottleneck
- Single point of failure (without redundancy)

---

# 3. Monolithic System

A monolithic application contains all modules in a single codebase.

Example

```text
+--------------------------+
|      Application         |
|--------------------------|
| UI                       |
| Authentication           |
| Business Logic           |
| Database Access          |
+--------------------------+
```

Examples

- Small business applications
- College projects
- Internal company tools

### Advantages

- Easy to develop
- Simple deployment
- Good for small applications

### Disadvantages

- Difficult to scale
- Difficult to maintain as the application grows
- Entire application must be redeployed

---

# 4. Distributed System

A distributed system consists of multiple computers working together.

Architecture

```text
Users
   │
   ▼
Load Balancer
   │
 ┌─┴──────────┐
 ▼            ▼
Server A   Server B
   │            │
   └─────┬──────┘
         ▼
   Distributed Database
```

Examples

- Google Search
- Netflix
- WhatsApp
- Amazon

### Advantages

- Highly scalable
- High availability
- Fault tolerant

### Disadvantages

- Complex architecture
- Network latency
- Data consistency challenges

---

# 5. Centralized System

A centralized system stores all data and processing in one central location.

Examples

- Traditional banking systems
- University ERP
- Payroll systems

Architecture

```text
Users
   │
   ▼
Central Server
```

### Advantages

- Easy management
- Simple security
- Centralized control

### Disadvantages

- Single point of failure
- Limited scalability

---

# 6. Decentralized System

A decentralized system distributes processing across multiple independent nodes.

Examples

- Blockchain
- Bitcoin
- Ethereum

Architecture

```text
Node A
 │  │
 │  ▼
Node B
 │  │
 ▼  ▼
Node C
```

### Advantages

- No central authority
- Fault tolerant
- Highly available

### Disadvantages

- Slower consensus
- More complex
- Harder to manage

---

# 7. Peer-to-Peer (P2P) System

Each node acts as both a client and a server.

Examples

- BitTorrent
- Blockchain networks
- File-sharing applications

Architecture

```text
Node A ─── Node B
  │          │
  │          │
Node C ─── Node D
```

### Advantages

- No dedicated server
- Scalable
- Fault tolerant

### Disadvantages

- Security concerns
- Difficult resource management

---

# 8. Microservices Architecture

An application is divided into multiple independent services.

Architecture

```text
             API Gateway
                  │
    ┌─────────────┼──────────────┐
    ▼             ▼              ▼
 User Service  Order Service  Payment Service
```

Examples

- Netflix
- Amazon
- Uber
- Spotify

### Advantages

- Independent deployment
- Independent scaling
- Technology flexibility

### Disadvantages

- Complex communication
- Distributed debugging
- Service discovery required

---

# 9. Event-Driven System

Components communicate by publishing and consuming events.

Architecture

```text
Producer
   │
   ▼
Message Queue
   │
   ▼
Consumers
```

Examples

- Order processing
- Notifications
- Stock trading
- IoT systems

### Advantages

- Loose coupling
- Highly scalable
- Asynchronous processing

### Disadvantages

- Harder debugging
- Event ordering challenges

---

# 10. Real-Time System

A real-time system must respond within strict time limits.

Examples

- Air traffic control
- Medical devices
- Self-driving cars
- Industrial automation

### Characteristics

- Predictable response
- High reliability
- Low latency

---

# 11. Cloud-Based System

Applications are hosted on cloud platforms.

Examples

- AWS
- Microsoft Azure
- Google Cloud Platform

Architecture

```text
Users
   │
   ▼
Cloud Services
   │
   ▼
Distributed Infrastructure
```

### Advantages

- Auto scaling
- Global deployment
- High availability
- Managed infrastructure

### Disadvantages

- Cloud costs
- Vendor lock-in
- Internet dependency

---

# Comparison of System Types

| System Type | Scalable | Distributed | Best For |
|-------------|----------|-------------|----------|
| Standalone | ❌ | ❌ | Desktop applications |
| Client-Server | Limited | Partial | Business applications |
| Monolithic | Limited | ❌ | Small projects |
| Distributed | ✅ | ✅ | Large-scale applications |
| Centralized | Limited | ❌ | Enterprise systems |
| Decentralized | ✅ | ✅ | Blockchain |
| Peer-to-Peer | ✅ | ✅ | File sharing |
| Microservices | ✅ | ✅ | Large web applications |
| Event-Driven | ✅ | ✅ | High-throughput systems |
| Real-Time | Depends | Depends | Critical applications |
| Cloud-Based | ✅ | ✅ | Modern applications |

---

# How to Choose the Right System?

The choice depends on several factors:

- Number of users
- Budget
- Team size
- Performance requirements
- Scalability needs
- Availability requirements
- Security
- Maintenance complexity

There is no universal architecture that fits every application.

---

# Real-World Examples

| Application | System Type |
|------------|-------------|
| Calculator | Standalone |
| Gmail | Client-Server |
| College ERP | Monolithic |
| Netflix | Microservices + Distributed |
| Amazon | Distributed + Cloud |
| WhatsApp | Distributed |
| Bitcoin | Decentralized |
| Uber | Microservices |
| YouTube | Distributed |
| Spotify | Event-Driven + Microservices |

---

# Best Practices

- Start with a simple architecture.
- Scale only when necessary.
- Understand the trade-offs of each system type.
- Prefer modular designs for maintainability.
- Choose architecture based on business requirements, not trends.

---

# Common Mistakes

- Choosing microservices too early.
- Ignoring scalability requirements.
- Overengineering small applications.
- Not considering fault tolerance.
- Confusing distributed systems with microservices.

---

# Interview Questions

1. What is a software system?
2. What are the different types of systems?
3. What is the difference between a monolithic and a distributed system?
4. What is a client-server architecture?
5. What is a peer-to-peer system?
6. What are the advantages of microservices?
7. What is an event-driven system?
8. What is the difference between centralized and decentralized systems?
9. When should you use a cloud-based architecture?
10. How do you choose the right system architecture?

---

# Summary

- A software system is a collection of components working together to provide a service.
- Different architectures are suited for different use cases.
- Standalone and monolithic systems are simple but have limited scalability.
- Distributed systems, microservices, and cloud-based architectures are designed for modern large-scale applications.
- Understanding the strengths and weaknesses of each system type helps engineers make informed architectural decisions.

---

# Next Topic

**0005_monolithic_vs_distributed**