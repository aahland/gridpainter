var express = require('express');
var router = express.Router();
const cors=require("cors");
/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection("grid").find().toArray()
.then(results=>{
res.send(results);
req.app.locals.db.collection("grid").insertOne(req.body)
  .then(result=>{
  res.json({"added":"ok"})
// console.log(result);
  })
 res.redirect("/");



})
  
});


router.post("/color", function(req, res){
  let findBox=req.body;
  console.log("find box from post in backend:",findBox);
  let newColor=findBox.boxColor;
  console.log("new color :",newColor);
  req.app.locals.db.collection("grid").find( {"boxName":findBox.boxName} ).toArray()
  .then(coloredBox => {
    console.log("coloredBox",coloredBox);
    req.app.locals.db.collection("grid").insertOne(req.body)

   // req.app.locals.db.collection("grid").updateOne( {"boxName" : coloredBox[0].boxName}, {$set: {"boxColor": newColor}})
      .then(result=>{
        console.log(result);
  })  
  res.json({"status":"color  changed"})
 
  })
});
module.exports = router;
