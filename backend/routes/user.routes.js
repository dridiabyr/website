const express = require("express");
const userrouter = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controllers");
// const { authmiddleware } = require("../middleware/auth.middleware");

// Routes utilisateur avec authentification middleware si nécessaire
userrouter.post("/register", authController.signUp);
userrouter.post("/login", userController.login);
//userrouter.get("/user/profile", authmiddleware, authController.profile);

// Routes admin
userrouter.get("/", userController.getAllUsers);
userrouter.get("/getuserbyId/:id", userController.getUserById); // Added :id to match the route parameter
userrouter.get("/getuserbyEmail/:email", userController.getUserByEmail); // New route for get by email
userrouter.post("/createuser", userController.createUser);
userrouter.patch("/updateuser/:id", userController.updateUser); // Added :id to match the route parameter
userrouter.delete("/deleteuser/:id", userController.deleteUser); // Added :id to match the route paramete
module.exports = userrouter;
