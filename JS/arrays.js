// JS Arrays Functions
let names = ["John", "Sara", "Smith", "Brad", "Herry"];

// Push - end
names.push("Tim");

// Unshift - start
names.unshift("Sohail");

// Pop - end
let p = names.pop();

// console.log(`${p} is removed from the array`);

// Shift - start
names.shift();

// Join
let joined = names.join("|");

const numbers = [23, 45, 60, 70, 80];

// Concat
let merged = names.concat(numbers, ["A", "B", "C"]);

// Splice
names.splice(1, 1, "Usman", "Jawwad");

// Slice
console.log(names.slice(0, names.length));

// console.log(eval(numbers.join("+")));

console.log(Math.random());
