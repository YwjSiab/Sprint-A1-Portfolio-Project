// Declaring variables using let and const
let userName = "Alice"; // A string variable
const userAge = 25; // A number constant
let isMember = true; // A boolean variable

// Checking and logging data types
console.log("User Name Type:", typeof userName); // Expected: string
console.log("User Age Type:", typeof userAge); // Expected: number
console.log("Membership Status Type:", typeof isMember); // Expected: boolean

// Arithmetic operations
let itemPrice = 20;
let quantity = 3;
let totalCost = itemPrice * quantity; // Multiplication

// Logical operator (Checking if the total cost exceeds 50)
let isExpensive = totalCost > 50;

// Using a conditional (ternary) operator
let priceCategory = isExpensive ? "Expensive" : "Affordable";

// Logging results
console.log("Total Cost:", totalCost); // Expected: 60
console.log("Is the total cost expensive?", isExpensive); // Expected: true
console.log("Price Category:", priceCategory); // Expected: Expensive

// Implicit type conversion (string + number → string)
let result = "Total: " + 100; 
console.log("Implicit Conversion:", result); // Expected: "Total: 100"

// Explicit type conversions
console.log("String to Number:", Number("42")); // Converts string "42" to number
console.log("Boolean to Number:", Number(true)); // Converts true to 1
console.log("Number to String:", String(123)); // Converts number 123 to string
console.log("Boolean Conversion:", Boolean(0)); // Converts 0 to false