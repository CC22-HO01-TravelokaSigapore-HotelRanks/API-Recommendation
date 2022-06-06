const axios = require('axios');

const { Review, User } = require("../models");
const { sequelize } = require('../models/index');

// Retrieve all reviews from the database.
exports.findAll = (req, res) => {
  Review.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "some error occurred while retrieving reviews."
      });
    });
};

exports.create = (req, res) => {
  if (req.userData.id === parseInt(req.params.user_id, 10)){
    // Validate request
    if (!req.body.text) {
      return res.status(400).send({
        message: "content can not be empty!"
      });
    }
    if (!req.params.hotel_id) {
      return res.status(400).send({
        message: "bad request"
      });
    }
    if (!req.params.user_id) {
      return res.status(400).send({
        message: "bad request"
      });
    }
    
    const textRequest = req.body.text;
    axios.post('https://sentiment-analysis-ywu6raktuq-uc.a.run.app', {text:[textRequest]})
    .then(response => {
        const labels = response.data.rounded[0];
        const review = {
          text: req.body.text,
          labels: labels,
          rating: req.body.rating,
          dates: new Date(),
          hotel_id: req.params.hotel_id,
          user_id: req.params.user_id,
        };

        
        Review.sync({ alter: true });
        Review.create(review)
          .then(() => {
            User.findOne({ where: { id: req.params.user_id } })
              .then((user) => {
                User.update({ reviewCounter: user.reviewCounter + 1}, { where: { id: user.id } })
                  .then((user) => {
                    if (user[0] === 1) {
                      return res.send({
                        message: 'post review success',
                      });
                    }
                    res.send({
                      message: 'post review fail',
                    });
                  })
                  .catch((err) => {
                    res.status(500).send({
                      message: err.message || "some error occurred while creating the review."
                    });
                  });
              })
              .catch((err) => {
                res.status(500).send({
                  message: err.message || "some error occurred while creating the review."
                });
              });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "some error occurred while creating the review."
            });
          });
        })
      .catch((error) => {
        res.status(404).json({
          message: error
        })
      });
  } else {
    res.status(403).send({
      message: 'forbidden',
    });
  }
};

// Find Reviews with an hotel_id
exports.findAllByHotelId = async (req, res) => {
  let pages = 1000000;
  let offset = 0;
  const hotel_id = req.params.hotel_id;
  if (req.query.page){
      pages = parseInt(req.query.page)
  }
  if (req.query.offset){
      offset = parseInt(req.query.offset)
  }

  const query = `SELECT coba_review.id, text, labels, rating, dates, Users.id as user_id, Users.name 
  FROM coba_review INNER JOIN Users ON coba_review.user_id=Users.id WHERE hotel_id=${hotel_id} LIMIT ${offset}, ${pages}`

  sequelize.query(query)
    .then(([results]) => {
      if(results.length === 0){
        return res.status(404).send({
          message: `cannot find reviews regarding the hotel with a hotel_id = ${hotel_id}.`,
        });
      }
      res.send({
        message: 'successful',
        total: results.length,
        data: results,
      });
    })
    .catch(() => {
      res.status(500).send({
        message: `cannot find reviews regarding the hotel with a hotel_id = ${hotel_id}.`,
      });
    });
};

// Find all reviews with an user_id and hotel_id
exports.findAllByHotelAndUserId = (req, res) => {
  const { hotel_id, user_id } = req.params;
  Review.findAll({ where: { hotel_id, user_id }, attributes: { exclude: ['hotel_id', 'user_id'] } })
    .then(data => {
      if (data.length === 0){
        return res.status(404).send({
          message: `cannot find Reviews with user_id = ${user_id} and hotel_id = ${hotel_id}.`,
        });
      }
        res.send({
          message: 'successful',
          data
        });
    })
    .catch(() => {
      res.status(500).send({
        message: `cannot find Reviews with user_id = ${user_id} and hotel_id = ${hotel_id}.`,   
      });
    });
};

exports.findOneById = (req, res) => {
  const { hotel_id, user_id, review_id: id } = req.params;

  const query = `SELECT coba_review.id, text, labels, rating, dates, Users.name 
  FROM coba_review INNER JOIN Users ON coba_review.user_id=Users.id WHERE hotel_id=${hotel_id} AND user_id=${user_id} AND coba_review.id=${id}`;

  sequelize.query(query)
    .then(([results]) => {
      if(results.length === 0){
        return res.status(404).send({
          message: `cannot find Reviews with user_id = ${user_id}, hotel_id = ${hotel_id}, and review_id = ${id}.`,
        });
      }
      res.send({
        message: 'successful',
        data: results[0]
      });
    })
    .catch(() => {
      res.status(500).send({
        message: `cannot find Reviews with user_id = ${user_id}, hotel_id = ${hotel_id}, and review_id = ${id}.`,   
      });
    });
};

// Update a Review by the id in the request
exports.update = (req, res) => {
  const { hotel_id, user_id, review_id: id } = req.params;
  if (req.userData.id === parseInt(user_id, 10)){
    if (!req.body.text) {
      return res.status(400).send({
        message: "content can not be empty!"
      });
    }

    axios.post('https://sentiment-analysis-ywu6raktuq-uc.a.run.app', {text:[req.body.text]})
      .then(response => {
          const labels = response.data.rounded[0];
          const review = {
            text: req.body.text,
            labels: labels,
            rating: req.body.rating,
            dates: new Date(),
          };

          Review.sync({ alter: true });
          Review.update(review, { where: { id } })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "review was updated successfully.",
                });
              } else {
                res.send({
                  message: `cannot update review with id = ${id}.`,
                });
              }
            })
            .catch(() => {
              res.status(500).send({
                message: `cannot update review with id = ${id}.`,
              });
            });
      })
      .catch((error) => {
        res.status(404).json({
          message: error
        });
      });
  } else {
    res.status(403).send({
      message: 'forbidden',
    });
  }
};

// Delete a Review with the specified id in the request
exports.delete = (req, res) => {
  const { hotel_id, user_id, review_id: id } = req.params;
  if (req.userData.id === parseInt(user_id, 10)){
    Review.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "review was deleted successfully!"
          });
        } else {
          res.send({
            message: `cannot delete review with id = ${id}`,
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          message: `cannot delete review with id =  ${id}`,
        });
      });
  } else {
    res.status(403).send({
      message: 'forbidden',
    });
  }
};