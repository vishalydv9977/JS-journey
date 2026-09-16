// Primitive Data Types

/* String	"Hello"
Number	25, 3.14
Boolean	true, false
Undefined	let x;
Null	let x = null;
BigInt	12345678901234567890n
Symbol	Symbol("id")
 */
let name = "Vishal";      // String
let age = 20;             // Number
let isStudent = true;     // Boolean
let x;                    // Undefined
let y = null;             // Null
let big = 123n;           // BigInt
let id = Symbol("id");    // Symbol

// Non-Primitive / Reference Data Type
/**
 Jisme multiple values Store kr sake usko non primitive kehte hai

 Array, Function, Object etc.
 */
// object 

let student = {
    name: "Vishal",
    age: 20,
    branch: "IT"
};
// Array
let marks = [80, 75, 90];  // Array

function hello() {         // Function
    console.log("Hello");
}