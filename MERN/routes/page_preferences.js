const router = require('express').Router();


router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Preferences'});
});

router.route('/').post((req, res) => {
    res.status(200).json({ message: 'Set preferences'});
});

router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `Update preference ${req.params.id}`});
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: `Delete preference ${req.params.id}`});
});

module.exports = router;