module.exports = app => {
    const review = require("../controllers/controller.js");
    const router = require("express").Router();
    // Retrieve all review
    router.get("/", review.findAll);
    // Create a new review
    router.post("/:hotel_id/:user_id", review.create);
    // Retrieve all review regarding hotel_id
    router.get("/:hotel_id", review.findAllByHotelId);
    // Retrieve all review regarding hotel_id and user_id
    router.get("/:hotel_id/:user_id", review.findAllByHotelAndUserId);
    // Retrieve a review with review_id
    router.get("/:hotel_id/:user_id/:review_id", review.findOneById);
    // Update a review with id
    router.put("/:hotel_id/:user_id/:review_id", review.update);
    // Delete a review with id
    router.delete("/:review_id", review.delete);
    // // Delete all review
    // router.delete("/", review.deleteAll);
    app.use('/reviews', router);
  };