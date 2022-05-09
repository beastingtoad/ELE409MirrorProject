const router = require('express').Router();
const {
    loginUser,
    registerUser,
    getUser} = require('../controllers/user_controller');
const {authReq} = require('../middleware/auth_middleware');


router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/myinfo', authReq, getUser);

module.exports = router;