var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const { timesClicked, finishTimesClicked } = require("./utils/clicked.js");
const randomizer = require("./utils/randomizer.js");
const {
  updateColors,
  regPlayer,
  removePlayer,
  returnPlayers,
  pushPlayer,
  popPlayer,
  emptyArray,
} = require("./utils/colors.js");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://Grid:Nikan1392@cluster0.3gyio.mongodb.net/db?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
)
.then((client) => {

  const db = client.db("db");
  app.locals.db = db;
});
const server = require("http").Server(app);
const io = require("socket.io")(server);
//listen on every connection
io.on("connection", (socket) => {
 
  socket.on("disconnect", function () {
    
    // Removes player and restores player color to array
    removePlayer(socket.id);
  });
  socket.on("boxColor", function (boxColor) {
        io.emit("boxColor", boxColor);
  });
  socket.on("selectedColor", function (selectedColor) {
      io.emit("selectedColor", selectedColor);
  });
  socket.on("chat message", function (msg) {
        io.emit("chat message", msg);
  });

  // Adds player and color to array
  socket.on("regPlayer", (data) => {
    
    regPlayer(data.playerName, data.color);
    io.emit("playerColor", data.color);
   
  });

  // Updates the array with available colors,
  // removing the provided, chosen player color
  socket.on("updateColors", (color) => {
    updateColors(color);
  });

  socket.on("times clicked", function () {
    
    let data = timesClicked();
    socket.emit("recieveColor", data.clicked);

    if (data.bool) {
      emptyArray();
      const number = randomizer();
      io.emit("load game", number);
    }
  });
  socket.on("finish clicked", function (playerName) {
    popPlayer(playerName);
    let bool = finishTimesClicked();
    if (bool) {
      io.emit("finish game", bool);
         }
  });
  socket.on("delete user", function (playerName) {
   
    popPlayer(playerName);
    let playersDetails = returnPlayers();
    io.emit("delete user", playersDetails);
  });

  socket.on("getPlayers", function () {
    let array = returnPlayers();
    io.emit("getPlayers", array);
  });
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = { app: app, server: server };
