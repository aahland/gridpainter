let playerNames = [];

function pushPlayer (playerName) {
    playerNames.push(playerName);
}

function returnPlayers () {
    return playerNames;
}

module.exports = { pushPlayer };