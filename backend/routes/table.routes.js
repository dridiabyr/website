const tablecontroller = require("../controllers/table.reseravtion");

module.exports = function (app) {
  app.get("/alltable", tablecontroller.getAllTable);
  app.get("/gettablebyId", tablecontroller.getTableById);
  app.post("/createtable", tablecontroller.createTable);
  app.patch("/updatetable", tablecontroller.updateTable);
  app.delete("/deletetable", tablecontroller.deleteTable);
};
