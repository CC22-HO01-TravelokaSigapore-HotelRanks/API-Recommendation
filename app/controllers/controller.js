const { models: Review } = require("../models");
const { Op, DATE } = require('sequelize')
const axios = require('axios');

exports.create = (req, res) => {
    // Validate request
    if (!req.body.text) {
      return res.status(400).send({
        message: "Content can not be empty!"
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
          hotel_id: req.body.hotel_id,
          user_id: req.body.user_id
        };

        
        Review.sync();
        Review.create(review)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
        })
      .catch(error => {
        res.status(404).json({
          message: error
        })
      });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const text = req.query.search;
    const condition = text ? { text: { [Op.like]: `%${text}%` } } : null;
    Review.findAll({ where: condition })
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
// Find a single Tutorial with an id
exports.findOneById = (req, res) => {
    const id = req.params.id;
    Review.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
  // Find a single Tutorial with an hotel_id and user_id
  exports.findOneByUserAndHotelId = (req, res) => {
    Review.findOne({ where: { hotel_id: req.params.hotel_id, user_id:req.params.user_id} })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with hotel_id and user_id=${hotel_id} + ${user_id}.`
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          message: "Error retrieving Tutorial with hotel_id and user_id= $hotel_id + $user_id."       
        });
      });
  };
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Review.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Review was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
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