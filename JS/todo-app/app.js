const form = document.getElementById("todo-form");
const todoName = document.getElementById("todo-name");
const todosList = document.getElementById("todos-list");

form.addEventListener("submit", addTodo);

// Add todo
function addTodo(e) {
  // Prevent the page from reloading
  e.preventDefault();

  const todoKey = `todo_item_${localStorage.length + 1}`;

  // Save to localStorage
  localStorage.setItem(todoKey, todoName.value);

  addItemToDOM(todoKey, todoName.value);

  //   Clear input
  todoName.value = "";
}

// Get todos
function getTodos() {
  const keys = Object.keys(localStorage);

  keys.forEach(function(key) {
    if (key.startsWith("todo_item_")) {
      addItemToDOM(key, localStorage.getItem(key));
    }
  });
}

/**
 * @method addItemToDOM
 * @param { String } todoKey
 * @param { String } todoName
 */
function addItemToDOM(todoKey, todoName) {
  // Add to the DOM
  const li = document.createElement("li");
  li.className = "list-group-item";
  const todoContent = document.createTextNode(todoName);

  //  Add delete button also
  const btn = document.createElement("button");
  btn.className = "btn btn-sm btn-danger btn-delete float-right";
  btn.value = todoKey;
  const btnContent = document.createTextNode("x");
  btn.appendChild(btnContent);

  li.appendChild(todoContent);
  li.appendChild(btn);

  //   Append newly created `li` to the list
  todosList.appendChild(li);
}

getTodos();
