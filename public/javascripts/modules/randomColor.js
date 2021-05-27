const socket = io();

// Fetch function for recieving available random color
async function getColor() {
  let url = "https://gridpainter3.herokuapp.com/getColor";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}

export default async function storePlayer() {
  const color = localStorage.getItem("playerColor");

  // localStorage.setItem('playerColor', color);
  const playerName = localStorage.getItem("playerName");
  let data = { playerName: playerName, color: color };
  // socket.emit('updateColors', color.color);
  socket.emit("regPlayer", data);
  playersInfo();
}

function playersInfo() {
  let playersInfo = document.getElementById("playersInfo");
  let leftDiv = document.getElementById("leftDiv");

  leftDiv.insertAdjacentHTML(
    "afterbegin",
    `<img src="stylesheets/img/paint.png" width="200"><h4 id="instructions">Paint the grid with your color like the image to the right and click “finish game” when you’re all done! <br /><br /> The game ends after five minutes, so don't be too slow :)</h4><h3>Current players</h3>`
  );

  socket.emit("getPlayers");
  socket.on("getPlayers", (data) => {
    playersInfo.innerHTML = "";

    for (let player in data) {
      const playerDiv = document.createElement("div");
      playerDiv.id = "playerDiv";

      playersInfo.insertAdjacentHTML(
        "beforeend",
        `<p><i class="fas fa-user icon-${data[player].color}" id="userIcon"></i> ${data[player].playerName}</p>`
      );
    }
  });
}
