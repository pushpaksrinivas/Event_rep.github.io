document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    let currentIndex = 0;

    function updateCarousel(index) {
        // Update images
        const offset = -index * 100;
        document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.dataset.index);
            updateCarousel(currentIndex);
        });
    });

    // Auto-play functionality (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }, 5000); // Change slides every 5 seconds
});
