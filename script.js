
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', addTask);
function addTask() {
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById("task-list")

    if (taskInput.value == "") {
        alert("Enter your task for today")
    } else {

        // create list item
        const li = document.createElement("li")
        li.textContent = taskInput.value

        // append list item to task list
        taskList.appendChild(li)

        // create delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<span class="material-symbols-outlined" style="color: red; background-color:transparent; font-size: 20px;">
        delete
        </span>`

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li)
        })
        // append delete button to list item
        li.appendChild(deleteButton)

    }
    taskInput.value = ""



}