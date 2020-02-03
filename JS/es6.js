// Arrow Functions
function summ(num1, num2) {
  return num1 + num2;
}

const sum = (num1, num2) => num1 + num2;

// console.log(sum(6, 7));

const getUser = username => ({
  name: username,
  age: 45
});

// console.log(getUser("Usman"));

const btn = document.getElementById("myBtn");

const test2 = () => console.log(this);

btn.addEventListener("click", test2);

function test() {
  console.log(this.value);
}

// NOTE: Arrow function doesn't have its own THIS

const names = ["John", "Sara", "Smith", "Kyle"];

names.forEach(name => console.log(name));

// function (name) {
//     console.log(name)
// }
