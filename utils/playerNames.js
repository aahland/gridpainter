let playerNames = [];

function pushPlayer(playerName) {
  playerNames.push(playerName);
}
function popPlayer(playerName) {
  playerNames.pop(playerName);
}

module.exports = { pushPlayer, popPlayer };
