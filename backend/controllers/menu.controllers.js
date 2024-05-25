const Menu = require("../models/admin.models");
module.exports.createMenu = (req, res) => {
  Menu
    .create(req.body)
    .then((menu) => res.json(menu))
    .catch((err) => res.json(err));
};

module.exports.getAllMenu = (req, res) => {
  Menu
    .find()
    .then((Menu) => res.json(Menu))
    .catch((err) => res.json(err));
};

module.exports.getMenuById = (req, res) => {
  Menu
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getMenuById) => res.json(getMenuById))
    .catch((err) => res.json(err));
};

module.exports.updateMenu = (req, res) => {
  Menu
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateMenu) => res.json(updateMenu))
    .catch((err) => res.json(err));
};

module.exports.deleteMenu = (req, res) => {
  Menu
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteMenu) => res.json(deleteMenu))
    .catch((err) => res.json(err));
};

