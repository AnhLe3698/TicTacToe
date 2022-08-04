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
app.get("/", (req, res) => {
  res.render("gameBoard");
  //res.send('hello');
});

// Step 6 Add GET and POST requests

// Step 7 Add Functions

// Step 8 Add Mocha and Chai Tests to test functionality