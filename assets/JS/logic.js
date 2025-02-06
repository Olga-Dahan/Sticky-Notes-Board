"use strict";

let init = () => {
    buildTasks();
}

function addTask(content, date, time) {

    const task = {
        content,
        date,
        time,
    };

    const tasks = getTasks();
    tasks.push(task);

    saveTasks(tasks);

    const div_tasks = document.getElementById("tasks");
    let last_div = document.createElement("div");
    last_div.innerHTML = `<div id="note" class="fade-in">

    <button id="myButton" onclick="deleteTask(${tasks.length - 1})"><i class="bi bi-x-square-fill"></i></button>
    <br>
      <div id="myContent">${task.content}</div>
      <br>
      <div id="myDate">${task.date}<br>${task.time}</div>

  </div>`;

    div_tasks.appendChild(last_div);

}


function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return JSON.parse(tasks) || [];
}



function deleteTask(index) {
    const tasks = getTasks();

    tasks.splice(index, 1);

    saveTasks(tasks);

    buildTasks();
}
