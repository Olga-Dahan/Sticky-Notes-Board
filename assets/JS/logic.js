"use strict";


function addTask(content, date, time) {

    const task = {
        content,
        date,
        time,
    };

    const tasks = getTasks();
    tasks.push(task);

    saveTasks(tasks);
    addTaskToDOM(tasks.length - 1, task)

}


function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];

}



function deleteTask(index) {
    const tasks = getTasks();

    tasks.splice(index, 1);

    saveTasks(tasks);

    buildTasks();
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
