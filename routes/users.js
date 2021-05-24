var express = require('express');
var router = express.Router();
// const cors=require("cors");
/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection("grid").find().toArray()
.then(results=>{
res.send(results);
})
  });
router.get('/facit1', function(req, res, next) {
  req.app.locals.db.collection("facit1").find().toArray()
.then(results=>{
  res.send(results);
  })
})
router.get('/facit2', function(req, res, next) {
  req.app.locals.db.collection("facit2").find().toArray()
.then(results=>{
  res.send(results);
  })
})
router.get('/facit3', function(req, res, next) {
  req.app.locals.db.collection("facit3").find().toArray()
  .then(results=>{
  res.send(results);
  })
})
router.get('/facit4', function(req, res, next) {
  req.app.locals.db.collection("facit4").find().toArray()
  .then(results=>{
  res.send(results);
  })
})
router.get('/facit5', function(req, res, next) {
  req.app.locals.db.collection("facit5").find().toArray()
  .then(results=>{
  res.send(results);
  })
})
router.post("/color", function(req, res){
  let findBox=req.body;
  console.log("find box from post in backend:",findBox);
  let newColor=findBox.boxColor;
  console.log("new color :",newColor);
  req.app.locals.db.collection("grid").find( {"boxName":findBox.boxName} ).toArray()
  .then(coloredBox => {
    console.log("coloredBox",coloredBox);
    //req.app.locals.db.collection("grid").insertOne(req.body)
    //req.app.locals.db.collection("grid").deleteOne( {"boxName" : coloredBox[0].boxName}, {$set: {"boxColor": newColor}})
    req.app.locals.db.collection("grid").updateOne( {"boxName" : coloredBox[0].boxName}, {$set: {"boxColor": newColor}})
      .then(result=>{
       //console.log(result);
  })  
  res.json({"status":"color  changed"})
 
  })
});

//rout for makings boxes of grid white that doe not work till now 
router.post('/white', function(req, res, next) {
  let resetGame=req.body;
 // console.log(resetGame);
  req.app.locals.db.collection("grid").find( ).toArray()
  .then(resets => {
    console.log("resets",resets);
    for (reset in resets){
       req.app.locals.db.collection("grid").updateOne( {"boxName" : resets[reset].boxName}, {$set: {"boxColor": "white"}})
      .then(result=>{
       //console.log(result);
    })  
    }
   
  res.json({"status":"Grid reset"})
 
  })
})
router.post("/finish", function(req, res){
  let gameOvered=req.body;
  console.log("gameOvered from post in backend:",gameOvered);
 // console.log(gamedOvered.picture);
  req.app.locals.db.collection(gameOvered.picture).find().toArray()
  .then(checkGame => {
    //console.log("checkgame",checkGame);
    let score = 0
    for(let i=0;i<=224;i++){
       if(gameOvered.finishedGrid[i].boxName==checkGame[i].boxName && gameOvered.finishedGrid[i].boxColor==checkGame[i].boxColor ){
         score++
       }
    }
    let percent=score*100/225
   console.log(score);
   res.json([{"score":score},{"percent":percent}])
   //res.json([{"score":score,"percent":percent}])
  })  
});

module.exports = router;

