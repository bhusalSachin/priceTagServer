const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!email) throw new Error("Enter email");

  try {
    const testEmail = await User.findOne({ email });
    const testUser = await User.findOne({ username });

    if (testUser) {
      res.json({
        status: "Failed",
        message: "username already in use",
      });
      return;
    }
    if (testEmail) {
      res.json({
        status: "Failed",
        message: "Email already in use",
      });
      return;
    }
  } catch (err) {
    console.log(err.message);
  }
  const user = await User({
    username: req.body.username,
    email,
    password,
  });
  await user.save();
  res.json(user);
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.json({
      success: false,
      message: "User not foun with the given email",
    });

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return res.json({
      success: false,
      message: "Email/Password does not match in the record",
    });

  const token = jwt.sign({ userId: user._id }, "VerySecretKey", {
    expiresIn: "1d",
  });

  res.send({ success: true, user, token });
};
