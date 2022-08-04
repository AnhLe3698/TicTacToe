// Step 1 add in our dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');


// Step 2 Initialize the server object/executable and PORT
const app = express();
const PORT = 8080;


// Step 3 Add in middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Step 4 Add Listener
app.listen(PORT, () => {
  console.log(`Tic Tac Toe app listening on Port: ${PORT}`);
});

// Step 5 add Views
// added gameBoard.ejs

// This variable will determine what turn it is
let gamestate = [1, 0, 0, 0, 0, 0, 0, 0, 0];

// Step 6 Add GET and POST requests
app.get("/play", (req, res) => {
  res.cookie('game_state', gamestate);
  let templateVars = {
    gameState: gamestate,
    turnNumber: turnNumber(gamestate)
  };
  res.render("gameBoard", templateVars);
});



// Step 7 Add Functions
let turnNumber = function(gamestate) {
  let numberTurns = 9;
  for (const numbers in gamestate) {
    if (numbers === 0) {
      numberTurns --;
    }
  }
  return numberTurns;
};
// Step 8 Add Mocha and Chai Tests to test functionality