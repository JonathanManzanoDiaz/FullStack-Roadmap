// INPUT
let input = document.querySelector(".inputToDo");
// BUTTON ADD
let addBtn = document.querySelector(".addBtn");
// TODOS LIST
let todos = document.querySelector(".todos");

// SEARCH INPUT
let searchInput = document.querySelector(".searchToDo");

// ARRAY THAT STORES THE DATA TYPED
let arr = [];

// Function to load to-do list from localStorage
function loadTodos() {
  // Retrieve existing to-do list from localStorage
  let storedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
  arr = storedTodos; // Update 'arr' with retrieved data

  // If there are items in the array, generate the corresponding list items
  if (arr.length > 0) {
    arr.forEach((itemValue) => {
      let li = document.createElement("li");
      li.innerHTML = `<span>${itemValue}</span> <button class="delBtn">X</button>`;
      todos.appendChild(li);

      // Add event listener for deletion
      li.querySelector(".delBtn").addEventListener("click", function () {
        todos.removeChild(li);
        arr = arr.filter((i) => i !== itemValue);
        localStorage.setItem("todoList", JSON.stringify(arr));
      });
    });
  }
}

// Call the loadTodos function on page load to populate the list
loadTodos();

// LISTEN THE BUTTON ADD WHEN CLICKED 'ADD'
addBtn.addEventListener("click", function (e) {
  // PREVENTS THE UPDATE OF THE PAGE
  e.preventDefault();
  // PUSH THE VALUE OF INPUT TO THE ARRAY
  let itemValue = input.value;
  arr.push(itemValue);

  // Stringify the updated 'arr' and store it in localStorage
  localStorage.setItem("todoList", JSON.stringify(arr));
  // CREATE ELEMENT LI IN TODOS
  let li = document.createElement("li");
  // EDIT THE HTML IN 'LI' WE RECENTLY CREATED
  li.innerHTML = `<span>${itemValue}</span> <button class="delBtn">X</button>`;
  // ADD THE LI IN THE LIST OF ELEMENT I CREATED FOR DISPLAY IN TODO PROJECT
  todos.appendChild(li);

  // DELETE ELEMENTS OF THE ARRAY AND DOM
  li.querySelector(".delBtn").addEventListener("click", function () {
    todos.removeChild(li);
    arr = arr.filter((i) => i !== itemValue);
    localStorage.setItem("todoList", JSON.stringify(arr));
  });

  // CLEAN THE INPUT
  input.value = "";
});

searchInput.addEventListener("input", function () {
  // CONVERT ALL THE VALUE OF THE INPUT IN LOWER CASE
  let filter = searchInput.value.toLowerCase();
  // GET ELEMENTS BY TAG NAME IN LI
  let items = todos.getElementsByTagName("li");
  // CONVERT ITEMS IN AN ARRAY FOR USE THE FOR EACH
  Array.from(items).forEach(function (item) {
    // EXTRACT THE CONTEXT IN ITEM AND CONVERT IT IN LOWER CASE FOR MATCHING
    let text = item.firstChild.textContent.toLowerCase();
    // TEXT INCLUDES THE VALUE OF INPUT
    if (text.includes(filter)) {
      // IF INCLUDES IT, (SETS DISPLAY IN EMPTY STRING)
      item.style.display = "";
    } else {
      // IF NOT INCLUDES IT == NOT DISPLAY IT
      item.style.display = "none";
    }
  });
});
