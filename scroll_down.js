const scrollSpeed = 100;
const height = 100;

function autoScroll() {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = currentPosition + height;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

setInterval(autoScroll, scrollSpeed);
