require("./db/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
require('dotenv').config();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "seed-financial/build")));

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// ROUTING;
const authController = require("./controllers/register");
app.use("/auth", authController);

// const companyController = require("./controllers/api/companyController");
// app.use("/company", companyController);

const port = process.env.PORT || 9000;

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log("listening on port: " + port);
});
