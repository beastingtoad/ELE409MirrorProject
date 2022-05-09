const router = require('express').Router();
const {getPreferences, 
        setPreferences,
        updatePreferences,
        deletePreferences} = require('../backend/controllers/preference_controller')


router.route('/').get(getPreferences)

router.route('/').post(setPreferences)

router.route('/:id').put(updatePreferences)

router.route('/:id').delete(deletePreferences)

module.exports = router;