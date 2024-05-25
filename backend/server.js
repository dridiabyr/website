const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Configuration de Mongoose
require("./config/mongoose.config");

// Initialisation de l'application Express
const app = express();

// Définir le port
const port = process.env.PORT || 3000;

// Middlewares pour parser les requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Importation des routes
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");
const menuRoutes = require("./routes/menu.routes");
const orderRoutes = require("./routes/order.routes");
const reservationRoutes = require("./routes/reservation.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const tableRoutes = require("./routes/table.routes");

// Utilisation des routes
app.post('/api/menus', (req, res) => {
  const menuItem = req.body;
  menuItems.push(menuItem);
  console.log('Menu item added:', menuItem);
  res.status(201).json({ message: 'Menu item added successfully', menuItem });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form data:", { name, email, message });

  res.status(200).json({ message: "Form submitted successfully!" });
});

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/table", tableRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
