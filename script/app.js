const modeToggle = document.getElementById('toggle-icon');
const toggleButton = document.getElementById('toggleButton');
const myElement = document.getElementById('burger-menu-cnt');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    modeToggle.classList.toggle('rotate');
     // Toggle between moon and sun icon based on light/dark mode
     if (modeToggle.textContent === '🌑') {
        modeToggle.textContent = '🌞'; // Sun icon
    } else {
        modeToggle.textContent = '🌑'; // Moon icon
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("hamburger-btn");
    var myElement = document.getElementById("burger-menu-cnt");

    toggleButton.addEventListener("click", function() {
        myElement.classList.toggle("open");
      });
  });