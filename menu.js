// JavaScript to toggle the navbar links when the toggle button is clicked
var navbarToggle = document.querySelector('.navbar-toggle');
var navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('collapsed');
});
