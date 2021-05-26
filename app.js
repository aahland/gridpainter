var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const {timesClicked,finishTimesClicked} = require("./utils/clicked.js");
const randomizer = require('./utils/randomizer.js');
const { pushPlayer,popPlayer} = require('./utils/playerNames.js');
const {
    updateColors,
    regPlayer,
    removePlayer, 
    returnPlayers
} = require('./utils/colors.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

 var app = express();
const MongoClient=require("mongodb").MongoClient;
MongoClient.connect("mongodb+srv://Grid:Nikan1392@cluster0.3gyio.mongodb.net/db?retryWrites=true&w=majority",{
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
        
        // Removes player and restores player color to array
        removePlayer(socket.id);
    });
    socket.on("boxColor",function(boxColor){
        console.log("boxColor:",boxColor);
        io.emit("boxColor",boxColor)
    });
    socket.on("selectedColor",function(selectedColor){
        console.log("selectedColor:",selectedColor);
        io.emit("selectedColor",selectedColor)
    });
    socket.on("chat message", function(msg){
        console.log("msg", msg);
        io.emit("chat message", msg);
    });

    // Adds player and color to array
    socket.on('regPlayer', data => {
        console.log(data);
        regPlayer(data.playerName, data.color);
        io.emit("playerColor", data.color);
        console.log("User with id: " + socket.id + " has color: " + data.color);
    });

    // Updates the array with available colors,
    // removing the provided, chosen player color
    socket.on('updateColors', color => {
        updateColors(color);
    });

    socket.on("times clicked", function(playerName){
        pushPlayer(playerName);
        //console.log(returnPlayers());
        let bool = timesClicked();
        if (bool){
            const number = randomizer();
            io.emit("load game", number);
        }
        
    })
    socket.on("finish clicked", function(playerName){
        //console.log("finish socket",playerName);
        popPlayer(playerName);
        //console.log("players after finish ",returnPlayers());
        let bool = finishTimesClicked();
            if (bool){
                io.emit("finish game" , bool)
                console.log("finish game" , bool);
            }
    });
    socket.on("delete user", function(playerName){
        console.log("hej from delete user");
        popPlayer(playerName);
        let playersDetails=returnPlayers()
        //console.log("players after delete user ",returnPlayers());
        io.emit("delete user" , playersDetails)
    });

    socket.on('getPlayers', function () {
        let array = returnPlayers();
        console.log(array);
        io.emit('getPlayers', array)
    })
})

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = {app:app ,server:server};