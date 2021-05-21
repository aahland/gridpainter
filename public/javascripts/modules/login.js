import loadGrid from './loadGrid.js';
const socket = io();

// Gets username and color choice and puts into local storage
export default function login () {
    const btn = document.getElementById('loginBtn');
    btn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        let color = '';
        const radios = document.querySelectorAll('.radioBtn');
        
        for (let radio in radios) {
            if (radios[radio].checked) {
                color = radios[radio].id;
            }
        }

        localStorage.setItem('playerName', username);
        localStorage.setItem('playerColor', color);

        socket.emit('regPlayer', color);

        window.location.href = '../game.html';
    })

    //
    // Redirect to game page
    //
}