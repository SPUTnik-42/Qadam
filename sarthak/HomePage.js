document.getElementById('logo-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
});
