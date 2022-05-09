const js_web_token = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../mdb_models/user_model');

// @desc    Authenticate an existing user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    // using bcrypt to compare hash passwords
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, name: user.name,
            email: user.email, role: user.role,
            token: generate_token(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid, check your credentials and try again')
    }
});

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // VARIABLES FOR KEY BODY FIELD
    const {name, email, password, role} = req.body;
    const userExists = await User.findOne({email});
    console.log(req.body);
    // error handling:
    if (!(name || email || password)) {
        res.status(400)
        throw new Error('Please ensure all fields are filled')
    }
    // need to implement password injection check
    if (userExists) {
        res.status(400)
        throw new Error('User has already been created')
    }
    // create hash password
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    // create new user
    const user = await User.create({
        name, email, password: hash_password, role
    });
    if (user) {
        res.status(201).json({
            _id: user._id, name: user.name,
            role: user.role, token: generate_token(user._id)
        })
    } 
    else {
        res.status(400)
        throw new Error('New user data error, please try again later')
    }
});

// @desc    Return current user data
// @route   GET /api/users/myinfo
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    // must authorize by obtaining login credentials
    // i.e., by the js_web_token
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({id: _id, name, email})
});

// generate json web token
const generate_token = (id) => {
    return js_web_token.sign({id}, process.env.JSWEBTOKEN_SECRET,{
        expiresIn: '25d',
    })
}


module.exports = {loginUser, registerUser, getUser};