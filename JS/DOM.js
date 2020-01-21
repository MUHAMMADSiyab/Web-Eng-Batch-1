// JS DOM (Document Object Model)

const w = window.innerWidth;
const h = window.innerHeight;

// window.alert("Hello");

// if (window.confirm("Are you sure ?")) {
//   console.log("Yes, i'm sure !");
// } else {
//   console.log("No, i'm not sure !");
// }

// window.location.reload();
// console.log(window.location);

// DOCUMENT
const links = document.links;

// for (let i = 0; i < links.length; i++) {
//   links[i].text = "MY LINK"
// }

document.title = "My title";

// Select elements
const h1 = document.getElementById("myheading");

h1.innerHTML = "This is a <i>heading</i>";
h1.innerText = "This is a <i>heading</i>";
h1.style.fontSize = "2in";
h1.className = "styled";
h1.align = "center";

const lis = document.getElementsByTagName("li");

console.log(lis);

let i = 0;

Array.from(lis).forEach(function(li) {
  i++;
  li.innerHTML = `<h2>Item ${i}</h2>`;
  li.style.color = "red";
});
