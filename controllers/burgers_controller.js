// Set up the express app 
let express = require('express'); 
let router = express.Router(); 

//bring in the burger.js to use its database functions
let burger = require('../models/burger.js'); 