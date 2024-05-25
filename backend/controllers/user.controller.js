const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Secret key for JWT
const JWT_SECRET = "RestaurantSecretKey";
module.exports.createUser = (req, res) => {
  const { email, username, password, role } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Create user with hashed password
    User.create({ email, username, password: hashedPassword, role })
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  });
};



module.exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.getUserByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => {
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        console.log(user);
        return res.status(404).json({ message: "User not found" });
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const payload = { id: user._id, email: user.email };
          const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
          res.json({ token ,user});
        } else {
          res.status(400).json({ message: "Invalid credentials" });
        }
      });
    })
    .catch((err) => res.status(400).json(err));
};
