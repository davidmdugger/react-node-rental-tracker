const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const port = 8080 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rentals = require("./routes/api/rentals");
const neighborhoods = require("./routes/api/neighborhoods");

// DB CONFIG
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGODB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB is connected"))
  .catch(err => console.log(err));

// use imported routes
app.use("/api/rentals", rentals);
app.use("/api/neighborhoods", neighborhoods);

app.listen(port, () => console.log(`Server is running on ${port}`));
