var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log("FORM", req.body);
  burger.create([
    "burger_name"
  ], [
      req.body.burger_name
    ], function (result) {
      // Send back the ID of the new quote
      // res.json({ id: result.insertId });
      res.redirect("/");
    });
});

router.post("/api/burgers/:id", function (req, res) {
  var condition = "item_id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.redirect("/")
    }
  });
});
router.put("/api/burgers/:id", function (req, res) {
  var condition = "item_id = " + req.params.id;

  console.log("condition", condition);
  console.log("devoured", req.body.devoured);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.post("/api/burgers/del/:id", function (req, res) {
  var condition = "item_id = " + req.params.id;
  // and clclcl
  res.redirect("/")
})
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "item_id = " + req.params.id;
  // and clclcl
})

// Export routes for server.js to use.
module.exports = router;