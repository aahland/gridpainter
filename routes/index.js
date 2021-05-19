var express = require('express');
var router = express.Router();
const path = require('path');
const { updateColors, sendColors } = require('../utils/colors.js');

router.get('/pickColor', function (req, res) {
    res.send(sendColors());
})

router.post('/pickColor', function (req, res) {
    res.send(updateColors(req.body.color));
})

module.exports = router;
