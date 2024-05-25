const Table = require("../models/admin.models");
module.exports.createTable = (req, res) => {
  Table
    .create(req.body)
    .then((Table) => res.json(Table))
    .catch((err) => res.json(err));
};

module.exports.getAllTable = (req, res) => {
  Table
    .find()
    .then((Table) => res.json(Table))
    .catch((err) => res.json(err));
};

module.exports.getTableById = (req, res) => {
  Table
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getTableById) => res.json(getTableById))
    .catch((err) => res.json(err));
};

module.exports.updateTable = (req, res) => {
  Table
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateTable) => res.json(updateTable))
    .catch((err) => res.json(err));
};

module.exports.deleteTable = (req, res) => {
  Table
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteTable) => res.json(deleteTable))
    .catch((err) => res.json(err));
};

