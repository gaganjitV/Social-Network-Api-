const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtCont');

// calls to the /api/thoughts route
router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtsId').get(getSingleThought).put(updateThought);


router.route('/:thoughtsId').get(getSingleThought).delete(deleteThought);


router.route('/:thoughtsId/reactions').post(addReaction);


router.route('/:thoughtsId/reactions/:reactionId').delete(removeReaction);

module.exports = router;