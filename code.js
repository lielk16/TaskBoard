let display = document.getElementById("display");
let taskData = document.getElementById("userTask");
let date = document.getElementById("userDate");
let hour = document.getElementById("userHour");
let tasks = [];
loadFromLocaleStorage();

function addTask() {
    let tempTask = { taskData: userTask.value, date: userDate.value, hour: userHour.value }
    tasks.push(tempTask)
    displayTasks();
    loadToLocalStorage();
    reset();

}
function valditionInputs(){
    if(userTask.value!=="" && userDate.value!=="" && userHour.value!==""){
        addTask();
    }else{
        alert("You must fill all inputs!");
    }
}
function displayTasks() {
    display.innerHTML = ""
    tasks.forEach((item, i) => {
        display.innerHTML += `
        <div animate__fadeIn id="notes" class="notes">
    <div class="taskData">
        <p> ${tasks[i].taskData}</p>
    </div>
    <span class="spanTime"><p>${tasks[i].date}<br>${tasks[i].hour}</p>
    <button type = "button" class="btn btn-outline-danger" onclick="delItem(${i})"><i class="bi bi-trash3"></i></button>
    </span>
    </div>`
    })
}
function reset() {
    taskData.value="";
    date.value = "0"
    hour.value = "0"
}
function delItem(i) {
    tasks.splice(i, 1)
    displayTasks()
    loadToLocalStorage()
}
function loadToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function loadFromLocaleStorage() {
    if(JSON.parse(localStorage.getItem("tasks")!==null)){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    displayTasks();
    }
}
