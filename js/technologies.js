document.addEventListener('DOMContentLoaded', function () {
    var animationNavItem = document.querySelector('.header__navbar-item.animation > a');
    var navbarItems = document.querySelectorAll('.header__navbar-item');
    var activeVideo = document.querySelector('.home__video.active');
    var stationVideo = document.querySelector('.home__video.station');
    var tokens = document.querySelectorAll('.home__token');
    var homeTitle = document.querySelector('.home__title');
    var homeText = document.querySelector('.home__text');
    var homeButton = document.querySelector('.home__button');

    if (animationNavItem) {
        animationNavItem.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default navigation behavior

            navbarItems.forEach(function (item) {
                item.style.transition = 'opacity 1s';
                item.style.opacity = '0';
            });

            setTimeout(function () {
                navbarItems.forEach(function (item) {
                    item.style.opacity = '1';
                });
            }, 1000);

            navbarItems.forEach(function (item) {
                item.classList.remove('hidden');
            });

            if (navbarItems.length >= 2) {
                navbarItems[navbarItems.length - 1].classList.remove('hidden');
                navbarItems[navbarItems.length - 2].classList.remove('hidden');
            }

            setTimeout(function () {
                if (navbarItems.length >= 2) {
                    navbarItems[navbarItems.length - 2].classList.add('hidden');
                }
            }, 1000);

            activeVideo.classList.remove('active');
            stationVideo.classList.add('active');

            tokens.forEach(function (token) {
                token.classList.add('active');
            });

            homeTitle.style.transition = 'opacity 1s';
            homeTitle.style.opacity = '1';

            homeText.style.transition = 'opacity 1s';
            homeText.style.opacity = '1';

            homeButton.style.transition = 'opacity 1s';
            homeButton.style.opacity = '1';

            setTimeout(function () {
                homeTitle.innerHTML = "Kut <br>Token";
                homeText.textContent = "Цифровой токен безопасности для мирового нефтегазового и энергетического сектора";
                homeButton.textContent = "Оставить заявку";

                homeTitle.style.opacity = '1';
                homeText.style.opacity = '1';
                homeButton.style.opacity = '1';

                // Redirect to the next page after all animations and text changes
                setTimeout(function () {
                    window.location.href = animationNavItem.getAttribute('href');
                }, 1500);
            }, 1000);
        });
    }
});