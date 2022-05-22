module.exports = app => {
    const review = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new review
    router.post("/", review.create);
    // Retrieve all review
    router.get("/", review.findAll);
    // Retrieve a single review with id
    router.get("/:id", review.findOne);
    // Retrieve a single review with user_id and hotel_id
    router.get("/:user_id/:hotel_id", review.findOne);
    // Update a review with id
    router.put("/:id", review.update);
    // Delete a review with id
    router.delete("/:id", review.delete);
    // Delete all review
    router.delete("/", review.deleteAll);
    app.use('/api/reviews', router);
  };