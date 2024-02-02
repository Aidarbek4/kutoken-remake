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



function checkVisibility() {
    const locationMap = document.querySelector('.location__map');
    const windowHeight = window.innerHeight;
    const mapPosition = locationMap.getBoundingClientRect();

    // Проверяем, если верхняя граница карты видна и нижняя граница карты не видна
    const mapTopVisible = mapPosition.top >= 0 && mapPosition.top <= windowHeight;
    const mapBottomVisible = mapPosition.bottom >= 0 && mapPosition.bottom <= windowHeight;

    if (mapTopVisible || mapBottomVisible) {
        const places = document.querySelectorAll('.location__map-place');
        places.forEach(function (place, index) {
            setTimeout(function () {
                place.classList.add('visible');
            }, index * 385); // Задержка в 385 миллисекунд между появлением каждого знака
        });
    } else {
        const places = document.querySelectorAll('.location__map-place');
        places.forEach(function (place) {
            place.classList.remove('visible');
        });
    }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);