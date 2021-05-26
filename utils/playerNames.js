let playerNames = [];

function pushPlayer (playerName) {
    playerNames.push(playerName);
}
function popPlayer (playerName) {
    playerNames.pop(playerName);
}

function returnPlayers () {
  
    return playerNames;
}

module.exports = { pushPlayer, returnPlayers ,popPlayer};
