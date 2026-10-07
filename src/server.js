const http = require("http");
const express = require("express");
const app = express();
const PORT = 8000;

//Routes
app.get("/", (req, res) => {
  return res.send("Welcome to Home Page");
});
app.get("/about", (req, res) => {
  return res.send("Welcome to about us page");
});

//Create server
const myServer = http.createServer(app);

//Start server
myServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
