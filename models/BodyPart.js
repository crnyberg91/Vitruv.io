const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BodyParts = new Schema({
  name: {
    type: String
  }
  // id: {
  //   type: Number
  // }
});

module.exports = mongoose.model("Body", BodyParts);