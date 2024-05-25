const mongoose = require("mongoose");
const DB = "my_websiteDB";
require('dotenv').config();
const mongoURI =  `mongodb://localhost:27017/${DB}`;
mongoose
  .connect(mongoURI, {
 
  })
  .then(() => {
    console.log("DATA BASE CONECETED " + DB);
  })
  .catch((err) => {
    console.log("Data base is not ", err);
  });
