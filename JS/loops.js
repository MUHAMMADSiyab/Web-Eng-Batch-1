/** ----------- JS Loops ------------- */

// 1. `for` Loop

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    // Skips the 5
    continue;
  }

  //   console.log(i);
}

/** ARRAY STARTS FROM ZERO */

var students = ["Sohail", "Jawwad", "Usman", "Salman", "Ahtisham"];

// console.log(students.length);

for (var i = 0; i < students.length; i++) {
  console.log("The student name is " + students[i]);
}

// TODO
var number = 4;

var user = "john";
var age = 28;

// console.log("The " + user + " is " + age + " years old");

// console.log(number + " X " + 3 + " = " + 12);
