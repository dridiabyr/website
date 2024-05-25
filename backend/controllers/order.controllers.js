const Order = require("../models/order.models");

// Create Order
module.exports.createOrder = (req, res) => {
  console.log("body",req.body)
  Order.create(req.body)
    .then((createdOrder) => res.json({data:createdOrder}))
    .catch((err) => res.status(400).json({ error: err.message }));
};

// Get All Orders
module.exports.getAllOrders = (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Get Order By ID
module.exports.getOrderById = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Update Order
module.exports.updateOrder = (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedOrder) => {
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(updatedOrder);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
};

// Delete Order
module.exports.deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((deletedOrder) => {
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json({ message: "Order deleted successfully" });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
};
