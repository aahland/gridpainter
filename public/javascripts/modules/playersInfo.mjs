const socket =io();

export default function playersInfo(){

    let playersInfo = document.getElementById("playersInfo");
    let playerName = localStorage.getItem("playerName");
    playersInfo.insertAdjacentHTML("afterbegin", `<img src="stylesheets/img/paint.png" width="250"> <h3>Current players</h3> <p><i class="fas fa-user"></i> ${playerName} </p>`);

}