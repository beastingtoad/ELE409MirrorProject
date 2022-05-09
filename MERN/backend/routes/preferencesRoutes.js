const router = require('express').Router();
const {
        getPreferences, 
        setPreferences,
        updatePreferences,
        deletePreferences} = require('../controllers/preference_controller');
const {authReq} = require('../middleware/auth_middleware');

// must check authorization before entering routes
router.route('/').get(authReq, getPreferences)

router.route('/').post(authReq, setPreferences)

router.route('/:id').put(authReq, updatePreferences)

router.route('/:id').delete(authReq, deletePreferences)

module.exports = router;