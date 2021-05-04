const express = require("express");
const restaurantController = require("../controllers/restaurant");

const router = express.Router();

router.get("/searchByPostCode/:outcode", restaurantController.search);

module.exports = router;
