// Set up the express app 
let express = require('express');
let router = express.Router();

//bring in the burger.js to use its database functions
let burger = require('../models/burger.js');
 
router.get("/", function (req, res) { 
    burger.all() 
        .then((data) => {
            let allBurgers = {
                burgers: data
            };
            res.render("index", allBurgers);
        }); 
});

router.post("/create", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured])
    .then(() => {
        res.sendStatus('201'); 
    }); 
  });

  router.put("/:id", function(req, res) {
    let condition = `id=${req.params.id}`;

    burger.update({
      devoured: 1
    }, condition)
    .then(() => {
        res.sendStatus('200'); 
    }); 
  }); 



 
// Export the router for the server file to use
module.exports = router;