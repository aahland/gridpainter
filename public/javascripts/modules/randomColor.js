const socket = io();

// Fetch function for recieving available random color
async function getColor () {
    let url = 'http://localhost:3000/getColor';
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
    const playerName = localStorage.getItem('playerName');
    let data = { playerName: playerName, color: color.color };
    socket.emit('updateColors', color.color);
    socket.emit('regPlayer', data);
    playersInfo();
}

function playersInfo () {
    let playersInfo = document.getElementById("playersInfo");
    playersInfo.insertAdjacentHTML("afterbegin", '<img src="stylesheets/img/paint.png" width="200"> <h3>Current players</h3>')

    socket.emit('getPlayers');
    socket.on('getPlayers', data => {
        playersInfo.innerHTML = "";
    
        for (let player in data){
            const playerDiv = document.createElement('div');
            playerDiv.id = 'playerDiv';

            playersInfo.insertAdjacentHTML(
                "beforeend",
                `<p><i class="fas fa-user icon-${data[player].color}" id="userIcon"> ${data[player].playerName}</p>`);
            }
    });
}