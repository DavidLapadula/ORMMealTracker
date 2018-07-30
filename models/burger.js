let orm = require('../config/orm.js');

// burger model which calls the ORM for the burger table
var burger = {
    all: function () {
    return orm.selectAll("burgers"); 
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals) {
    return orm.insertOne("burgers", cols, vals);
    },
    //ObjColVals is an object that is parsed, and the condition is the ID of the burger that the user 'devoured'
    update: function (objColVals, condition) {
    return orm.updateOne("burgers", objColVals, condition); 
    } 
};  

module.exports = burger; 