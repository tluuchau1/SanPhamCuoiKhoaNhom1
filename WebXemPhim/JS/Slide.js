var currentSlide = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function showNext() {
    showSlide(currentSlide + 1);
}

function showPrevious() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);

