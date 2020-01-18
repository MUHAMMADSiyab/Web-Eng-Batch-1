// JS String Functions
const msg = "   Hello World     ";
const hobbies = "cricket, football, gaming, boxing";

console.log(msg.length);

// Functions
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.indexOf("d"));
console.log(msg.substr(6, 5));
console.log(msg.repeat(10));
console.log(msg.replace("World", "Xplode"));
console.log(hobbies.split(","));
console.log(msg.startsWith("H"));
console.log(msg.endsWith("d"));
console.log(msg.concat(hobbies));
console.log(msg.trim().length);
