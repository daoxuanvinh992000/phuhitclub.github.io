let issue = {
    id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'high',
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
};

const root = document.getElementById("root");

function showViewDetail() {
    let viewDetail = document.getElementsByClassName('view-detail')[0];
    viewDetail.style.display = "block";
    document.getElementById('title').value = issue.title;
    document.getElementById('description').value = issue.description;
    document.getElementById('type').value =issue.type;
    document.getElementById('priority').value = issue.priority;
    document.getElementById('createdBy').value = issue.createdBy;
    document.getElementById('assignee').value = issue.assignee;
    document.getElementById('estimate').value = issue.estimate;
    document.getElementById('state').value = issue.state;
}

function hideViewDetail(){
    let viewDetail = document.getElementsByClassName('view-detail')[0];
    viewDetail.style.display = "none";
}

function showIssueInfo() {
    const pre = document.getElementsByTagName('pre')[0];
    pre.innerText = JSON.stringify(issue, null, 4);
    console.log(issue)
}

function saveIssue() {
    issue.title = document.getElementById('title').value;
    issue.description = document.getElementById('description').value;
    issue.type = document.getElementById('type').value;
    issue.priority = document.getElementById('priority').value;
    issue.createdBy = document.getElementById('createdBy').value;
    issue.assignee = document.getElementById('assignee').value;
    issue.estimate = document.getElementById('estimate').value;
    issue.state = document.getElementById('state').value;
    hideViewDetail();
    showIssueInfo();
}