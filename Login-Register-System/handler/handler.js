const bcrypt = require('bcrypt');
const User = require('../models/model');

function request(req) {
  if (!req) {
    return ('');
  }
  return req;
}

const register = (req, res) => {
  User.sync()
    .then(() => console.log('Success sync'))
    .catch((err) => console.log(`Fail: ${err}`));

  if (req.body.password) {
    User.findOne({ where: { userName: req.body.userName } }).then((user) => {
      if (user) {
        return res.status(409).send({
          status: 'fail',
          message: 'user exists',
        });
      }

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({
            status: 'error',
            message: err,
          });
        }

        const user = {
          name: req.body.name,
          birth_date: req.body.birth_date,
          nid: req.body.nid,
          family: req.body.family,
          hobby: `[${request(req.body.hobby)}]`,
          search_history: `[${request(req.body.search_history)}]`,
          stay_history: `[${request(req.body.stay_history)}]`,
          special_needs: `[${request(req.body.special_needs)}]`,
          email: req.body.email,
          userName: req.body.userName,
          password: hash,
          age: req.body.age,
        };

        User.create(user)
          .then((user) => {
            res.status(201).send({
              status: 'success',
              message: 'user created',
              data: user,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).send({
              status: 'fail',
              message: err,
            });
          });
      });
    });
  } else {
    res.status(400).send({
      status: 'fail',
      message: "password can't be empty",
    });
  }
};

const authenticate = (req, res) => {
  User.findOne({ where: { userName: req.body.userName } })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          status: 'fail',
          message: 'auth failed',
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).send({
            status: 'fail',
            message: 'auth failed',
          });
        }
        if (result) {
          return res.status(200).send({
            status: 'success',
            message: 'auth successful',
            data: {
              userId: user.id,
            },
          });
        }
        return res.status(401).send({
          status: 'fail',
          message: 'auth failed',
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: 'fail',
        message: err,
      });
    });
};

const getUserById = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (!user) {
        return res.status(400).send({
          status: 'fail',
          message: 'bad request',
        });
      }

      res.send({
        status: 'success',
        message: 'sucessfull request',
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: 'fail',
        message: err,
      });
    });
};

// function for append value to attribute that have "categorical and list" of data within
function append(user, req) {
  let newStr = '';

  if (!req) {
    return user;
  }

  let userAttr = user.replace(/[\[\]]/g, '');
  if (userAttr.length > 1) {
    newStr = ` ${req}`;
    userAttr = userAttr.split(',');
    userAttr.push(newStr);
    userAttr = `[${userAttr.toString()}]`;
    return userAttr;
  }

  newStr = `${req}`;
  userAttr = userAttr.split('');
  userAttr.push(newStr);
  userAttr = `[${userAttr.toString()}]`;
  return userAttr;
}

const update = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (!user) {
        return res.status(400).send({
          status: 'fail',
          message: 'user didn\'t exist',
        });
      }

      User.update(
        {
          ...req.body,
          hobby: append(user.hobby, req.body.hobby),
          search_history: append(user.search_history, req.body.search_history),
          stay_history: append(user.stay_history, req.body.stay_history),
          special_needs: append(user.special_needs, req.body.special_needs),
        },
        { where: { id: user.id } },
      )
        .then((user) => {
          res.send({
            status: 'success',
            message: 'sucessfull update',
            data: user,
          });
        })
        .catch((err) => {
          res.status(500).send({
            status: 'fail',
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        status: 'fail',
        message: err,
      });
    });
};

const removeAll = (req, res) => {
  User.drop()
    .then(() => res.send({ status: 'success drop all data' }))
    .catch((err) => console.log(err));
};

module.exports = {
  register,
  authenticate,
  update,
  getUserById,
  removeAll,
};
