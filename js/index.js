document.addEventListener('DOMContentLoaded', function () {
    var animationNavItem = document.querySelector('.header__navbar-item.animation > a');
    var navbarItems = document.querySelectorAll('.header__navbar-item');
    var activeVideo = document.querySelector('.home__video.active');
    var earthVideo = document.querySelector('.home__video.earth');
    var activeTokens = document.querySelectorAll('.home__token.active');
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
                item.classList.add('hidden');
            });

            if (navbarItems.length >= 2) {
                navbarItems[navbarItems.length - 1].classList.remove('hidden');
                navbarItems[navbarItems.length - 2].classList.remove('hidden');
            }

            setTimeout(function () {
                if (navbarItems.length >= 2) {
                    navbarItems[navbarItems.length - 2].classList.remove('hidden');
                }
            }, 1000);

            activeVideo.classList.remove('active');
            earthVideo.classList.add('active');

            activeTokens.forEach(function (token) {
                token.classList.remove('active');
            });

            homeTitle.style.transition = 'opacity 1s';
            homeTitle.style.opacity = '0';

            homeText.style.transition = 'opacity 1s';
            homeText.style.opacity = '0';

            homeButton.style.transition = 'opacity 1s';
            homeButton.style.opacity = '0';

            setTimeout(function () {
                homeTitle.textContent = "Технологии";
                homeText.textContent = "Новая Индустриализация Мира на основе системной сборки различных технологий не имеющих аналогов в мире, включая информационные, технические, цифровые, правовые, физические, социальные, медицинские, финансовые и другие не доступные для общества.";
                homeButton.textContent = "Подробнее";

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

document.addEventListener('DOMContentLoaded', function () {
    var anchorLinks = document.querySelectorAll('.anchor-link');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = link.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the 'token__wrapper' element
    var tokenWrapper = document.querySelector('.tokens__wrapper');

    // Generate a random number of spheres (between 15 and 25)
    var numberOfSpheres = Math.floor(Math.random() * 26) + 15;

    // Create and append spheres to 'token__wrapper'
    for (var i = 0; i < numberOfSpheres; i++) {
        var sphere = document.createElement('div');
        sphere.classList.add('sphere');

        // Generate random width, height, and z-index
        var randomWidth = Math.floor(Math.random() * 51) + 25;
        var randomHeight = Math.floor(Math.random() * 36) + 25;
        var randomZIndex = Math.floor(Math.random() * 41) + 170;

        // Set styles for the sphere
        sphere.style.width = randomHeight + 'px';
        sphere.style.height = randomHeight + 'px';
        sphere.style.zIndex = randomZIndex;

        // Generate random (x, y) coordinates
        var randomX = Math.floor(Math.random() * (tokenWrapper.offsetWidth - randomWidth));
        var randomY = Math.floor(Math.random() * (tokenWrapper.offsetHeight - randomHeight));

        // Set position styles based on random (x, y) coordinates
        sphere.style.left = randomX + 'px';
        sphere.style.top = randomY + 'px';

        // Append the sphere to 'token__wrapper'
        tokenWrapper.appendChild(sphere);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'tk'
    var tkElements = document.querySelectorAll('.tk');

    // Loop through each 'tk' element and set random width and height
    tkElements.forEach(function (tkElement) {
        // Check window width
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
            var predefinedWidth = parseFloat(getComputedStyle(tkElement).width);
            var predefinedHeight = parseFloat(getComputedStyle(tkElement).height);

            // Set default scaling factor
            var scalingFactor = 1.0;

            // Adjust scaling factor based on window width
            if (windowWidth > 970 && windowWidth <= 1500) {
                scalingFactor = (Math.random() * 0.4 + 0.8) / 1.5;

                var scaledWidth = predefinedWidth * scalingFactor;
                var scaledHeight = predefinedHeight * scalingFactor;

                // Set the width and height using the scaled values
                tkElement.style.width = scaledWidth + 'px';
                tkElement.style.height = scaledHeight + 'px';
            } else if (windowWidth > 1500) {
                scalingFactor = Math.random() * 0.4 + 0.8;

                var scaledWidth = predefinedWidth * scalingFactor;
                var scaledHeight = predefinedHeight * scalingFactor;

                // Set the width and height using the scaled values
                tkElement.style.width = scaledWidth + 'px';
                tkElement.style.height = scaledHeight + 'px';
            } else{
                tkElement.removeAttribute("style")
            }
        
    });
});




