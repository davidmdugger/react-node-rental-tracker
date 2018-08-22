const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// CREATE RENTAL SCHEMA
const RentalSchema = new Schema({
  address: {
    type: String,
    require: true
  },
  rent: {
    type: String,
    require: true
  }
  // leaseLength: {
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
  // },
  // neighborhood: {
  //   id: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Neiborhood"
  //   }
  // }
});

module.exports = Rental = mongoose.model("Rental", RentalSchema);
