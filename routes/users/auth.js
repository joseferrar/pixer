const express = require("express");
const router = express.Router();
const authSchema = require("../../schemas/Auth");
const bcrypt = require("bcryptjs");

router.post("/api/register", async (req, res) => {
  try {
    var emailExists = await authSchema.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json("Email already exists");
    }
    var hash = await bcrypt.hash(req.body.password, 10);

    const user = await new authSchema({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role || "user",
      password: hash,
      status: req.body.status,
    });

    const data = await user.save();
    res.send(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
