# JavaScript Runtime

```mermaid
flowchart TB

    A[JavaScript Code]

    subgraph Engine["JavaScript Engine"]
        B[Call Stack]
        C[Memory Heap]
    end

    subgraph Runtime["Runtime Environment"]
        D[Web APIs / Node APIs]
        E[Callback Queue]
        F[Event Loop]
    end

    A --> B

    B --> D

    D --> E

    E --> F

    F --> B