const Restaurant = require("../models/admin.models");
module.exports.createRestaurant = (req, res) => {
  Restaurant
    .create(req.body)
    .then((Restaurant) => res.json(Restaurant))
    .catch((err) => res.json(err));
};

module.exports.getAllRestaurant = (req, res) => {
  Restaurant
    .find()
    .then((Restaurant) => res.json(Restaurant))
    .catch((err) => res.json(err));
};

module.exports.getrRestaurantById = (req, res) => {
  Restaurant
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getRestaurantById) => res.json(getRestaurantById))
    .catch((err) => res.json(err));
};

module.exports.updateRestaurant = (req, res) => {
  Restaurant
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateRestaurant) => res.json(updateRestaurant))
    .catch((err) => res.json(err));
};

module.exports.deleteRestaurant = (req, res) => {
  Restaurant
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteRestaurant) => res.json(deleteRestaurant))
    .catch((err) => res.json(err));
};

