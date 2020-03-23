var board = {
    name: 'Workflow Mangement',
    panels: ['todo', 'processing', 'inreview', 'done'],
    tasks: [
        {
            id: 't1',
            title: 'task 1',
            description: 'task 1',
            state: 'todo'
        },
        {
            id: 't2',
            title: 'task 2',
            description: 'task 2',
            state: 'todo'
        }
    ]
}

const root = new Root();

function onLoad() {
    root.init(board);
    console.log(root);
}