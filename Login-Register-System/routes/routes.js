const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  register,
  removeAll,
  authenticate,
  getUserById,
  update,
} = require('../handler/handler');

router.route('/')
  .delete(removeAll);

router.route('/register')
  .post(register);

router.route('/login')
  .post(authenticate);

router.route('/:id')
  .get(authMiddleware, getUserById)
  .put(authMiddleware, update);

module.exports = router;
