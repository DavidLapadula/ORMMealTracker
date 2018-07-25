let orm = require('../config/orm.js');

var burger = {
    all: function () {
       return orm.all("burgers");
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals) {
      return orm.create("burgers", cols, vals);
    },
    update: function (objColVals, condition) {
    return orm.update("burgers", objColVals, condition); 
    }
};