// JS Objects

/** JSON - JavaScript Object Notation  */

const users = [
  {
    name: "John",
    age: 32,
    email: "brad@gmail.com",
    married: false,
    address: "Main street, Boston, MA"
  },
  {
    name: "Kim",
    age: 20,
    email: "kim@gmail.com",
    married: false,
    address: "Main street, Boston, MA"
  },
  {
    name: "Brad",
    age: 32,
    email: "brad@gmail.com",
    married: true,
    address: "Main street, Boston, MA"
  },
  {
    name: "Tim",
    age: 27,
    email: "tim@gmail.com",
    married: true,
    address: "Main street, California"
  }
];

users[0].name = "Usman";

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }

// Iterate through all the users in the users array
users.forEach(function(user) {
  console.log(user.name, user.email);
});
