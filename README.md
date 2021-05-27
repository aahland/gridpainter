# TEAM 3 GRIDPAINTER

## Gameplay
1. All players begin by navigating to gridpainter3.herokuapp.com.
2. When all four players have chosen a player name and pressed Play Game, the game will begin.
3. At the game page, each player is assigned a color.
4. The players try to recreate the smaller image on the empty grid.
5. Beware of saboteurs! Any player can paint over your previously painted tiles.
6. When everyone has pressed Finish Game, your final score will be calculated.
7. Press Play Again to, you guessed it, play the game again!

---

## Project structure

### Server
Our server consists of a few end points in routes/index and routes/users, using express.
The rest of the communication is run via socket.io, using emits to and from the server.
We run the server deployed on heroku.

### Server scripts
We've made a utils folder on the server which houses functions used by socket.io to process
and send back data to the client.

### Database
We use MongoDB Atlas to store the current played grid, along with the pictures used as
answer keys. The communication with the database is run via the server, called from
fetches in the client.

### Front-end JS
Our front-end javascript is built with modules, run from the login page and game page.

---

## Running the project locally
To run the project on your own computer, follow these instructions:
1. Download the project from github
2. Install the neccessary modules with `npm i`
3. If nodemon is not installed, install it globally with `npm i -g nodemon`
4. Replace the content of the `serverURL` variable in public/javascripts/modules/grid.js with `http://localhost:3000`
5. Search for `https://gridpainter3.herokuapp.com` in the project and replace with `http://localhost:3000`
6. Run `nodemon start` in the terminal
7. Navigate to `http://localhost:3000` in four instances of Google Chrome or Mozilla Firefox