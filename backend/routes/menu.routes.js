const Menucontroller = require("../controllers/menu.controllers");

module.exports = function (app) {
  app.get("/getmenu", Menucontroller.getAllMenu);
  app.get("/getmenubyId", Menucontroller.getMenuById);
 app.post("/createreservation", Menucontroller.createMenu);
  app.patch("/updatereservation/:id", Menucontroller.updateMenu);
  app.delete("/deletereservatin/:id", Menucontroller.deleteMenu);
};
