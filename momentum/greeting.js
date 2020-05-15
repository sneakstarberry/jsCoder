const $form = document.querySelector(".js-form"),
    $input = $form.querySelector("input"),
    $greeting = document.querySelector(".js-greetings");

    
    const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
    function handleSubmit(e) {
        e.preventDefault();
        const currentValue = $input.value;
        paintGreeting(currentValue);
        saveName(currentValue)
    }
    
    function saveName(text){
        localStorage.setItem(USER_LS, text);
    }
    
    const askForname = () => {
        $form.classList.add(SHOWING_CN);
        $form.addEventListener("submit", handleSubmit)
    }

    const paintGreeting = (text) => {
    $form.classList.remove(SHOWING_CN);
    $greeting.classList.add(SHOWING_CN);
    $greeting.innerText = `Hello ${text}`
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForname();
    } else {
        paintGreeting(currentUser);
    }
}
console.log
function init() {
    loadName();
}

init()