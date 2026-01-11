// create server
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://foodflux-frontend.onrender.com"
  ],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// 🔥 FIXED STATIC VIDEO PATH
app.use(
  "/videos",
  express.static(path.join(__dirname, "..", "videos"))
);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/food-partner', foodPartnerRoutes);

module.exports = app;
