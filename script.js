
const addButton = document.getElementById('add-button')
const form = document.querySelector('form')


form.addEventListener("submit", function (e) {
    e.preventDefault()
    addTask()
})


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
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="#FF0000"/></svg>`

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li)
        })
        // append delete button to list item
        li.appendChild(deleteButton)

    }
    // clear input field
    taskInput.value = ""

}
