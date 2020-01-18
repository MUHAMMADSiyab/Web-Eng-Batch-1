// JS Functions
// Call the function
findGrade(50);

// Hoist

// 1. Function Declaration
function findGrade(per) {
  // Function body
  if (per > 70) {
    console.log("GRADE A");
  } else if (per > 60) {
    console.log("GRADE B");
  } else if (per > 50) {
    console.log("GRADE C");
  } else if (per > 40) {
    console.log("GRADE D");
  } else if (per === 33 || per > 33) {
    console.log("GRADE E");
  } else {
    console.log("FAIL");
  }
}

// Function Expression
var addNumbers = function() {
  return 4 + 8;
};

const sum = addNumbers();

console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);
