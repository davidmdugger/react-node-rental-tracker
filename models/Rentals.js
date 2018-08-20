const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// CREATE RENTAL SCHEMA
const RentalSchema = new Schema({
  address: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  }
  // leaseTerms: {
  //   type: String,
  //   require: true
  // },
  // whenAvailable: {
  //   type: Date,
  //   default: Date.now
  // },
  // deposit: {
  //   type: String,
  //   require: true
  // },
  // contact: {
  //   type: String,
  //   require: true
  // },
  // phone: {
  //   type: String,
  //   require: true
  // }
});

module.exports = Rental = mongoose.model("rental", RentalSchema);
