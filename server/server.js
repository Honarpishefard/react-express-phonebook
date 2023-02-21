const express = require("express");
const server = express();
const appRootPath = require("app-root-path");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({
  path: appRootPath + "/.env",
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
mongoose.connect("mongodb://127.0.0.1:27017/phoneBook").then(console.log('DB connected'));

server.use(cors());
server.use(express.json({ extended: false }));
server.use('/api', require('./routes').router);

const handleMainRoute = (req, res) => {
  res.json({ home: "home" });
};

server.get("/", handleMainRoute);

