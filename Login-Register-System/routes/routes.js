const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const getGoogleConsentUrl = require('../utils/getGoogleConsentUrl');
const {
  register,
  removeAll,
  login,
  refreshLogin,
  getUserById,
  update,
  googleLogin,
  logout,
} = require('../handler/handler');

router.route('/')
  .delete(removeAll);

router.route('/register')
  .post(register);

router.route('/login')
  .post(login);

router.route('/login/refresh-login')
  .get(refreshLogin);

router.route('/login/google/consent')
  .get((req, res) => {
    res.redirect(getGoogleConsentUrl());
  });

router.route('/login/google/callback')
  .get((req, res) => {
    const { code } = req.query;
    res.send({
      code,
    });
  });

router.route('/login/google/auth')
  .get(googleLogin);

router.route('/logout')
  .delete(logout);

router.route('/:id')
  .get(authMiddleware, getUserById)
  .put(authMiddleware, update);

module.exports = router;
