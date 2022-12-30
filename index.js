require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 5000;

//cors
app.use(cors());

//request json
app.use(express.json());

//middleware
app.use(morgan("dev"));

//routes
app.use(require("./routes/users/auth"));

//mongodb connection url
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("mongoose connected successfully");
});
mongoose.connection.on("err", (err) => {
  console.log("mongoose error", err);
});

app.get("/test", (req, res) => {
  res.json("Hello node js");
});

app.listen(port, () => {
  console.log(`Server stared ${port}`);
});
