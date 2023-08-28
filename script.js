const carousel = document.querySelector('.carousel');
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

/*Carousel*/
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;

    carousel.style.scrollBehavior = 'unset';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const currentPosition = e.clientX - carousel.offsetLeft;
    const distance = currentPosition - startPosition;
    carousel.scrollLeft = scrollLeft - distance;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.scrollBehavior = 'smooth';
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.scrollBehavior = 'smooth';
});