const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const Admin = require("../models/admin.models");
restaurator = require("../models/restaurator.models");

function authmiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(" ")[1]; // Corrected splitting method

  if (!accessToken) {
    return res.status(401).send({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: "Token has been tampered!" });
    }
    const email = decoded.email;
    const foundUser = Promise.any([
      User.findOne({ email: email }),
      Admin.findOne({ email: email }),
      restaurator.findOne({ email: email }),
    ]);
    if (!foundUser) {
      return res.status(401).send({ message: "User doesn't exist !! " });
    }

    if (foundUser instanceof User) {
      req.userType = "user";
    } else if (foundUser instanceof Admin) {
      req.userType = "Admin";
    } else if (foundUser instanceof restaurator) {
      req.userType = "restaurator";
    }

    req.User = foundUser;
    next();
  } catch (err) {
    res.status(401).send({ message: "Token has been tampererd" });
  }
}

module.exports = {
  authmiddleware,
//  authenticateAdmin,
 // authenticateRestaurator,
};
