const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  number: { type: Number, required: true },
  capacity: { type: Number, required: true },
});

module.exports = mongoose.model("Table", tableSchema);
