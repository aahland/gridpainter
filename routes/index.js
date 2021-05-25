var express = require('express');
var router = express.Router();
const path = require('path');
const { returnPlayers } = require('../utils/playerNames.js');
const { randomColor } = require('../utils/colors.js');

// Gets available colors from colors array
router.get('/getColor', function (req, res) {
    res.send(randomColor());
})

router.get('/playerNames', function(req, res){
    
    array = returnPlayers();
    res.send(array)
} )

module.exports = router;