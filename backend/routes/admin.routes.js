const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const { authenticateAdmin } = require("../middelware/auth.middelware");

// Define routes using the router
// router.post("/admin/login", adminController.login);
// router.get("/admin/dashboard", authenticateAdmin, adminController.dashboard);

router.get("/alladmin", adminController.getAllAdmin);
router.get("/getadminbyId/:id", adminController.getrAdminById);
router.post("/createadmin", adminController.createAdmin);
router.put("/updateadmin/:id", adminController.updateAdmin);
router.delete("/deleteadmin/:id", adminController.deleteAdmin);

module.exports = router;
