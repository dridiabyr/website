const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Reservation", reservationSchema);
