const $toDoForm = document.querySelector(".js-toDoForm"),
    $toDoInput = $toDoForm.querySelector("input"),
    $toDoList = document.querySelector(".js-toDoList");

// const formStyle = new CSSStyleDeclaration()
$toDoInput.style = {color:"red"};
const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    $toDoList.removeChild(li);
    const cleanToDos = toDos.filter(toDo => {
        console.log(li.id)
        return toDo.id !== parseInt(li.id);
    })
    console.log(cleanToDos)
    toDos = cleanToDos
    saveToDos();
    console.log(e.target.parentNode)
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    $toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = $toDoInput.value;
    paintToDo(currentValue);
    $toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach( toDo => paintToDo(toDo.text))
    }
}

function init() {
    loadToDos();
    $toDoForm.addEventListener("submit", handleSubmit)
}

init();