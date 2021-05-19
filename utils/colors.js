let colors = ['red', 'yellow', 'green', 'blue'];

function updateColors (color) {
    for (let i in colors) {
        if (colors[i] === color) {
            colors.splice(i, 1);
            return colors;
        }
    }

    colors.push(color);
    return colors;
}

function sendColors () {
    return colors;
}

module.exports = { updateColors, sendColors };