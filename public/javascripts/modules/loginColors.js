const socket = io();

socket.on('updateColors', () => {
    displayColors();
});

// Gets available colors from fetch function
export default async function displayColors () {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.innerHTML;
    let colors = await getColors();

    // Creates a box for every color returned
    for (let color in colors) {
        const wrapper = document.createElement('div');
        wrapper.id = 'wrapper';

        const colorDiv = document.createElement('div');
        colorDiv.id = 'color-' + colors[color];
        colorDiv.classList.add('login-color-box');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'radioBtn';
        input.classList.add('radioBtn');
        input.id = colors[color];

        wrapper.appendChild(colorDiv);
        wrapper.appendChild(input);
        colorPicker.appendChild(wrapper);
    }
}

// Fetch function for recieving available color array
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