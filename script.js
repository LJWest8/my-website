const body = document.body;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Burger animation
  burger.classList.toggle('toggle');
})

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

