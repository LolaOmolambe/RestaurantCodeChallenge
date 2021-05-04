const request = require("supertest");
const AppError = require("../middleware/appError");
const RestaurantService = require("../services/justEat");

describe("Restaurant service unit tests", () => {
  describe("Signup", () => {
    it("Should try to call external api outcode and get results", async () => {
      const restaurantService = new RestaurantService();
      const result = await restaurantService.restaurantApi("se19");

      expect(result).toBeDefined();
    });

    it("Should try to call external api without outcode parameter and fail", async () => {
      const restaurantService = new RestaurantService();

      expect(
        async () => await restaurantService.restaurantApi()
      ).rejects.toThrow(new AppError("Please enter outcode", 401));
    });

    it("Should try to call external api with incorrect outcode parameter and return empty result", async () => {
      const restaurantService = new RestaurantService();
      const result = await restaurantService.restaurantApi("lola");

      expect(result).toHaveLength(0);
    });
  });
});
