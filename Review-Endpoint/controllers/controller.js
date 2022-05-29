const { models: Review } = require("../models");
const { Op, DATE } = require('sequelize')
const axios = require('axios');

// Retrieve all Tutorials from the database.
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
          user_id: req.params.user_id
        };

        
        Review.sync({ alter: true });
        Review.create(review)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "some error occurred while creating the review."
            });
          });
        })
      .catch(error => {
        res.status(404).json({
          message: error
        })
      });
};

// Find Reviews with an hotel_id
exports.findAllByHotelId = (req, res) => {
  const hotel_id = req.params.hotel_id;
  Review.findAll({ where: { hotel_id: req.params.hotel_id } })
    .then(data => {
      if (data.length === 0){
        return res.status(404).send({
          message: `cannot find reviews regarding the hotel with a hotel_id = ${hotel_id}.`,
        });
      }
        res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `cannot find reviews regarding the hotel with a hotel_id = ${hotel_id}.`,
      });
    });
};

// Find all reviews with an user_id and hotel_id
exports.findAllByHotelAndUserId = (req, res) => {
  const { hotel_id, user_id } = req.params;
  Review.findAll({ where: { hotel_id, user_id } })
    .then(data => {
      if (data.length === 0){
        return res.status(404).send({
          message: `cannot find Reviews with user_id = ${user_id} and hotel_id = ${hotel_id}.`,
        });
      }
        res.send(data);
    })
    .catch(() => {
      res.status(500).send({
        message: `cannot find Reviews with user_id = ${user_id} and hotel_id = ${hotel_id}.`,   
      });
    });
};

exports.findOneById = (req, res) => {
  const { hotel_id, user_id, review_id: id } = req.params;
  Review.findOne({ where: { hotel_id, user_id, id } })
    .then((data) => {
      if(data.length === 0){
        return res.status(404).send({
          message: `cannot find Reviews with user_id = ${user_id}, hotel_id = ${hotel_id}, and review_id = ${id}.`,
        });
      }
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({
        message: `cannot find Reviews with user_id = ${user_id}, hotel_id = ${hotel_id}, and review_id = ${id}.`,   
      });
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const { hotel_id, user_id, review_id: id } = req.params;
  const textRequest = req.body.text;

  if (!req.body.text) {
    return res.status(400).send({
      message: "content can not be empty!"
    });
  }

  axios.post('https://sentiment-analysis-ywu6raktuq-uc.a.run.app', {text:[textRequest]})
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
    })

  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};