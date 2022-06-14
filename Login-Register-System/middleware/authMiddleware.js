const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['x-forwarded-authorization'] && req.headers['x-forwarded-authorization'].split(' ')[1];
  if (token == null) {
    return res.status(401).send({
      message: 'unauthorized',
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        message: err,
      });
    }
    req.userData = decoded;
    next();
  });
};
