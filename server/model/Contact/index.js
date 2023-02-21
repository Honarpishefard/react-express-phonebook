const mongoose = require("mongoose");

const Constact = mongoose.model("contact", {
  name: { type: String, require: true },
  number: { type: Number, require: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = { Constact };
