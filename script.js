function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    var nav = document.getElementById('nav');
    var links = document.querySelectorAll('.navbar-nav .nav-link');

    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'block';
        links.forEach(function (link) {
            link.style.color = 'black';
        });
    } else {
        overlay.style.display = 'none';
        nav.style.backgroundColor = 'transparent';
        links.forEach(function (link) {
            link.style.color = 'white';
        });
    }
}


function nextSlide() {
    const desc = document.getElementById('desc');
    const carousel = document.getElementById('carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel);
    const carouselSecondInstance = new bootstrap.Carousel(desc)
    carouselInstance.next();
    carouselSecondInstance.next();
}

function prevSlide() {
    const desc = document.getElementById('desc');
    const carousel = document.getElementById('carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel);
    const carouselSecondInstance = new bootstrap.Carousel(desc)
    carouselInstance.prev();
    carouselSecondInstance.next();
}