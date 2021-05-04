const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("../routes/restaurant");
const AppError = require("../middleware/appError");
const errorHandler = require("../middleware/errorHandler");

exports.expressApp = (app) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware 
  app.use(bodyParser.json());

  // Load API routes
  app.use("/api/v1", routes);

  /// catch 404 and forward to error handler
  app.all("*", (req, res, next) => {
    next(
      new AppError(`Thus endpoint  ${req.originalUrl} does not exist!`, 404)
    );
  });

  app.use(errorHandler);
};
