// Gets username and color choice and puts into local storage
export default function login () {
    const btn = document.getElementById('loginBtn');
    btn.addEventListener('click', () => {
        const username = document.getElementById('username').value;

        localStorage.setItem('playerName', username);

        window.location.href = '../game.html';
    })
}