const spinnerWrapperElement = document.querySelector('.spinnerWrapper');
const videoElement = document.querySelector('video');
window.addEventListener('load', () => {
    spinnerWrapperElement.style.opacity = '1';
});
videoElement.addEventListener('loadeddata', () => {
    spinnerWrapperElement.style.opacity = '0';
});

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById('imageide');
    imageElement.style.opacity = '0';

    var elements = document.querySelectorAll('.element');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(function (element) {
        observer.observe(element);
    });
});


window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let botonnav = document.getElementById('tatare')
    let spannav = document.getElementById('icon1')
    if (window.scrollY > 60) {
        navbar.classList.add('navbar-scrolled');
        document.getElementById("imageid").src = "./images/LogoFondoBlanco.png";
        botonnav.classList.add('custom-navbar');
    } else {
        navbar.classList.remove('navbar-scrolled');
        document.getElementById("imageid").src = "./images/LogoFondoNegro.png";
        botonnav.classList.remove('custom-navbar');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll('.counter');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(function (counter) {
        observer.observe(counter);
    });

    function startCounter(counter) {
        var target = parseInt(counter.getAttribute('data-target'));
        var current = 0;
        if (target > 60) {
            current = 60
        }
        var interval = setInterval(function () {

            counter.textContent = current + "+";
            current++;

            if (current > target) {
                clearInterval(interval);
            }
        }, 50); // Ajusta la velocidad del contador según tus preferencias
    }
});