const slides = [
    {
        id: 1,
        type: "title",
        title: "JavaScript Data Types",
        subtitle: "Primitive & Non-Primitive Data Types"
    },
    {
        id: 2,
        type: "bullets",
        title: "Agenda",
        bullets: [
            "What is a Data Type?",
            "Why Data Types?",
            "Primitive Data Types",
            "Non-Primitive Data Types",
            "Stack vs Heap Memory",
            "Interview Questions",
            "Summary"
        ]
    },
    {
        id: 3,
        type: "bullets",
        title: "What is a Data Type?",
        bullets: [
            "A data type defines the kind of value stored in a variable.",
            "It determines what operations can be performed.",
            "JavaScript is a dynamically typed language.",
            "Variables can hold different types at different times."
        ]
    },
    {
        id: 4,
        type: "bullets",
        title: "Why Data Types?",
        bullets: [
            "Store different kinds of information.",
            "Improve code readability.",
            "Prevent logical mistakes.",
            "Help JavaScript understand values."
        ]
    },
    {
        id: 5,
        type: "bullets",
        title: "Primitive Data Types",
        bullets: JS_DATA.primitiveTypes
    },
    {
        id: 6,
        type: "code",
        title: "String",
        code: `let language = "JavaScript";\n\nconsole.log(language);\nconsole.log(typeof language);\n\n// JavaScript\n// string`
    },
    {
        id: 7,
        type: "code",
        title: "Number",
        code: `let age = 25;\nlet price = 199.99;\n\nconsole.log(typeof age);\nconsole.log(typeof price);\n\n// number\n// number`
    },
    {
        id: 8,
        type: "code",
        title: "Boolean",
        code: `let isLoggedIn = true;\nlet isAdmin = false;\n\nconsole.log(typeof isLoggedIn);\nconsole.log(typeof isAdmin);\n\n// boolean\n// boolean`
    },
    {
        id: 9,
        type: "code",
        title: "Undefined",
        code: `let city;\n\nconsole.log(city);\nconsole.log(typeof city);\n\n// undefined\n// undefined`
    },
    {
        id: 10,
        type: "code",
        title: "Null",
        code: `let user = null;\n\nconsole.log(user);\nconsole.log(typeof user);\n\n// null\n// object`
    },
    {
        id: 11,
        type: "code",
        title: "BigInt",
        code: `let number = 9007199254740991n;\n\nconsole.log(number);\nconsole.log(typeof number);\n\n// 9007199254740991n\n// bigint`
    },
    {
        id: 12,
        type: "code",
        title: "Symbol",
        code: `let id = Symbol("id");\n\nconsole.log(id);\nconsole.log(typeof id);\n\n// Symbol(id)\n// symbol`
    },
    {
        id: 13,
        type: "bullets",
        title: "Non-Primitive Data Types",
        bullets: JS_DATA.nonPrimitiveTypes
    },
    {
        id: 14,
        type: "code",
        title: "Object",
        code: `const student = {\n    id: 101,\n    name: "Rahul",\n    age: 22\n};\n\nconsole.log(student);\nconsole.log(typeof student);\n\n// {id: 101, name: 'Rahul', age: 22}\n// object`
    },
    {
        id: 15,
        type: "code",
        title: "Array",
        code: `const colors = [\n    "Red",\n    "Green",\n    "Blue"\n];\n\nconsole.log(colors);\nconsole.log(typeof colors);\n\n// ['Red', 'Green', 'Blue']\n// object`
    },
    {
        id: 16,
        type: "code",
        title: "Function",
        code: `function greet(name) {\n    return "Hello " + name;\n}\n\nconsole.log(greet("John"));\nconsole.log(typeof greet);\n\n// Hello John\n// function`
    },
    {
        id: 17,
        type: "table",
        title: "Stack vs Heap Memory",
        table: {
            headers: ["Feature", "Primitive", "Object"],
            rows: [
                ["Memory", "Stack", "Heap"],
                ["Copy Type", "Value", "Reference"],
                ["Mutable", "No", "Yes"],
                ["Speed", "Fast", "Flexible"]
            ]
        }
    },
    {
        id: 18,
        type: "bullets",
        title: "Primitive vs Object",
        bullets: [
            "Primitive values are immutable.",
            "Objects are mutable.",
            "Primitive values are stored in Stack.",
            "Objects are stored in Heap.",
            "Objects can contain multiple values."
        ]
    },
    {
        id: 19,
        type: "qa",
        title: "Interview Questions",
        questions: JS_DATA.interviewQuestions
    },
    {
        id: 20,
        type: "summary",
        title: "Summary",
        items: JS_DATA.summary
    },
    {
        id: 21,
        type: "end",
        title: "Thank You",
        subtitle: "Questions?"
    }
];