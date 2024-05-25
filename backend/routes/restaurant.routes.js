const restaurantcontroller = require("../controllers/restaurant.controllers");

module.exports = function (app) {
  app.get("/allrestaurants", restaurantcontroller.getAllRestaurant);
  app.get("/getRestbyId", restaurantcontroller.getrRestaurantById);
  app.post("/createrestaurant", restaurantcontroller.createRestaurant);
  app.patch("/updaterestaurant", restaurantcontroller.updateRestaurant);
  app.delete("/deleterestaurant", restaurantcontroller.deleteRestaurant);
};