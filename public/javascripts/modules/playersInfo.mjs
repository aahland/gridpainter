const socket =io();

export default function playersInfo(){

    let playersInfo = document.getElementById("playersInfo");
    let playerName = localStorage.getItem("playerName");
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

    playersInfo.insertAdjacentHTML("afterbegin", `<img src="stylesheets/img/paint.png" width="200"> <h3>Current players</h3> <p><i class="fas fa-user"></i> ${playerName} </p>`);

}