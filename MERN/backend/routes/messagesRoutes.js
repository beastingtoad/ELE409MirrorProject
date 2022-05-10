const router = require('express').Router();
const {
    getMessages,
    postMessages,
    updateMessages,
    deleteMessages} = require('../controllers/message_controller');


// must check authorization before entering routes
router.route('/').get(getMessages)

router.route('/').post(postMessages)

router.route('/:id').put(updateMessages)

router.route('/:id').delete(deleteMessages)

module.exports = router;