# What is SQLite?

## Overview

**SQLite** is a lightweight, serverless, self-contained, open-source relational database management system (RDBMS). Unlike traditional database systems such as MySQL or PostgreSQL, SQLite does not require a separate database server. Instead, the entire database—including tables, indexes, triggers, and data—is stored in a single file on disk.

SQLite is one of the most widely deployed database engines in the world. It is embedded into millions of applications and devices, including smartphones, web browsers, desktop software, IoT devices, and operating systems.

---

# Definition

> **SQLite is a self-contained, serverless, zero-configuration, transactional SQL database engine that stores an entire relational database in a single cross-platform file.**

SQLite fully supports standard SQL and follows the ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure reliable and secure data storage.

---

# Key Characteristics

- Self-contained
- Serverless
- Zero configuration
- Lightweight
- Open source
- Cross-platform
- Single database file
- ACID compliant
- Fast and reliable
- Easy to embed into applications

---

# Why is SQLite Called "SQLite"?

The name **SQLite** comes from:

- **SQL** → Structured Query Language
- **Lite** → Lightweight implementation

It provides most SQL features while remaining extremely small compared to traditional database servers.

---

# How SQLite Works

Unlike client-server databases, SQLite works directly inside your application.

```
Application
      │
      ▼
 SQLite Library
      │
      ▼
database.db
```

There is no database server running in the background.

---

# SQLite Architecture

```
+--------------------------+
|      Application         |
+--------------------------+
            |
            ▼
+--------------------------+
|      SQLite Library      |
+--------------------------+
            |
            ▼
+--------------------------+
|      Database File       |
|      database.db         |
+--------------------------+
```

Everything is stored inside one `.db` file.

---

# Database File

A SQLite database is simply a file.

Example:

```
school.db
library.db
employees.db
inventory.db
blog.db
```

You can:

- Copy it
- Move it
- Email it
- Backup it
- Restore it

Just like any normal file.

---

# SQLite Components

A SQLite database may contain:

- Tables
- Views
- Indexes
- Triggers
- Constraints
- SQL Statements
- Data

---

# Example Database

```
library.db

├── Books
├── Authors
├── Categories
├── Members
├── BorrowHistory
└── Publishers
```

---

# Where SQLite is Used

SQLite powers many real-world applications.

Examples include:

- Android applications
- iPhone (iOS) applications
- Desktop software
- Embedded systems
- Raspberry Pi projects
- IoT devices
- POS systems
- Browser storage
- Offline applications
- Game save files

---

# Popular Software Using SQLite

Many well-known products use SQLite internally.

Examples:

- Android OS
- iOS
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari Browser
- Adobe Lightroom
- Skype
- WhatsApp
- Dropbox
- VLC Media Player

---

# Advantages

- Extremely lightweight
- Very fast
- No installation required
- No database server
- Zero administration
- Cross-platform
- Portable
- Reliable
- Free and open source
- ACID compliant

---

# Limitations

SQLite is not designed for:

- Very large enterprise systems
- High-concurrency applications
- Distributed databases
- Database clustering
- Heavy write-intensive workloads

For such use cases, databases like PostgreSQL, MySQL, or SQL Server are usually more suitable.

---

# Example SQL

Create a table:

```sql
CREATE TABLE Students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
);
```

Insert data:

```sql
INSERT INTO Students (name, age)
VALUES ('John', 20);
```

Retrieve data:

```sql
SELECT * FROM Students;
```

---

# SQLite vs Traditional Databases

| Feature | SQLite | MySQL / PostgreSQL |
|----------|---------|--------------------|
| Server Required | ❌ No | ✅ Yes |
| Installation | Minimal | Required |
| Database File | Single File | Multiple Files |
| Configuration | None | Required |
| Performance | Excellent (small apps) | Excellent (large systems) |
| Multi-user Support | Limited | Excellent |
| Size | Very Small | Larger |

---

# Real-World Example

Imagine you are building a personal expense tracker.

Instead of installing a database server, your application simply creates:

```
expenses.db
```

Whenever the application starts, it directly reads and writes data from this file.

No server.
No configuration.
No administrator.

This simplicity is one of SQLite's biggest strengths.

---

# When Should You Use SQLite?

SQLite is an excellent choice when:

- Learning SQL
- Building desktop applications
- Developing mobile apps
- Creating prototypes
- Working with embedded devices
- Developing offline-first applications
- Building small to medium-sized projects
- Creating local storage for applications

---

# Key Takeaways

- SQLite is a lightweight relational database.
- It stores everything in a single file.
- It does not require a database server.
- It supports standard SQL.
- It is ACID compliant.
- It is cross-platform and portable.
- It is one of the most widely used database engines in the world.
- It is ideal for embedded, mobile, desktop, and offline applications.

---

# Summary

SQLite is a fast, lightweight, and serverless relational database engine designed for simplicity and portability. Because it requires no installation or administration and stores an entire database in a single file, it has become one of the most popular database solutions for mobile applications, desktop software, embedded systems, and learning SQL. For beginners, SQLite provides an excellent introduction to relational databases while also being powerful enough for many real-world applications.

---

# Next Topic

➡ **02_history.md — History of SQLite**