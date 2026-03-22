let n = 123;                // Number      | Infinity, -Infinity и NaN
                            //=========================================================================================
const bigInt = 123450n;     // BigInt      | Integers of arbitrary length that exceed the safe range of the Number type
                            //=========================================================================================
let str = "Hello";          // String      | May contain zero or more characters; no separate type for a single character
                            //=========================================================================================
let isAdmin = true;         // Boolean     | a Boolean type that has only two values: true ("yes") and false ("no")
                            //=========================================================================================
let age = null;             // null        | A special value representing "nothing," "empty," or "value unknown"
                            //=========================================================================================
let x = undefined;          // undefined   | automatically assigned to a variable if no specific value has been assigned to it
                            //=========================================================================================
let id = Symbol("id");      // Symbol      | A unique and immutable identifier, often used as property keys for objects
                            //=========================================================================================
let user = {                // Object      | A complex data structure for storing collections. like arrays and functions
    name: "John" 
};


// Dynamic typing: JavaScript is a dynamically typed language, which allows the same variable to hold values of different types at different times

// The `typeof` operator error: Calling `typeof null` returns "object". This is an officially recognized bug in the language, retained for backward compatibility; in reality, null is a separate primitive type, not an object

// Functions: Although typeof returns "function" for them, technically there is no separate "function" data type in JavaScript—they are specialized objects

// Immutability of primitives: All primitive data types are immutable, meaning their value cannot be changed directly; you can only assign a new value to the variable

// In contrast, objects are mutable (their contents can be changed)

// Memory storage: Primitives are copied by value, while objects are passed and copied by reference to their memory address
// In modern engines, such as V8, all values and objects are actually stored on the heap
