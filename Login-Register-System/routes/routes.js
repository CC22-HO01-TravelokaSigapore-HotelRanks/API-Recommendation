const router = require('express').Router();

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
  .post(register)f;

router.route('/login')
  .post(authenticate);

router.route('/:id')
  .get(getUserById)
  .put(update);
module.exports = router;
