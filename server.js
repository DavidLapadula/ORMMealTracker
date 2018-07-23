// Package dependenies
 
let express = require("express");
let bodyParser = require("body-parser");

// Configure express. Allow getting port from the bound environment variable
 
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up parts of the express app that will be used, including static directory
 
app.use(express.static(__dirname + "public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Instantiate listener

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });            
  