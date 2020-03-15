var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// this will be our data base's data structure
var ClassworksSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    headline: String,
    subhead: String,
    company_name: String,
    address_1: String,
    address_2: String,
    po: String,
    state: String,
    email: String,
    image_url: String,
  },
  {
    timestamps: true
  }
);

// singular capitalized name for the mongo collection
module.exports = mongoose.model("Classwork", ClassworksSchema);

//https://mongoosejs.com/docs/models.html
