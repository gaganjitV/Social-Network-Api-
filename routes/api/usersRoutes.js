const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend, 
  removeFriend,
} = require('../../controllers/userCont.js');


//calls to the /api/users route
router.route('/').get(getUsers).post(createUser);


router
  .route('/:usersId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


router.route('/:usersId/friends/:friendId').post(addFriend);


router.route('/:usersId/friends/:friendId').delete(removeFriend);

module.exports = router;