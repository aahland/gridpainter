let colors = ["red", "green", "blue", "yellow"];
let players = [];

// Sends back a random color of the ones available
function randomColor() {
  const i = Math.floor(Math.random() * colors.length);
  return { color: colors[i] };
}

function emptyArray() {
  players = [];
  color = ["red", "green", "blue", "yellow"];
}

// Adds or removes input color from array depending on if it's already present or not
function updateColors(color) {
  for (let i in colors) {
    if (colors[i] === color) {
      colors.splice(i, 1);
      return true;
    }
  }

  colors.push(color);
  return false;
}

// Registers player with socket id and color
function regPlayer(playerName, color) {
  players.push({
    playerName: playerName,
    color: color,
  });

}

// Removes player using disconnected socket id, and updates colors for other clients
function removePlayer(socket) {
  for (let player in players) {
    if (players[player].socket === socket) {
      const color = players[player].color;
      players.splice(player, 1);
       updateColors(color);
       return true;
    }
  }

  return false;
}

function returnPlayers() {
  return players;
}

function pushPlayer(player) {
  players.push(player);
}

function popPlayer(playerName) {
  for (let player in players) {
    if (players[player].playerName == playerName) {
      players.pop(player);
    }
  }
}

module.exports = {
  randomColor,
  updateColors,
  regPlayer,
  removePlayer,
  returnPlayers,
  popPlayer,
  pushPlayer,
  emptyArray,
};
