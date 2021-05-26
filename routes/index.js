var express = require('express');
var router = express.Router();
const path = require('path');
const { randomColor } = require('../utils/colors.js');

// Gets available colors from colors array
router.get('/getColor', function (req, res) {
    res.send(randomColor());
})

router.get('/playerNames', function(req, res){
    
    array = returnPlayers();
    res.send(array)
} )
// router.get('/playerNames', function(req, res){
//     let array = ();
//     let data = { data: array };
//     res.send(data);
// } )

module.exports = router;