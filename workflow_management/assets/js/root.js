class Root {
    
    constructor() {
        this.container = document.getElementById('root');
        this.panels = {};
    }

    init = (board) => {
        board.panels.forEach(name => {
            const tasks = board.tasks.filter(i => i.state === name);
            this.panels[name] = new Panel(name, tasks, this);
        });
    }
}