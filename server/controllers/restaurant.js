const RestaurantService = require("../services/justEat");
const { successResponse } = require("../middleware/response");

/**
 * Search for restaurants.
 * @async
 * @method
 * @property {string} outcode - Outcode.
 * @returns {Restaurant} Restaurant object
 */
exports.search = async (req, res, next) => {
  try {
    const restaurantServiceInstance = new RestaurantService();
    const result = await restaurantServiceInstance.restaurantApi(req.params.outcode);
    return successResponse(res, 200, "Results fetched successfully", result);
  } catch (err) {
    next(err);
  }
};



