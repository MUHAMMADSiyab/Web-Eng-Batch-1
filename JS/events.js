// JS Events
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const h1 = document.getElementById("content");
const myInput = document.getElementById("myInput");

// Attach event listener
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
myInput.addEventListener("keydown", handleEvent);

// Function to run when the event is triggered
let i = 0;
function increment(e) {
  i++;
  h1.innerHTML = i;
}

function decrement(e) {
  i--;
  h1.innerHTML = i;
}

function handleEvent(e) {
  // Detecting `Enter` key
  if (e.keyCode === 13) {
    console.log("You hit enter");
  }
}

document.querySelector("body").addEventListener("mousemove", function(e) {
  //   console.log(e.clientX);
});

// addEventListener version
window.addEventListener("online", function(e) {
  console.log("You are now connected to the network.");
});

window.addEventListener("offline", function(e) {
  console.log("You are disconnected from the network.");
});
