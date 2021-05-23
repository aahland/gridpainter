var express = require('express');
var router = express.Router();
const path = require('path');
const { randomColor } = require('../utils/colors.js');

// Gets available colors from colors array
router.get('/getColor', function (req, res) {
    res.send(randomColor());
})

module.exports = router;