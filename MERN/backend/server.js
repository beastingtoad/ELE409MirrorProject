const http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')();


// to console log the json data request
app.use(express.json());    
app.use(express.urlencoded({ extended: false}))

// middleware
const {error_handler} = require('./middleware/error_middleware')


// establishing server and database
const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
connectDB();

// importing routes
const preferencesRouter = require('./routes/preferencesRoutes');
const usersRouter = require('./routes/usersRoutes');
const messagesRouter = require('./routes/messagesRoutes');


// enable route functions
app.use('/api/preferences', preferencesRouter);
app.use('/api/users', usersRouter);
app.use('/messages', messagesRouter);
app.use(error_handler);

// initiate server
app.listen(port, hostname, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
