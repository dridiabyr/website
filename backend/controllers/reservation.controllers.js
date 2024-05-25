

const Reservation = require("../models/reservation.models");

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createReservation = async (req, res) => {
  const reservation = new Reservation({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    restaurant: req.body.restaurant,
  });

  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    if (req.body.name != null) {
      reservation.name = req.body.name;
    }
    if (req.body.email != null) {
      reservation.email = req.body.email;
    }
    if (req.body.phone != null) {
      reservation.phone = req.body.phone;
    }
    if (req.body.address != null) {
      reservation.address = req.body.address;
    }
    if (req.body.restaurant != null) {
      reservation.restaurant = req.body.restaurant;
    }

    const updatedReservation = await reservation.save();
    res.json(updatedReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    await reservation.remove();
    res.json({ message: "Reservation deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
