
document.addEventListener('DOMContentLoaded', function() {
    const interval = 5000; // 5 seconds
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.add('hidden');
            if (i === index) {
                item.classList.remove('hidden');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, interval);
});
