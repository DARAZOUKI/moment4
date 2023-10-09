// Get DOM elements
const todoInput = document.getElementById('newtodo');
const addTodoButton = document.getElementById('newtodobutton');
const todolist = document.getElementById('todolist');
const clearAllButton = document.getElementById('clearbutton');
const message = document.getElementById('message');

// Load existing "to-do" items from Web Storage when the page loads
window.onload = function() {
    loadStorage();
};

// Add a "to-do" item to the list
function addItem() {
    const todoText = todoInput.value.trim();
    
    if (checkItemText(todoText)) {
        addTodoToList(todoText);
        storeItem(todoText);
        todoInput.value = ''; // Rensa textfältet
        message.textContent = ''; // Rensa meddelande
    } else {
        message.textContent = 'Texten måste vara minst fem tecken lång.';
    }
}


// Delete a "to-do" item by clicking on it
function deleteItem(event) {
    const listItem = event.target;
    
    if (listItem.tagName === 'LI') {
        listItem.remove();
        removeTodoFromLocalStorage(listItem.textContent);
    }
}
// Remove a "to-do" item from local storage by its text
function removeTodoFromLocalStorage(todoText) {
   // Get the array of "to-do" items from local storage or create an empty array if none exists
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // Find the index of the todoText in the array
    const index = todos.indexOf(todoText);
    
    if (index !== -1) {
        // Remove the todoText from the array
        todos.splice(index, 1);
       // Update local storage with the modified array (removing the deleted todoText)
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
// Check if the entered text contains five or more characters
function checkItemText(text) {
    return text.length >= 5;
}

// Add a "to-do" item to the list in the DOM
function addTodoToList(todoText) {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    // Add a click event listener to delete the todo item when clicked
  listItem.addEventListener('click', deleteItem);
  
    todolist.appendChild(listItem);
}

// Store a "to-do" item in Web Storage
function storeItem(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load "to-do" items from Web Storage
function loadStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(function(todo) {
        addTodoToList(todo);
    });
}

// Clear the entire list and Web Storage
function clearStorage() {
    todolist.innerHTML = '';
    localStorage.removeItem('todos');
}

// Add event listeners
addTodoButton.addEventListener('click', addItem);
todolist.addEventListener('click', deleteItem);
clearAllButton.addEventListener('click', clearStorage);
