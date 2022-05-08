const http = require('http');
const app = require('express')();
const dotenv = require('dotenv').config()
const cors = require('cors')();


const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;

const preferencesRouter = require('../routes/page_preferences');

app.use('/api/preferences', preferencesRouter);

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
