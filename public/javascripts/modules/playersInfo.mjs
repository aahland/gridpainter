const socket =io();



export default async function playersInfo(){

    let playersInfo = document.getElementById("playersInfo");
   /* let playerName = localStorage.getItem("playerName");
    let playerColor = localStorage.getItem("playerColor");

    if (playerColor = "yellow") {
        console.log("yellow");
    } else if (playerColor = "red") {
        console.log("red");
    } else if (playerColor = "blue") {
        console.log("blue");
    } else if (playerColor = "green") {
        console.log("green");
    }
*/
    
    let playerNames = await getPlayers();
    playersInfo.insertAdjacentHTML("afterbegin", '<img src="stylesheets/img/paint.png" width="200"> <h3>Current players</h3>')
    for(let playerName in playerNames){
        playersInfo.insertAdjacentHTML("beforeend", `<p><i class="fas fa-user"></i> ${playerNames[playerName]} </p>`);
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

