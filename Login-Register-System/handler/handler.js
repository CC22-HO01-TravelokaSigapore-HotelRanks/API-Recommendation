const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getGoogleOauthToken = require('../utils/getGoogleOauthToken');
const append = require('../utils/appendValueToArray');
const User = require('../models/model');
const replace = require('../utils/replaceValueToArray');

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
          message: 'user with the username exists',
        });
      }

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({
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
        };

        User.create(user)
          .then((user) => {
            res.status(201).send({
              message: 'user created',
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).send({
              message: err,
            });
          });
      });
    });
  } else {
    res.status(400).send({
      message: "password can't be empty",
    });
  }
};

const login = (req, res) => {
  User.findOne({ where: { userName: req.body.userName } })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          message: 'login failed',
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).send({
            message: 'login failed',
          });
        }
        if (result) {
          const accessToken = jwt.sign(
            {
              email: user.email,
              id: user.id,
              userName: user.userName,
            },
            process.env.ACCESS_TOKEN_SECRET_KEY,
            {
              expiresIn: '15m',
            },
          );
          const refreshToken = jwt.sign(
            {
              email: user.email,
              id: user.id,
              userName: user.userName,
            },
            process.env.REFRESH_TOKEN_SECRET_KEY,
            {
              expiresIn: '30d',
            },
          );
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 2.592e+9,
            secure: true,
          });
          return res.status(200).send({
            message: 'login successful',
            data: {
              userId: user.id,
              accessToken,
            },
          });
        }
        return res.status(401).send({
          message: 'login failed',
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

const refreshLogin = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(401).send({ message: `token didn't exist` });
  const decodedToken = jwt.decode(refreshToken);
  User.findOne({ where: { email: decodedToken.email } })
    .then((user) => {
      if (!user) {
        return res.status(403).send({
          message: 'forbidden',
        });
      }

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(500).send({
            message: err,
          });
        }

        const accessToken = jwt.sign(
          {
            email: decoded.email,
            id: decoded.id,
            userName: decoded.userName,
          },
          process.env.ACCESS_TOKEN_SECRET_KEY,
          {
            expiresIn: '15m',
          },
        );

        return res.status(200).send({
          message: 'successful',
          data: {
            userId: decoded.id,
            accessToken,
          },
        });
      });
    })
    .catch((err) => res.status(500).send({ message: err }));
};

const logout = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(404).send({ message: 'fail' });
  res.clearCookie('refreshToken');
  res.status(200).send({
    message: 'successful',
  });
};

const getUserById = (req, res) => {
  if (req.userData.id === parseInt(req.params.id, 10)) {
    User.findOne({ where: { id: req.params.id }, attributes: { exclude: ['password'] } })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'bad request',
          });
        }
        return res.send({
          message: 'sucessfull request',
          data: user,
        });
      })
      .catch((err) => res.status(500).send({ message: err }));
  } else {
    res.status(403).send({
      message: 'forbidden',
    });
  }
};

const update = (req, res) => {
  if (req.userData.id === parseInt(req.params.id, 10)) {
    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            status: 'fail',
            message: 'user didn\'t exist',
          });
        }

        User.sync();
        User.update(
          {
            ...req.body,
            hobby: replace(user.hobby, req.body.hobby),
            special_needs: replace(user.special_needs, req.body.special_needs),
            search_history: append(user.search_history, req.body.search_history),
            stay_history: append(user.stay_history, req.body.stay_history),
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
  } else {
    res.status(403).send({
      message: 'forbidden',
    });
  }
};

const googleLogin = async (req, res) => {
  const { code } = req.query;
  try {
    const { id_token: idToken } = await getGoogleOauthToken(code);
    const googleUser = jwt.decode(idToken);

    User.sync();
    User.findOrCreate({
      where: { email: googleUser.email },
      defaults: {
        name: googleUser.name,
        hobby: `[${request(req.body.hobby)}]`,
        search_history: `[${request(req.body.search_history)}]`,
        stay_history: `[${request(req.body.stay_history)}]`,
        special_needs: `[${request(req.body.special_needs)}]`,
        email: googleUser.email,
        userName: googleUser.name,
        password: null,
      },
    })
      .then((user, created) => {
        const userData = user[0].dataValues;
        const accessToken = jwt.sign(
          {
            email: userData.email,
            id: userData.id,
            userName: userData.userName,
          },
          process.env.ACCESS_TOKEN_SECRET_KEY,
          {
            expiresIn: '15m',
          },
        );
        const refreshToken = jwt.sign(
          {
            email: user.email,
            id: user.id,
            userName: user.userName,
          },
          process.env.REFRESH_TOKEN_SECRET_KEY,
          {
            expiresIn: '30d',
          },
        );
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 2.592e+9,
          secure: true,
        });
        return res.status(200).send({
          status: 'success',
          message: 'auth successful',
          data: {
            userId: userData.id,
            accessToken,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          status: 'fail',
          message: err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: 'fail',
      message: err,
    });
  }
};

const removeAll = (req, res) => {
  User.drop()
    .then(() => res.send({ status: 'success drop all data' }))
    .catch((err) => console.log(err));
};

module.exports = {
  register,
  login,
  refreshLogin,
  logout,
  update,
  getUserById,
  googleLogin,
  removeAll,
};
