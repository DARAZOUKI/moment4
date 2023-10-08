// Hämta DOM-element
const todoInput = document.getElementById('newtodo');
const addTodoButton = document.getElementById('newtodobutton');
const todolist = document.getElementById('todolist');
const clearAllButton = document.getElementById('clearbutton');
const message = document.getElementById('message');

// Ladda befintliga "att göra"-poster från Web Storage när sidan laddas
window.onload = function() {
    loadStorage();
};

// Lägg till en "att göra"-post till listan
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


// Radera en "att göra"-post genom att klicka på den
function deleteItem(event) {
    const listItem = event.target;
    
    if (listItem.tagName === 'LI') {
        listItem.remove();
        removeTodoFromLocalStorage(listItem.textContent);
    }
}
function removeTodoFromLocalStorage(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // Find the index of the todoText in the array
    const index = todos.indexOf(todoText);
    
    if (index !== -1) {
        // Remove the todoText from the array
        todos.splice(index, 1);
        // Update local storage with the modified array
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
// Kontrollera om inmatad text innehåller fem eller fler tecken
function checkItemText(text) {
    return text.length >= 5;
}

// Lägg till en "att göra"-post i listan
function addTodoToList(todoText) {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    // Add a click event listener to delete the todo item when clicked
  listItem.addEventListener('click', deleteItem);
  
    todolist.appendChild(listItem);
}

// Spara "att göra"-post till Web Storage
function storeItem(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Ladda "att göra"-poster från Web Storage
function loadStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(function(todo) {
        addTodoToList(todo);
    });
}

// Rensa hela listan och Web Storage
function clearStorage() {
    todolist.innerHTML = ''; // Clear the list in the DOM
    localStorage.removeItem('todos'); // Remove the data from local storage
}

// Lägg till händelsehanterare
addTodoButton.addEventListener('click', addItem);
todolist.addEventListener('click', deleteItem);
clearAllButton.addEventListener('click', clearStorage);

