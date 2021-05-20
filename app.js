var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {
    updateColors,
    sendColors,
    regPlayer,
    removePlayer
} = require('./utils/colors.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

 var app = express();
const MongoClient=require("mongodb").MongoClient;
MongoClient.connect("mongodb+srv://Grid:Nikan1392@cluster0.w88ba.mongodb.net/db?retryWrites=true&w=majority",{
    useUnifiedTopology:true 
})
.then(client=>{
    console.log("Database  is conected");
    const db =client.db("db");
    app.locals.db=db ;
});
const server=require("http").Server(app);
const io=require("socket.io")(server)
 //listen on every connection
 io.on('connection', (socket) => {
     console.log("User connected!");
    socket.on("disconnect", function(){
        console.log("User disconnected");
        
        // Removes player and restores player color
        removePlayer(socket.id);
    });
    socket.on("boxColor",function(boxColor){
        console.log("boxColor:",boxColor);
        io.emit("boxColor",boxColor)
    })

    // Adds player and color to array
    // Updates available player colors for all connected users
    socket.on('regPlayer', color => {
        regPlayer(socket.id, color);
        updateColors(color);
        io.emit('updateColors', sendColors());
    });
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = {app:app ,server:server};