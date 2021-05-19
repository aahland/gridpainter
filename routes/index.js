var express = require('express');
var router = express.Router();
const path = require('path');
const { updateColors, sendColors } = require('../utils/colors.js');

// Gets available colors from colors array
router.get('/pickColor', function (req, res) {
    res.send(sendColors());
})

// Posts color from body and removes/adds to color array
router.post('/pickColor', function (req, res) {
    res.send(updateColors(req.body.color));
})

module.exports = router;
