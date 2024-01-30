const crossButton = document.querySelector(".header__menu-icon");
const crossUpLine = document.querySelector(".first-line");
const crossDownLine = document.querySelector(".second-line");
const navbarLayer = document.querySelector(".header__navbar");

crossButton.addEventListener("click", function() {
    crossButton.classList.toggle("active");
    navbarLayer.classList.toggle("active");
})

const navbarLinks = document.querySelectorAll(".header__navbar a");
navbarLinks.forEach((link) => {
    link.addEventListener("click", function(){
        crossButton.classList.remove("active");
        navbarLayer.classList.remove("active");
    })
})