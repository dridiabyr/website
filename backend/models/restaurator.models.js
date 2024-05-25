const mongoose = require("mongoose");

const restauratorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "restaurator"],
    default: "user",
  },
});

const Restaurator = mongoose.model("Restaurator", restauratorSchema);
//KEN user
module.exports = Restaurator;
