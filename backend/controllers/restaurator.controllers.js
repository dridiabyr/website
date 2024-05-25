const Restaurator = require("../models/user.models");

module.exports.createRestaurator = (req, res) => {
  Restaurator
    .create(req.body)
    .then((Restaurator) => res.json(Restaurator))
    .catch((err) => res.json(err));
};

module.exports.getAllRestaurator = (req, res) => {
  Restaurator
    .find()
    .then((Restaurator) => res.json(Restaurator))
    .catch((err) => res.json(err));
};

module.exports.getrRestauratorById = (req, res) => {
  Restaurator
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getRestauratorById) => res.json(getRestauratorById))
    .catch((err) => res.json(err));
};

module.exports.updateRestaurator = (req, res) => {
  Restaurator
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateRestaurator) => res.json(updateRestaurator))
    .catch((err) => res.json(err));
};

module.exports.deleteRestaurator = (req, res) => {
  Restaurator
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteRestaurator) => res.json(deleteRestaurator))
    .catch((err) => res.json(err));
};


