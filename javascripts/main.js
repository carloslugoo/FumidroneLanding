const spinnerWrapperElement= document.querySelector('.spinnerWrapper');

window.addEventListener('load', ()=>{
    spinnerWrapperElement.style.oppacity='0'; 
    setTimeout(()=>{
    spinnerWrapperElement.style.display='none';
    },200)
});
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.element');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Porcentaje del elemento visible para activar la animación
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(function(element) {
        observer.observe(element);
    });
});

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.scrollY > 60) {
        navbar.classList.add('navbar-scrolled');
        document.getElementById("imageid").src="./images/LogoFondoBlanco.png";
    } else {
        navbar.classList.remove('navbar-scrolled');
        document.getElementById("imageid").src="./images/LogoFondoNegro.png";
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
        if (target > 60){
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