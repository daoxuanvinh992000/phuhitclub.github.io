const generateTask = (task) => {
    let taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.id = task.id;
    taskElement.setAttribute('state', task.state);
    taskElement.innerHTML = `<p>${task.title}</p>
        <p>${task.description}</p>`;
    taskElement.setAttribute('draggable', true);
    taskElement.addEventListener('dragstart', onTaskDragStart)
    return taskElement;
}

const onTaskDragStart = (ev) => {
    ev.dataTransfer.setData("taskId", event.target.id);
    ev.dataTransfer.setData("oldState", event.target.getAttribute('state'));
}