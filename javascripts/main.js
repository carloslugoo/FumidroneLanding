document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia al spinner y al video
    const spinnerWrapper = document.querySelector('.spinner-wrapper');
    const video = document.querySelector('video');

    // Función para ocultar el spinner y mostrar el video una vez cargado
    function hideSpinnerAndShowVideo() {
        spinnerWrapper.style.display = 'none';
        video.style.display = 'block';
    }

    // Función para verificar si todos los recursos, incluido el video, se han cargado
    function allContentLoaded() {
        const images = document.images;
        const imagesCount = images.length;

        for (let i = 0; i < imagesCount; i++) {
            if (!images[i].complete) {
                return false;
            }
        }

        return video.readyState >= 2;
    }

    // Verificar si todo el contenido se ha cargado cada 100 milisegundos
    const checkContentLoadedInterval = setInterval(function () {
        if (allContentLoaded()) {
            // Si todo el contenido se ha cargado, detener la verificación y mostrar el video
            clearInterval(checkContentLoadedInterval);
            hideSpinnerAndShowVideo();
        }
    }, 100);
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
