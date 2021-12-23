var form = document.getElementById('form');
var taskList = document.getElementById('tasks');
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);

function addTask(e){
    e.preventDefault();
    var newTask = document.getElementById('task').value;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(newTask));
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    var doneBtn = document.createElement('button');
    doneBtn.appendChild(document.createTextNode('Done'));
    doneBtn.className = 'done';
    deleteBtn.className="delete";
    doneBtn.className = 'done';
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    taskList.appendChild(li);
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
