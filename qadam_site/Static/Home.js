document.getElementById('logo-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Slideshow functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

// Auto advance slides
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds