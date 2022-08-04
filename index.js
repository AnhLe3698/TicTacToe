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
let gamestate = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Step 6 Add GET and POST requests
app.get("/play", (req, res) => {
  let templateVars = {
    gameState: gamestate,
    turnNumber: turnNumber(gamestate)
  };
  res.render("gameBoard", templateVars);
});

app.get("/reset", (req, res) => {
  gamestate = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  res.redirect('/play');
});

app.get('/e1', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[0] === 0 && turn === 0) {
    gamestate[0] = 1;
  } else if (gamestate[0] === 0 && turn === 1) {
    gamestate[0] = 2;
  }
  res.redirect("/play");
});

app.get('/e2', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[1] === 0 && turn === 0) {
    gamestate[1] = 1;
  } else if (gamestate[1] === 0 && turn === 1) {
    gamestate[1] = 2;
  }
  res.redirect("/play");
});

app.get('/e3', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[2] === 0 && turn === 0) {
    gamestate[2] = 1;
  } else if (gamestate[2] === 0 && turn === 1) {
    gamestate[2] = 2;
  }
  res.redirect("/play");
});

app.get('/e4', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[3] === 0 && turn === 0) {
    gamestate[3] = 1;
  } else if (gamestate[3] === 0 && turn === 1) {
    gamestate[3] = 2;
  }
  res.redirect("/play");
});

app.get('/e5', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[4] === 0 && turn === 0) {
    gamestate[4] = 1;
  } else if (gamestate[4] === 0 && turn === 1) {
    gamestate[4] = 2;
  }
  res.redirect("/play");
});

app.get('/e6', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[5] === 0 && turn === 0) {
    gamestate[5] = 1;
  } else if (gamestate[5] === 0 && turn === 1) {
    gamestate[5] = 2;
  }
  res.redirect("/play");
});

app.get('/e7', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[6] === 0 && turn === 0) {
    gamestate[6] = 1;
  } else if (gamestate[6] === 0 && turn === 1) {
    gamestate[6] = 2;
  }
  res.redirect("/play");
});

app.get('/e8', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[7] === 0 && turn === 0) {
    gamestate[7] = 1;
  } else if (gamestate[7] === 0 && turn === 1) {
    gamestate[7] = 2;
  }
  res.redirect("/play");
});

app.get('/e9', (req, res) => {
  let turn = turnNumber(gamestate) % 2;
  if (gamestate[8] === 0 && turn === 0) {
    gamestate[8] = 1;
  } else if (gamestate[8] === 0 && turn === 1) {
    gamestate[8] = 2;
  }
  res.redirect("/play");
});

// Step 7 Add Functions
let turnNumber = function(gamestate) {
  let numberTurns = 9;
  for (const numbers of gamestate) {
    if (numbers === 0) {
      numberTurns --;
    }
  }
  return numberTurns;
};
// Step 8 Add Mocha and Chai Tests to test functionality