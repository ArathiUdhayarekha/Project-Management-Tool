function addTask() {
    var taskName = document.getElementById('task-name').value;
    if (taskName !== '') {
        var taskList = document.getElementById('task-list');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(taskName));
        taskList.appendChild(li);
        document.getElementById('task-name').value = '';
    }
}
