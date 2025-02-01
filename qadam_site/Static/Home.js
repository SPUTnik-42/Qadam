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
