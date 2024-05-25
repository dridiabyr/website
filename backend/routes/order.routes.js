const express = require("express");

const orderController = require("../controllers/order.controllers");

const orderRoutes = express.Router();

orderRoutes.get("/", orderController.getAllOrders);
orderRoutes.get("/:id", orderController.getOrderById);
orderRoutes.post("/", orderController.createOrder);
orderRoutes.patch("/:id", orderController.updateOrder);
orderRoutes.delete("/:id", orderController.deleteOrder);

module.exports = orderRoutes;
