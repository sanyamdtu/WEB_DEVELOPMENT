var router = require("express").Router();
var User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var config = require("../config/default.json");
const { check, validationResult } = require("express-validator");
/*
  route  -- get /api/users
  desc   -- get all the contacts of a user
  access --public
 */
router.post(
  "/",
  check("email", "error of username").isEmail(),
  check("name", "pleae add name")
    .not()
    .isEmpty(),
  check("password", "password length_too short").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      var { password, name, email } = req.body;
      user = await User.findOne({ email });
      if (user) res.status(400).json({ msg: "user already exist" });
      var salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      //console.log("works");
      user = new User({
        password,
        email,
        name,
      });
      //console.log("works");
      await user.save();
      //console.log("works");
      jwt.sign(
        { id: user._id },
        "secretkey",
        { expiresIn: "1h" },
        (err, token) => {
          if (err) console.error(err);
          console.log("works");
          res.json({ token: token });
        }
      );
    } catch {
      (err) => res.status(400).json({ msg: "server EROOR!!" });
    }
  }
);
module.exports = router;
