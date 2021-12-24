var form = document.getElementById('form');
var taskList = document.getElementById('tasks');
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);

function addTask(e){
    e.preventDefault();

    var newTask = document.getElementById('task').value;
    const newTaskElement = createTaskElement(newTask);
    taskList.appendChild(newTaskElement);
}

function removeTask(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure? you idiot')){
            var li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
    else if(e.target.classList.contains('done')){
        alert('congrats idiot now stfu');
        var le = e.target.parentElement;
        taskList.removeChild(le);
    }
}

// bitch looks more clean now
function createTaskElement(taskName) {
    const taskElement = document.createElement("li");
    taskElement.appendChild(document.createTextNode(taskName));

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    deleteBtn.className = "delete";

    const doneBtn = document.createElement("button");
    doneBtn.appendChild(document.createTextNode("Done"));
    doneBtn.className = "done";

    taskElement.appendChild(deleteBtn);
    taskElement.appendChild(doneBtn);
    return taskElement;
}
