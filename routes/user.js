const express = require("express");
const { createUser, userSignIn } = require("../controllers/user");
const { validate } = require("../models/user");
const {
  validateUserSignUp,
  userValidation,
  validateUserSignIn,
} = require("../middleware/validators/user");
const { isAuth } = require("../middleware/auth");

const router = express.Router();

//handling signup endpoint
router.post("/signup", validateUserSignUp, userValidation, createUser);
router.post("/login", validateUserSignIn, userValidation, userSignIn);
router.post("/create-post", isAuth, (req, res) => {
  res.send("Inside create-post");
});

module.exports = router;
