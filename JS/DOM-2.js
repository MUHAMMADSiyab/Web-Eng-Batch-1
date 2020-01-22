// DOM - P2

// Selecting element the CSS way
const elem = document.querySelector("input:checked");
const elems = document.querySelectorAll("input:checked");
const h1 = document.querySelector(".heading");
const body = document.querySelector("body");

const list = document.getElementById("myList");

// Append newly craeted `li` to the list
for (let i = 0; i < 10; i++) {
  // Creating elements
  const li = document.createElement("li");
  const content = document.createTextNode(`List Item ${i}`);
  li.appendChild(content);
  li.id = "item";
  list.appendChild(li);
}

list.lastElementChild.style.color = "orange";

const li = document.getElementById("item");

list.removeChild(li);
