const express = require("express");
const router = express.Router();
const restauratorController = require("../controllers/restaurator.controllers");
const { authenticateRestaurator } = require("../middelware/auth.middelware");

router.post("/restaurator/login", restauratorController.login);

router.get(
  "/restaurator/dashboard",
  authenticateRestaurator,
  restauratorController.dashboard
);

module.exports = function (app) {
  app.get("/alladmin", restauratorController.getAllRestaurator);
  app.get("/getadminbyId", restauratorController.getrRestauratorById);
  app.post("/createadmin", restauratorController.createRestaurator);
  app.patch("/updateadmin", restauratorController.updateRestaurator);
  app.delete("/deleteadmin", restauratorController.deleteRestaurator);
};

module.exports = router;
