
const addButton = document.getElementById('add-button')
const form = document.querySelector('form')
const taskList = document.getElementById("task-list")
const taskInput = document.getElementById('task-input').value


form.addEventListener("submit", function (e) {
    e.preventDefault()
    addTask()
})



function addTask() {
    const taskInput = document.getElementById('task-input')

    if (taskInput.value == "") {
        alert("Enter your task for today")
    } else {

        // create list item
        const todoList = document.createElement("li")
        todoList.textContent = taskInput.value

        // append list item to task list
        taskList.appendChild(todoList)

        // create delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#FF0000"/></svg>`
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(todoList)
        })
        // append delete button to list item
        todoList.appendChild(deleteButton)

        const markButton = document.createElement("button")
        markButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" class="show"/></svg>`
        markButton.addEventListener('click', function () {
            taskList.classList.add('completed')
        })
        todoList.append(markButton)


    }
    // clear input field
    taskInput.value = ""

}

