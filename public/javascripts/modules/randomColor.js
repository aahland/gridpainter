const socket = io();

// Fetch function for recieving available random color
async function getColor () {
    let url = 'https://gridpainter3.herokuapp.com/getColor';
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

export default async function storePlayer () {
    const color = await getColor();

    localStorage.setItem('playerColor', color.color);
    socket.emit('updateColors', color.color);
    socket.emit('regPlayer', color.color);
}
