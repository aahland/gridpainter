let colors = ['red', 'yellow', 'green', 'blue'];

// Adds or removes input color from array depending on if it's already present or not
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

// Sends available colors without changing array
function sendColors () {
    return colors;
}

module.exports = { updateColors, sendColors };