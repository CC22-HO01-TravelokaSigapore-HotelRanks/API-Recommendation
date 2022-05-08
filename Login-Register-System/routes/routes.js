const router = require('express').Router();

const {
  register,
  removeAll,
  authenticate,
  getUserById,
  update,
} = require('../handler/handler');

router.route('/register')
  .post(register)
  .delete(removeAll);

router.route('/login')
  .post(authenticate);

router.route('/:id')
  .get(getUserById)
  .put(() => {});
module.exports = router;
