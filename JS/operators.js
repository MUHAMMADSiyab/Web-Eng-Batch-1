// JS Operators

// Assignment Operators
console.log("ASSIGNMENT");
var user = "john";
var x = 5;

x += 4;
x -= 4;

var y = 10;
y *= 5;
y /= 5;
y %= 4;
y **= 4;

console.log("ARITHMETIC");
// Arithmetic Operator
var num = 20;
var num2 = 10;

console.log("Addition", num + num2);
console.log("Subtraction", num - num2);
console.log("Multiplication", num * num2);
console.log("Division", num / num2);
console.log("Remainder", num % num2);
console.log("Pow", num ** num2);

console.log("COMPARISON");

// Comparison Operators
var person = "20";
var n = 20;
var z = 5;

console.log(person == n); // Equal to
console.log(person === n); // Equal & identical
console.log(person != n); // Not equal to
console.log(person !== n); // Not equal & not identical
console.log(z > n); // Greater than
console.log(z < n); // Less than
console.log(z <= n); // Less than or equal to
console.log(z >= n); // Greater than or equal to

// Logical Operators
var a = 6;
var b = 3;

console.log("LOGICAL");

console.log(a == b && a > b);
console.log(a == b || a > b);
