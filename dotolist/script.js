// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener for the Add Task button
addTaskButton.addEventListener('click', addTask);

// Add task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-group','gap-2');
    // const buttonContainer = document.createElement('div');
    // buttonContainer.classList.add('d-flex', );
    // Add complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('btn', 'btn-success', 'btn-sm');
    completeButton.addEventListener('click', () => toggleComplete(listItem));

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.addEventListener('click', () => deleteTask(listItem));

    // Append buttons to the container
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    // Append the button container to the list item
    listItem.appendChild(buttonContainer);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Toggle task completion
function toggleComplete(listItem) {
    listItem.classList.toggle('completed');
}

// Delete task from the list
function deleteTask(listItem) {
    taskList.removeChild(listItem);
}
