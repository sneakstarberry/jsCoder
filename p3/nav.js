const $main = document.querySelector("#main");
const $navBar = document.createElement("nav");

const styles = {
    nav: {
        "background-color": "#343a40",
        "justify-items": "flex-start",
        "align-items":"center",
        height: "60px",
        display: "flex",
    },
    navItems:{
        "align-items": "base-line",
        display: "flex",
    },
    logo: {
        "font-size": "20px",
        display: "inline-flex",
    },
    searchBar: {
        "margin-top": "20px",
        "margin-bottom": "20px",
        "border-radius": "5px",
        padding: "10px",
        "font-size": "15px",
        width: "100px",
    },
    button: {
        display: "flex",
        width: "80px",
        height: "30px",
        "border-radius": "5px",
        "background-color": "transparant",
        margin: "20px",
        transition: "all 0.5s",
        "justify-content": "center",
        "text-align": "center",
        "align-items": "center",
        color: "#28a745",
        "border": "2px #28a745 solid"
    }
}

$navBar.addStyle(styles.nav)

$navBar.innerHTML= `<div class='nav-items'></div>`;

const $navItems = $navBar.querySelector(".nav-items");
const $logo = document.createElement("div");
$logo.innerText = "Carousel"
$navItems.addStyle(styles.navItems)
$logo.addStyle(styles.logo)

$navItems.appendChild($logo)

const navItems = [`Home`, `Link`, `Disabled`]
navItems.forEach(item => {
    const $navItem = document.createElement("div");
    $navItem.classList.add("nav-item")
    $navItem.innerText = `${item}`
    $navItems.appendChild($navItem)
})
$main.appendChild($navBar)

const $dropDown = document.createElement("div");
$dropDown.classList.add("nav-dropDown")
$dropDown.id="dd1"
$navItems.appendChild($dropDown)
var dd1 = new DropDown({
    id: '#dd1',
    val: 'cat',
    data: ['cat', 'dog', 'mouse', 'horse', 'rabbit', 'lion', 'bear'],
    cb: (newval) => {
        alert(newval);
    }
})

$spacer = document.createElement("div");
$spacer.style.flexGrow = "1"

$searchBar = document.createElement("input");
$searchBar.addStyle(styles.searchBar);
$searchBar.placeholder = "Search"

$button = document.createElement("div");
$button.innerHTML = "<span>Search</span>"
$button.addStyle(styles.button)
$button.addEventListener("mouseenter", () => $button.classList.toggle("hover"))
$button.addEventListener("mouseleave", () => $button.classList.toggle("hover"))

$navBar.appendChild($spacer);
$navBar.appendChild($searchBar);
$navBar.appendChild($button);


function init() {

}
init()




