const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

// load Rental model
const Rental = require("../../models/Rental");

// @route GET api/rentals/test
// @desc tests our a rentals route
// @access PUBLIC
router.get("/test", (req, res) =>
  res.json({ msg: "Rentals test route is active" })
);

// @route GET api/rentals
// @desc retrieves all rentals
// @access PUBLIC
router.get("/", (req, res) => {
  Rental.find()
    .then(rentals => res.json(rentals))
    .catch(err => res.statusMessage(404).json({ notfound: "No rentals" }));
});

module.exports = router;
