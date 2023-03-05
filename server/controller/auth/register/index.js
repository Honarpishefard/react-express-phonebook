const bcrypt = require("bcrypt");
const { User } = require("../../../model/User");

const handleRegister = async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  if (!email)
    return res.status(400).json({
      message: "no email entered",
    });
  if (!password) return res.status(400).json({ message: "password is empty" });
  if (password !== repeatPassword)
    return res.status(400).json({
      message: "passwords don't match",
    });

  const duplicateUser = await User.findOne({ email });
  if (duplicateUser) {
    return res
      .status(400)
      .json({ message: "This email already exists, Login instead" });
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  const user = new User({ email, password: hashedPassword });
  user.save((err) => {
    console.log(err);
  });
  res.status(201).json({
    message: "user created",
  });
};

module.exports = { handleRegister };
