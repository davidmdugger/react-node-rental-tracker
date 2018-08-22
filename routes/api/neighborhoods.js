const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

// load Rental model
const Rental = require("../../models/Neighborhood");

// @route GET api/neighborhoods/test
// @desc tests our a rentals route
// @access PUBLIC
router.get("/test", (req, res) =>
  res.json({ msg: "Neighborhoods test route is active" })
);

module.exports = router;
