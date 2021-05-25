const socket =io();

export default async function playersInfo(){

    let playersInfo = document.getElementById("playersInfo");

    let playerNames = await getPlayers();

    let userColor = `<i class="fas fa-user" id="userIcon"></i>`;

    playersInfo.insertAdjacentHTML("afterbegin", '<img src="stylesheets/img/paint.png" width="200"> <h3>Current players</h3>')
    for(let playerName in playerNames){
        playersInfo.insertAdjacentHTML("beforeend", `<p>${userColor} ${playerNames[playerName]} </p>`);
    
        socket.on("playerColor", function(color){

            // console.log(`${playerNames[playerName]} has color: ${color}`);
    
            if (color === "green") {
                document.getElementById("userIcon").style.color = "green";
            } else if (color === "blue") {
                document.getElementById("userIcon").style.color = "blue";
            } else if (color === "yellow") {
                document.getElementById("userIcon").style.color = "yellow";
            } else if (color === "red") {
                document.getElementById("userIcon").style.color = "red";
            }
          })
    }
}

async function getPlayers () {
    let url = 'https://gridpainter3.herokuapp.com/playerNames';
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
