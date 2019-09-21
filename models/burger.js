var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("a53lhvdtnxjq9lqw", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("a53lhvdtnxjq9lqw", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("a53lhvdtnxjq9lqw", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;