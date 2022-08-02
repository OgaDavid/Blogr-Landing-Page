var navDrop = $(".nav-drop");
var navList = $(".nav-lists");
var arrow = $(".arrow");
var i;

navList[0].addEventListener("click", () => {
    if (navDrop[0].style.visibility != "visible") {
        navDrop[0].style.visibility = "visible"
        arrow[0].classList.add("rotate");

        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");

        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    } else {
        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");
    }
})

navList[1].addEventListener("click", () => {
    if (navDrop[1].style.visibility != "visible") {
        navDrop[1].style.visibility = "visible"
        arrow[1].classList.add("rotate");

        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");

        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    } else {
        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");
    }
})

navList[2].addEventListener("click", () => {
    if (navDrop[2].style.visibility != "visible") {
        navDrop[2].style.visibility = "visible"
        arrow[2].classList.add("rotate");

        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");

        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");
    } else {
        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    }
})