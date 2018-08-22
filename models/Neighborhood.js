const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const NeighborhoodSchema = new Schema({
  neighborhood: {
    type: String,
    require: true
  }
});

module.exports = Neighborhood = mongoose.model(
  "Neighborhood",
  NeighborhoodSchema
);
