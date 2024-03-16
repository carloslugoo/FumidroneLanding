const spinnerWrapperElement = document.querySelector('.spinnerWrapper');

window.addEventListener('load', () => {
    spinnerWrapperElement.style.opacity = '0'; // Corrección en 'opacity'
    const imageElement = document.getElementById('imageide');

    // Aplica una opacidad de 0 a la imagen
    imageElement.style.opacity = '1';
    setTimeout(() => {
        spinnerWrapperElement.style.visibility = 'hidden'; // Usa visibility en lugar de display
    }, 200)
});

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById('imageide');

    // Aplica una opacidad de 0 a la imagen
    imageElement.style.opacity = '0';
    var elements = document.querySelectorAll('.element');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Porcentaje del elemento visible para activar la animación
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
        spannav.classList.add('custom-toggler');
    } else {
        navbar.classList.remove('navbar-scrolled');
        document.getElementById("imageid").src = "./images/LogoFondoNegro.png";
        botonnav.classList.remove('custom-navbar');
        spannav.classList.remove('custom-toggler');
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