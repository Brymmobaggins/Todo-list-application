
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', addTask);
function addTask() {
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById("task-list")

    if (taskInput.value == "") {
        alert("Enter your task for today")
    } else {

        const li = document.createElement("li")
        li.textContent = taskInput.value

        taskList.appendChild(li)

    }
    taskInput.value = ""



}