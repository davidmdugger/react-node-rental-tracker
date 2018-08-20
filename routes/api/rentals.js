const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

// load Rental model
const Rental = require("../../models/Rentals");

// @route GET api/rentals/test
// @desc tests our a rentals route
// @access PUBLIC
router.get("/test", (req, res) =>
  res.json({ msg: "Rentals test route is active" })
);

module.exports = router;
