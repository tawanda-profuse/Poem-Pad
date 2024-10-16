if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const poemRoutes = require("./routes/poemRoutes");
const cors = require("cors");

// express app
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// middleware & static files
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get("/", (req, res) => {
  res.redirect("/poems");
});

app.get("/about", (req, res) => {
  res.json({ title: "About" });
});

// blog routes
app.use("/poems", poemRoutes);

// 404 page
app.use((req, res) => {
  res.json({ title: "404" });
});

// Conditionally listen on a port only if NODE_ENV=development
if (process.env.NODE_ENV !== "production") {
  var port = process.env.PORT || 5000;

  app.listen(port, function () {
    console.log("Express server listening on port " + this.address().port);
  });
}

// Export the app for serverless function in production (Vercel)
module.exports = app;
