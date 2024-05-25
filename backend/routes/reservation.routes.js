// routes/reservationRoutes.js

const express = require("express");
const reservationrouter = express.Router();
const reservationController = require("../controllers/reservation.controllers");

reservationrouter.get("/getallreservation", reservationController.getAllReservations);
reservationrouter.get("/getreservtaionbyId/:id", reservationController.getReservationById);
reservationrouter.post("/createreservation", reservationController.createReservation);
reservationrouter.patch("/updatereservation/:id", reservationController.updateReservation);
reservationrouter.delete("/deletereservation/:id", reservationController.deleteReservation);

module.exports = reservationrouter;
