const jwt = require('jsonwebtoken');

exports.accessToken = ({ email, id, userName }) => {
  return jwt.sign(
    {
      email,
      id,
      userName,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: '15m',
    },
  );
};

exports.refreshToken = ({ email, id, userName }) => {
  return jwt.sign(
    {
      email,
      id,
      userName,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
      expiresIn: '30d',
    },
  );
};
