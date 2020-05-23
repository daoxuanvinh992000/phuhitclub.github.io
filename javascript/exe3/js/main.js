let issue = {
    id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'high',
    allowFor: ['back_end', 'front_end', 'function_test', 'performance_test'],
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
};

const root = document.getElementById("root");
const issueForm = document.issueForm;

function showViewDetail() {
    let viewDetail = document.getElementsByClassName('view-detail')[0];
    viewDetail.style.display = "block";
    issueForm.title.value = issue.title;
    issueForm.description.value = issue.description;
    issueForm.type.value = issue.type;
    issueForm.priority.value = issue.priority;
    issueForm.createdBy.value = issue.createdBy;
    issueForm.assignee.value = issue.assignee;
    issueForm.estimate.value = issue.estimate;
    issueForm.state.value = issue.state;
    setCheckboxValue();
}

function hideViewDetail() {
    let viewDetail = document.getElementsByClassName('view-detail')[0];
    viewDetail.style.display = "none";
}

function showIssueInfo() {
    const pre = document.getElementsByTagName('pre')[0];
    pre.innerText = JSON.stringify(issue, null, 4);
}

function saveIssue() {
    issue.title = issueForm.title.value;
    issue.description = issueForm.description.value;
    issue.type = issueForm.type.value;
    issue.priority = issueForm.priority.value;
    issue.createdBy = issueForm.createdBy.value;
    issue.assignee = issueForm.assignee.value;
    issue.estimate = issueForm.estimate.value;
    issue.state = issueForm.state.value;
    issue.allowFor = getCheckboxValue();
    hideViewDetail();
    showIssueInfo();
}

function getCheckboxValue() {
    var ele = document.getElementsByName('allowFor');
    let allowFor = [];
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            allowFor.push(ele[i].value);
        }
    }
    
    return allowFor;
}

function setCheckboxValue() {
    const allowFor = document.getElementsByName("allowFor");
    for (i = 0; i < allowFor.length; i++) {
        allowFor[i].checked = false;
    }
    for (i = 0; i < issue.allowFor.length; i++) {
        document.getElementById(issue.allowFor[i]).checked = true;
    }
}