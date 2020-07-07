const express = require('express');
const cors = require('cors');

// Routers
const userRouter = require('./routes/userRouter');
// Init express app
const app = express();

// ------------------------
// Middleware Stack
// CORS
app.use(cors());

// Body Parser
app.use(
    express.json({
        limit: '10kb',
    })
);

// User Middlewares
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'development') console.log('Incoming Request');
    next();
});
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
});

// -----------------------
// Routes
app.use('/api/v1/users', userRouter);

module.exports = app;
