const socket = io();

socket.on('updateColors', colors => {
    updateColors(colors);
});

export default async function displayColors () {
    const colorWrapper = document.getElementById('colorWrapper');
    let colors = await getColors();

    console.log(colors);

    for (let color in colors) {
        const div = document.createElement('div');
        div.id = colors[color];
        div.classList.add('login-color-box');
        colorWrapper.appendChild(div);
    }
}

async function getColors () {
    let url = 'http://localhost:3000/pickColor';
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    };

    return await response.json();
}