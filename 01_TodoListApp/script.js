const taskInput = document.querySelector(".task-input input"),
    taskBox = document.querySelector(".task-box");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if (todos) {
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == "completed" ? "checked" : "";
            li += `<li class="task">
                     <label for="${id}">
                         <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                         <p class="${isCompleted}">${todo.name}</p>
                     </label>
                     <div class="settings">
                         <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                         <ul class="task-menu">
                             <li><i class="uil uil-pen"></i>Edit</li>
                             <li onclick="deleteTask(${id})"><i class="uil uil-trash"></i>Delete</li>
                         </ul>
                     </div>
                 </li>`;
        });
    }
    taskBox.innerHTML = li;
}
showTodo();

function showMenu(selectedTask) {
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != selectedTask) {
            taskMenu.classList.remove("show");
        }
    })
}

function deleteTask(deleteId) {
    // removing selected task from array/todos
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}

function updateStatus(selectedTask) {
    // getting paragraph that contains task name
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked");
        // updating the status of selected task to completed
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        // updating the status of selected task to pending
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!todos) {
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = { name: userTask, status: "pending" };
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});