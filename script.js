const body = document.body;

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

