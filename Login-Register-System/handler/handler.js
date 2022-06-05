const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getGoogleOauthToken = require('../utils/getGoogleOauthToken');
const getJsonWebtoken = require('../utils/getJsonWebToken');
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
        return res.status(400).send({
          message: 'username has already been used',
        });
      }

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({
            message: err || 'internal server error',
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
          .then(() => {
            res.status(201).send({
              message: 'successful',
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: err || 'internal server error',
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
        return res.status(400).send({
          message: 'there is no user with related credentials',
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(500).send({
            message: err || 'internal server error',
          });
        }
        if (result) {
          const accessToken = getJsonWebtoken.accessToken(user);
          const refreshToken = getJsonWebtoken.refreshToken(user);

          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 2.592e+9,
            secure: true,
          });
          return res.status(200).send({
            message: 'successful',
            data: {
              userId: user.id,
              accessToken,
            },
          });
        }
        return res.status(400).send({
          message: 'there is no user with the related credentials',
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err || 'internal server error',
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
            message: err || 'internal server error',
          });
        }

        const accessToken = getJsonWebtoken.accessToken(decoded);

        return res.status(200).send({
          message: 'successful',
          data: {
            userId: decoded.id,
            accessToken,
          },
        });
      });
    })
    .catch((err) => res.status(500).send({ message: err || 'internal server error' }));
};

const logout = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.status(404).send({ message: 'already logged out' });
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
            message: 'user not found',
          });
        }
        return res.send({
          message: 'sucessfull',
          data: user,
        });
      })
      .catch((err) => res.status(500).send({ message: err || 'internal server error' }));
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
            message: 'user not found',
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
            if (user[0] === 1) {
              return res.send({
                message: 'sucessfull',
              });
            }
            res.send({
              message: `fail`,
            });
          })
          .catch((err) => {
            res.status(500).send({
              message: err || 'internal server error',
            });
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: err || 'internal server error',
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

        const accessToken = getJsonWebtoken.accessToken(userData);
        const refreshToken = getJsonWebtoken.refreshToken(userData);

        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 2.592e+9,
          secure: true,
        });
        return res.status(200).send({
          message: 'successful',
          data: {
            userId: userData.id,
            accessToken,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: err || 'internal server error',
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err || 'internal server error',
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
