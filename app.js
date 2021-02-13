var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const serviceTypeRouter = require("./routes/serviceType");
const orderRouter = require("./routes/order");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;
var app = express();

mongoose
  .connect(mongoURI, {
    // some options to deal with deprecated warning
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${mongoURI}`);
  })
  .catch((err) => console.log(err));

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/service-type", serviceTypeRouter);
app.use("/order", orderRouter);

// catch 404 and forard to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});

/* Initialize Error Handling */
app.use((err, req, res, next) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return res.status(400).json({
      status: "fail",
      message: error.message,
    });
  } else {
    return res.status(500).json({
      status: "fail",
      message: "internal server error",
    });
  }
});

module.exports = app;
