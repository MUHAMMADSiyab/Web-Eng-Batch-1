// JS Conditions
const per = 45;
const fruit = "banana"

switch (fruit) {
    case "Orange":
        console.log("Orange")
        break;
    case "banana":
        console.log("banana");
        break

    default:
        console.log("No fruit")
        break;
}

// IF - ELSE IF - ELSE

// if (per > 70) {
//   console.log("GRADE A");
// } else if (per > 60) {
//   console.log("GRADE B");
// } else if (per > 50) {
//   console.log("GRADE C");
// } else if (per > 40) {
//   console.log("GRADE D");
// } else if (per === 33 || per > 33) {
//   console.log("GRADE E");
// } else {
//   console.log("FAIL");
// }

// SWITCH CASE
switch (true) {
  case (per > 70):
    document.getElementById('myheading').innerText = "GRADE A"
    break;

  case (per > 60):
    document.getElementById('myheading').innerText = "GRADE B"
    break;

  case (per > 50):
    document.getElementById('myheading').innerText = "GRADE C"
    break;

  case (per > 40):
    document.getElementById('myheading').innerText = "GRADE D"
    break;

  case (per === 33):
  case (per > 33):
    document.getElementById('myheading').innerText = "GRADE E"
    break;

  default:
    document.getElementById('myheading').innerText = "FAIL"
}
