// renderer.js
const { remote } = require('electron');
const { screen } = remote;

const goose = document.getElementById('goose');
const screenWidth = screen.getPrimaryDisplay().workAreaSize.width;
const screenHeight = screen.getPrimaryDisplay().workAreaSize.height;
const gooseWidth = 50;
const gooseHeight = 50;

function moveGoose() {
    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    goose.style.left = `${randomX}px`;
    goose.style.top = `${randomY}px`;
}

function preventCursorEscape() {
    window.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;

        if (clientX <= 0 || clientX >= screenWidth - gooseWidth || clientY <= 0 || clientY >= screenHeight - gooseHeight) {
            moveGoose();
        }
    });
}

moveGoose(); // Move o "goose" para uma posição inicial
setInterval(moveGoose, 5000); // Move o "goose" periodicamente
preventCursorEscape(); // Impede que o cursor escape da janela
