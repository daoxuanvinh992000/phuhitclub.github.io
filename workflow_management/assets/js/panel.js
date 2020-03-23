class Panel {

    constructor(name, tasks, root) {
        this.root = root;
        this.name = name;
        this.tasks = tasks;
        this.init();
    }

    init = () => {
        this.generatePanel();
        this.createTasks();
    }

    generatePanel = () => {
        this.generateContainer();
        this.generateTitle()
    }

    generateTitle = () => {
        this.title = document.createElement('div');
        this.title.className = 'panel-title';
        this.title.innerText = this.name;
        this.container.appendChild(this.title);
    }

    generateContainer = () => {
        this.container = document.createElement('div');
        this.container.id = this.name;
        this.container.className = 'panel';

        this.container.addEventListener('drop', this.onDrop);
        this.container.addEventListener('dragover', this.allowDrop);
        this.root.container.appendChild(this.container);
    }

    createTasks = () => {
        this.tasks.forEach(task => {
            const taskElement = generateTask(task);
            this.container.appendChild(taskElement);
        });
    }

    onDrop = (ev) => {
        ev.preventDefault();
        const taskId = ev.dataTransfer.getData('taskId');
        const oldState = ev.dataTransfer.getData('oldState');

        const oldIdx = this.root.panels[oldState].tasks.findIndex(item => item.id === taskId);
        
        let task = this.root.panels[oldState].tasks.splice(oldIdx, 1);
        task.state = this.name;
        this.tasks.push(task);
        ev.target.appendChild(document.getElementById(taskId));
    }

    allowDrop = (ev) => {
        ev.preventDefault();
    }
}