const express = require("express");
const router = express.Router();
const Company = require("../models/company");
const bcrypt = require("bcryptjs");
const User = require("../models/company");

//Registration Example
router.post("/register", async (req, res) => {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userDbEntry = {};
  userDbEntry.email = req.body.email;
  userDbEntry.password = hashedPassword;
  userDbEntry.userType = "C";

  console.log(password);
  console.log(userDbEntry.email);
  console.log(userDbEntry.userType);

  try {
    const emailTaken = await User.findOne({
      email: userDbEntry.email
    });

    console.log("taken email or not: " + emailTaken);

    if (!emailTaken) {
      if (req.body.email && req.body.password) {
        console.log("====");
        console.log(userDbEntry);
        const user = await User.create(userDbEntry);
        console.log("user created: " + user);

        req.session.email = user.email;
        req.session.logged = true;
        req.session.userId = user._id;

        res.json({
          status: 200,
          data: {
            session: req.session,
            userId: user._id,
            userType: "C",
            message: "User Successfully Created"
          }
        });
      } else {
        console.log("PLEASE ENTER USERNAME AND PASSWORD.");
        res.json({
          status: 406,
          data: JSON.stringify({
            message: "PLEASE ENTER USERNAME AND PASSWORD."
          })
        });
      }
    } else {
      console.log("USERNAME TAKEN.");
      res.json({
        status: 406,
        data: JSON.stringify({
          message: "USERNAME TAKEN."
        })
      });
    }
  } catch (err) {
    console.log(`Login failed. Error: ${err}`);
    res.send(`Login failed. Error: ${err}`);
  }
});

//Login Example
router.post("/login", async (req, res) => {
  console.log(req.body.email);
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    console.log(`FOUND USER: ${foundUser}`);
    //console.log("request sent:" + req.body);

    if (foundUser) {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log("PASSWORD CORRECT.");
        req.session.message = "";
        req.session.email = foundUser.email;
        req.session.logged = true;
        req.session.userId = foundUser._id;
        console.log(`STARTED SESSION: ${req.session}`);
        res.json({
          status: 200,
          data: {
            session: req.session,
            userId: foundUser._id,
            userType: foundUser.userType
          }
        });
      } else {
        req.session.message = "USERNAME/PASS INCORRECT";
        res.json({
          status: 406,
          data: {
            message: "USERNAME/PASS INCORRECT"
          }
        });
      }
    } else {
      req.session.message = "USERNAME/PASS INCORRECT";
      res.json({
        status: 406,
        data: JSON.stringify({
          message: "USERNAME/PASS INCORRECT"
        })
      });
    }
  } catch (err) {
    res.send(err);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/company-dashboard/home");
    }
  });
});

module.exports = router;
