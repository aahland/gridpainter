let colors = ['red', 'yellow', 'green', 'blue'];
let players = [];

// Adds or removes input color from array depending on if it's already present or not
function updateColors (color) {
    for (let i in colors) {
        if (colors[i] === color) {
            colors.splice(i, 1);
            return true;
        }
    }

    colors.push(color);
    return false;
}

// Sends available colors without changing array
function sendColors () {
    return colors;
}

function regPlayer (socket, color) {
    players.push({
        socket: socket,
        color: color
    })
    console.log(players);
}

function removePlayer (socket) {
    for (let player in players) {
        if (players[player].socket === socket) {
            const color = players[player].color;
            players.splice(player, 1);
            console.log('Match!');
            updateColors(color);
            return true;
        }
    }

    console.log('Ej match!');
    return false;
}

module.exports = { updateColors, sendColors, removePlayer, regPlayer };