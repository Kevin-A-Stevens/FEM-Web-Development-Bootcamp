// Creating a node server
// const http = require("http");

//Create a server and run the function every time someone calls
// const server = http.createServer(function (req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("Hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen("3000");

// Run the following
// node server.js

// Using express, a node.js framework
// run with node server.js
const express = require("express");

// Create an server
const app = express();

app.get("/", function (req, res) {
  res.end("Welcome to my site");
});

app.get("/complement", function (req, res) {
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");
