const $title = document.querySelector("#title");

$title.innerHTML = "Hi! From JS"

$title.style.color = "red"
document.title = "I own you now"

function handleResize(){
    if ($title.style.color === "white"){
        $title.style.color = "red"
    } else {

        $title.style.color = "white"
    }
}
function handleOnline(){
    console.log("online")
}

navigator.addEventListener("online", handleOnline)
$title.addEventListener("click", handleResize);

console.dir($title);

console.error("Fuck");
class Div {
    constructor() {
        this.$div = document.createElement("div")
    }
}
const $div = document.createElement("div");
const $body = document.querySelector("body")
$body.appendChild($div)
$div.appendChild(new Div().$div)
$div.appendChild(new Div().$div)

const age = prompt("How old are you")
console.log(age)

console.log($body)