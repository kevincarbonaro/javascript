let taskList = ['Plan', 'Design', 'Code'];
let taskDoneList = [true, false, false];

function add() {
    let taskNew = document.getElementById('txtadd').value;
    taskList.push(taskNew);
    taskDoneList.push(false);
    document.getElementById('txtadd').value = '';
    update();
}

function update() {
    let taskListHtml = '';

    for (let taskId in taskList) {
        taskListHtml += getRowHtml(taskId);
    }

    document.getElementById('tasklist').innerHTML = taskListHtml;
}

function getRowHtml(taskId) {
    let rowHtml = '';
    let taskDoneClass = '';

    rowHtml += '<div id="row-' + taskId + '" class="row">';
    rowHtml += '<div class="tasktitle">' + taskList[taskId] + '</div>';
    rowHtml += '<div class="taskactions">';

    if (taskDoneList[taskId]) {
        taskDoneClass = 'done';
    }
    else {
        taskDoneClass = '';
    }
    rowHtml += '<div id="btndone-' + taskId + '" class="btnaction ' + taskDoneClass + '" onclick="done(' + taskId + ')">DONE</div>';

    rowHtml += '<div id="btndelete-' + taskId + '" class="btnaction btndelete" onclick="del(' + taskId + ')">DELETE</div>';
    rowHtml += '</div>';
    rowHtml += '</div>';

    return rowHtml;
}

function del(taskId) {
    taskList.splice(taskId, 1);
    taskDoneList.splice(taskId, 1);
    update();
}

function done(taskId) {
    taskDoneList[taskId] = !taskDoneList[taskId];
    update();
}