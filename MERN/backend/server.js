const http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')();
// to console log the json data request
app.use(express.json());    
app.use(express.urlencoded({ extended: false}))
const {error_handler} = require('./middleware/error_middleware')
const connectDB = require('./config/db');


const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;
connectDB();

const preferencesRouter = require('../routes/page_preferences');

app.use('/api/preferences', preferencesRouter);

app.use(error_handler);
/**
 * const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
    })
 * 
 */


app.listen(port, hostname, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
