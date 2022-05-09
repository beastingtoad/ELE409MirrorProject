const js_web_token = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../mdb_models/user_model');


// middleware requires next param
const authReq = asyncHandler(async (req, res, next) => {
    let token
    if (
        req.headers.authorization && 
        // need to auth with Bearer Token along with request
        // or in body, include, token: x
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // obtain index token from header request, which holds data in array
            token = req.headers.authorization.split(' ')[1]
            
            // verify
            const decoded = js_web_token.verify(token, process.env.JSWEBTOKEN_SECRET)

            // find and get user token, do not include password
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error);
            // not authorized
            res.status(401)
            throw new Error ('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error ('Currently not authorized, please login')
    }
})

module.exports = {authReq};