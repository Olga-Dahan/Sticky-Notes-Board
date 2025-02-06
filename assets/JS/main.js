"use strict";

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



function validateDate(theContent, theDate, theTime) {

    if (theContent === "") {
        alert("Missing task");
        return 0;
    }

    if (theTime === "") {
        alert("Missing time");
        return 0;
    }

    if (theDate === "") {
        alert("Missing date");
        return 0;
    }

    let selectedDate = new Date(theDate);
    const currentDate = new Date();


    if (selectedDate <= currentDate) {
        alert("Please select a future date");
        return 0;
    }

    return 1;
}