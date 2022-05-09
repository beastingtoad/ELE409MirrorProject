// functions that respond to the error handler
// creating custom server error status code, including stack
const error_handler = (err, req, res, next) => {
    const status_code = res.status_code ? res.status_code: 500;
    res.status(status_code)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === err.stack
    })
}

module.exports = {
    error_handler,
}