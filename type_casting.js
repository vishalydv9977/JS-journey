// Explicit Type Casting means you manually convert a value from one datatype to another 
// using functions 
// like Number(), String(), or Boolean().

// Example 1: String → Number

let age = "20";

let numAge = Number(age);

console.log(numAge);        // 20
console.log(typeof numAge); // number

// Example 2: Number → String

let marks = 95;

let result = String(marks);

console.log(result);        // "95"
console.log(typeof result); // string

// Example 3: Number → Boolean
let num = 1;

let value = Boolean(num);

console.log(value); // true