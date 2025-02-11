"use strict";

let init = () => {
  buildTasks();
}

init();

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];        // get YYYY-MM-DD
  document.getElementById("date").setAttribute("min", today);
});

function submitForm(event) {
  event.preventDefault();
  const theContent = document.getElementById("content").value;
  const theDate = document.getElementById("date").value;
  const theTime = document.getElementById("time").value;

  if (validateDate(theContent, theDate, theTime)) {
    addTask(theContent, theDate, theTime);
  }

  document.getElementById("myForm").reset();
}


function clearTask(event) {
  event.preventDefault();
  document.getElementById("myForm").reset();
}


function buildTasks() {

  const tasks = getTasks();

  let info = "";


  for (let i = 0; i < tasks.length; i++) {
    info += `
        <div id="note" >
        
            <button id = "myButton" onclick = "deleteTask(${i})"><i class="bi bi-x-square-fill"></i></button>
            <br>
            <div id="myContent">${tasks[i].content}</div>
            <br>
            <div id="myDate">${tasks[i].date}<br>${tasks[i].time}</div>
            
        </div>
    `;
  }

  document.getElementById("tasks").innerHTML = info;
}

function addTaskToDOM(index, task) {
  const div_tasks = document.getElementById("tasks");
  let last_div = document.createElement("div");
  last_div.innerHTML = `
    <div id="note" class="fade-in">
    <button id="myButton" onclick="deleteTask(${index})"><i class="bi bi-x-square-fill"></i></button>
    <br>
        <div id="myContent">${task.content}</div>
        <br>
        <div id="myDate">${task.date}<br>${task.time}</div>
    </div>
    `;

  div_tasks.appendChild(last_div);
}

