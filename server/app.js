const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

// Routers
const userRouter = require('./routes/userRoutes');
const settingRouter = require('./routes/settingRoutes');
const requestRouter = require('./routes/requestRoutes');
const friendRouter = require('./routes/friendRoutes');
const messageRouter = require('./routes/messageRoutes');

// Controllers
const globalErrorHandler = require('./controllers/errorController');
// Utils
const AppError = require('./utils/appError');

// Init express app
const app = express();

// ------------------------
// Middleware Stack

// CORS
app.use(cors());

// Serving Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Http Headers
app.use(helmet());

// API Limiting
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body Parser
app.use(
    express.json({
        limit: '10kb',
    })
);
// Cookie Parser
app.use(cookieParser());

// Data Sanitization against NoSql query injection
app.use(mongoSanitize());

// Data Sanitization against xss
app.use(xss());

// Parameter Pollution
app.use(
    hpp({
        whitelist: [],
    })
);
// Compress
app.use(compression());

// Developing logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

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
const url = '/api/v1/';
app.use(`${url}users`, userRouter);
app.use(`${url}settings`, settingRouter);
app.use(`${url}requests`, requestRouter);
app.use(`${url}friends`, friendRouter);
app.use(`${url}messages`, messageRouter);

// Undefined Routes
app.all('*', (req, res, next) => {
    next(new AppError(`Cann't find ${req.url} on this server!`, 404));
});

// Error Handling Middleware
app.use(globalErrorHandler);

module.exports = app;

// Error Handling in Prod
// Message Docs
// Me Routes
