const config = require("../config");
const Logger = require("../loaders/logger");
const AppError = require("../middleware/appError");
const axios = require("axios");

class AuthService {
  constructor() {}

  async restaurantApi(outcode) {
    try {
      Logger.silly("Restaurant search service");

      if (!outcode) {
        throw new AppError("Please enter outcode", 401);
      }

      let result = await axios.get(
        `https://uk.api.just-eat.io/restaurants/bypostcode/${outcode}`
      );
     
      if (!result) {
        throw new AppError("No records found for this outcode", 401);
      }

      return result.data.Restaurants;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = AuthService;
