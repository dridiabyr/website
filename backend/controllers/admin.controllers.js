const Admin = require("../models/admin.models");

module.exports.createAdmin = (req, res) => {
  Admin
    .create(req.body)
    .then((Admin) => res.json(Admin))
    .catch((err) => res.json(err));

    
};

module.exports.getAllAdmin = (req, res) => {
  Admin
    .find()
    .then((Admin) => res.json(Admin))
    .catch((err) => res.json(err));
};
 
module.exports.getrAdminById = (req, res) => {
  Admin
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getAdminById) => res.json(getAdminById))
    .catch((err) => res.json(err));
};

module.exports.updateAdmin = (req, res) => {
  Admin
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateAdmin) => res.json(updateAdmin))
    .catch((err) => res.json(err));
};

module.exports.deleteAdmin = (req, res) => {
  Admin
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteAdmin) => res.json(deleteAdmin))
    .catch((err) => res.json(err));
};


