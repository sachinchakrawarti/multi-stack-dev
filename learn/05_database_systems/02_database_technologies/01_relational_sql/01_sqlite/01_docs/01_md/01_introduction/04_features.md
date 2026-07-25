 # Features of SQLite

## What Are SQLite Features?

SQLite provides a rich set of features that make it one of the most widely used embedded relational database management systems (RDBMS). Despite being lightweight and serverless, SQLite supports many advanced database capabilities such as ACID transactions, indexing, triggers, views, foreign keys, and full SQL support.

These features allow SQLite to power millions of applications ranging from mobile apps to web browsers and IoT devices.

---

# Core Features of SQLite

## 1. Serverless Architecture

SQLite does not require a separate database server.

Unlike MySQL or PostgreSQL, SQLite runs directly inside the application.

### Benefits

- Zero configuration
- No server installation
- Easy deployment
- Low maintenance

Example

```
Application
      │
      ▼
SQLite Library
      │
      ▼
database.db
```

---

## 2. Self-Contained

SQLite is contained within a single library.

Everything needed to read and write the database is included in one small library.

Advantages

- Easy distribution
- No external dependencies
- Simple backup

---

## 3. Zero Configuration

No administrator is required.

There is no need to:

- Create database users
- Configure ports
- Start services
- Install database servers

Simply create a database file and begin using it.

---

## 4. Single Database File

An entire database is stored inside one file.

Example

```
library.db
```

This single file contains:

- Tables
- Indexes
- Views
- Triggers
- Data
- Schema

Benefits

- Easy copying
- Easy backup
- Easy sharing
- Easy migration

---

## 5. Lightweight

SQLite is extremely small.

Typical library size

- Around 600 KB to 1 MB

Because of its small size, SQLite is ideal for:

- Mobile apps
- Embedded systems
- Raspberry Pi
- IoT devices

---

## 6. Fast Performance

SQLite performs very well for:

- Reading data
- Writing moderate amounts of data
- Local database operations

Reasons

- No network communication
- Runs inside the application
- Optimized file format
- Efficient indexing

---

## 7. ACID Transactions

SQLite fully supports ACID properties.

### Atomicity

Either all operations succeed or none do.

### Consistency

Database always remains valid.

### Isolation

Transactions do not interfere with one another.

### Durability

Committed data is permanently saved.

Example

```
BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;
```

---

## 8. Supports Standard SQL

SQLite supports most SQL features including

- SELECT
- INSERT
- UPDATE
- DELETE
- CREATE TABLE
- ALTER TABLE
- DROP TABLE
- JOIN
- GROUP BY
- ORDER BY
- HAVING
- UNION
- Subqueries

Example

```sql
SELECT name, price
FROM products
WHERE price > 500
ORDER BY price DESC;
```

---

## 9. Supports Multiple Data Types

SQLite uses dynamic typing.

Common storage classes

- NULL
- INTEGER
- REAL
- TEXT
- BLOB

Example

```sql
CREATE TABLE student
(
    id INTEGER,
    name TEXT,
    marks REAL
);
```

---

## 10. Dynamic Typing

Unlike many databases, SQLite allows storing different data types in the same column.

Example

```
Age Column

20
21
"Unknown"
NULL
```

This flexibility simplifies development.

---

## 11. Supports Foreign Keys

SQLite supports referential integrity.

Example

```sql
CREATE TABLE department
(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE employee
(
    id INTEGER PRIMARY KEY,
    department_id INTEGER,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);
```

---

## 12. Supports Indexes

Indexes improve query performance.

Example

```sql
CREATE INDEX idx_name
ON employee(name);
```

Benefits

- Faster searching
- Faster sorting
- Faster joins

---

## 13. Supports Views

Views provide virtual tables.

Example

```sql
CREATE VIEW active_users AS

SELECT *

FROM users

WHERE active = 1;
```

Advantages

- Simplifies queries
- Improves readability
- Better security

---

## 14. Supports Triggers

Triggers automatically execute SQL when events occur.

Example

```sql
CREATE TRIGGER log_insert

AFTER INSERT

ON employee

BEGIN

INSERT INTO logs(message)

VALUES('Employee Added');

END;
```

Uses

- Audit logs
- Validation
- Automatic updates

---

## 15. Supports Constraints

SQLite supports

- PRIMARY KEY
- FOREIGN KEY
- UNIQUE
- CHECK
- NOT NULL
- DEFAULT

Example

```sql
CREATE TABLE users
(
    id INTEGER PRIMARY KEY,

    email TEXT UNIQUE,

    age INTEGER CHECK(age >= 18)
);
```

---

## 16. Portable Database

SQLite databases work across

- Windows
- Linux
- macOS
- Android
- iOS

Simply copy the database file.

---

## 17. Cross Platform

SQLite supports

- Windows
- Linux
- macOS
- Android
- iOS
- Embedded devices

No modifications are usually required.

---

## 18. Open Source

SQLite is released into the public domain.

Advantages

- Free forever
- No licensing cost
- Commercial use allowed
- Educational use allowed

---

## 19. Reliable

SQLite is tested extensively.

The project maintains

- High stability
- Backward compatibility
- Extensive automated testing

Billions of devices use SQLite every day.

---

## 20. Embedded Database

SQLite becomes part of your application.

Architecture

```
Application

      │

SQLite Library

      │

Database File
```

No external process is needed.

---

## 21. Transaction Support

Supports

- BEGIN
- COMMIT
- ROLLBACK
- SAVEPOINT

Example

```sql
BEGIN;

UPDATE products
SET stock = stock - 1;

COMMIT;
```

---

## 22. Backup API

SQLite allows online backups without shutting down the application.

Useful for

- Scheduled backups
- Data migration
- Cloud synchronization

---

## 23. Full Unicode Support

SQLite stores Unicode text.

Supports

- English
- Hindi
- Japanese
- Chinese
- Arabic
- Korean
- Emoji

Example

```sql
INSERT INTO language(name)

VALUES('हिन्दी');
```

---

## 24. Large Database Support

SQLite supports databases up to approximately

- 281 TB

Actual limits depend on

- File system
- Operating system
- Configuration

---

## 25. Extensions Support

SQLite can be extended with

- JSON functions
- Full Text Search (FTS5)
- R-Tree indexes
- Math functions
- Custom C extensions

Example

```sql
SELECT json_extract(data, '$.name');
```

---

# Summary Table

| Feature | Description |
|----------|-------------|
| Serverless | No database server required |
| Self-contained | Single library |
| Zero Configuration | Ready to use immediately |
| Single File | Entire database stored in one file |
| Lightweight | Small library size |
| Fast | Excellent local performance |
| ACID | Reliable transactions |
| SQL Support | Supports standard SQL |
| Dynamic Typing | Flexible storage |
| Foreign Keys | Referential integrity |
| Indexes | Faster queries |
| Views | Virtual tables |
| Triggers | Automatic actions |
| Constraints | Data validation |
| Portable | Easy to copy databases |
| Cross Platform | Runs everywhere |
| Open Source | Public domain |
| Reliable | Extensively tested |
| Embedded | Built into applications |
| Transactions | Safe updates |
| Backup API | Online backups |
| Unicode | Multi-language support |
| Large Databases | Supports very large files |
| Extensions | JSON, FTS, R-Tree and more |

---

# Key Takeaways

- SQLite is a lightweight, embedded relational database.
- It requires no server or installation.
- Entire databases are stored in a single portable file.
- SQLite fully supports ACID transactions.
- It includes support for indexes, views, triggers, foreign keys, and constraints.
- SQLite is extremely reliable, fast, cross-platform, and free to use.
- It is widely used in Android, iOS, browsers, desktop software, IoT devices, and embedded systems.

---

# What's Next?

After learning the features of SQLite, continue with:

1. SQLite Architecture
2. SQLite Installation
3. SQLite Tools
4. Creating Your First Database
5. SQLite Data Types
6. SQLite Commands (DDL, DML, DCL, TCL)
7. CRUD Operations
8. Constraints
9. Joins
10. Indexes and Performance Optimization