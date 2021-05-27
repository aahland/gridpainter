var express = require("express");
var router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  req.app.locals.db
    .collection("grid")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.get("/facit1", function (req, res, next) {
  req.app.locals.db
    .collection("facit1")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.get("/facit2", function (req, res, next) {
  req.app.locals.db
    .collection("facit2")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.get("/facit3", function (req, res, next) {
  req.app.locals.db
    .collection("facit3")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.get("/facit4", function (req, res, next) {
  req.app.locals.db
    .collection("facit4")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.get("/facit5", function (req, res, next) {
  req.app.locals.db
    .collection("facit5")
    .find()
    .toArray()
    .then((results) => {
      res.send(results);
    });
});
router.post("/color", function (req, res) {
  let findBox = req.body;
 
  let newColor = findBox.boxColor;

  req.app.locals.db
    .collection("grid")
    .find({ boxName: findBox.boxName })
    .toArray()
    .then((coloredBox) => {
     
      req.app.locals.db
        .collection("grid")
        .updateOne(
          { boxName: coloredBox[0].boxName },
          { $set: { boxColor: newColor } }
        )
        .then((result) => {
        });
      res.json({ status: "color  changed" });
    });
});

//rout for makings boxes of grid white that doe not work till now
router.post("/white", function (req, res, next) {
  let resetGame = req.body;
  req.app.locals.db
    .collection("grid")
    .find()
    .toArray()
    .then((resets) => {
        for (reset in resets) {
        req.app.locals.db
          .collection("grid")
          .updateOne(
            { boxName: resets[reset].boxName },
            { $set: { boxColor: "white" } }
          )
          .then((result) => {
          });
      }

      res.json({ status: "Grid reset" });
    });
});
router.post("/finish", function (req, res) {
  let gameOvered = req.body;
 
  req.app.locals.db
    .collection(gameOvered.picture)
    .find()
    .toArray()
    .then((checkGame) => {
      let score = 0;
      for (let i = 0; i <= 224; i++) {
        if (
          gameOvered.finishedGrid[i].boxName == checkGame[i].boxName &&
          gameOvered.finishedGrid[i].boxColor == checkGame[i].boxColor
        ) {
          score++;
        }
      }
      let percent = (score * 100) / 225;
       res.json([{ score: score }, { percent: percent }]);
      });
});

module.exports = router;
