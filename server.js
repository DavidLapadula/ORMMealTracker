// Package dependenies
const express = require("express");
const bodyParser = require("body-parser");
 
// Configure express. Allow getting port from the bound environment variable
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up parts of the express app that will be used, including static directory 
app.use(express.static(__dirname + "public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");
app.use(routes);

// Instantiate listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });             
  