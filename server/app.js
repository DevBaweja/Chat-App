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
const fs = require('fs');

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

// Serving Static files - try multiple path approaches
const clientDistPath = path.join(__dirname, '../client/dist');
const altClientPath = path.join(process.cwd(), 'client/dist');
const rootClientPath = path.join(process.cwd(), 'client/dist');

console.log('=== Directory Debug Info ===');
console.log('__dirname:', __dirname);
console.log('process.cwd():', process.cwd());
console.log('clientDistPath (../client/dist):', clientDistPath);
console.log('altClientPath (process.cwd/client/dist):', altClientPath);
console.log('rootClientPath (process.cwd/client/dist):', rootClientPath);

// Try to find which path actually exists
let staticPath = clientDistPath;
if (require('fs').existsSync(altClientPath)) {
    staticPath = altClientPath;
    console.log('✅ Using altClientPath');
} else if (require('fs').existsSync(rootClientPath)) {
    staticPath = rootClientPath;
    console.log('✅ Using rootClientPath');
} else if (require('fs').existsSync(clientDistPath)) {
    staticPath = clientDistPath;
    console.log('✅ Using clientDistPath');
} else {
    console.log('❌ No client dist found at any path');
}

console.log('Final static path:', staticPath);
app.use(express.static(staticPath));

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

// Catch-all route for SPA - must come after API routes
app.get('*', (req, res) => {
    const indexPath = path.join(staticPath, 'index.html');
    console.log('Serving SPA route:', req.url);
    console.log('Index file path:', indexPath);
    
    // Check if file exists
    if (require('fs').existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error('Index file not found at:', indexPath);
        res.status(404).json({
            status: 'error',
            message: 'Frontend build not found. Please ensure client is built.',
            path: indexPath,
            availablePaths: {
                clientDistPath,
                altClientPath,
                rootClientPath,
                staticPath
            }
        });
    }
});

// Undefined Routes - this won't be reached due to catch-all above
app.all('*', (req, res, next) => {
    next(new AppError(`Cann't find ${req.url} on this server!`, 404));
});

// Error Handling Middleware
app.use(globalErrorHandler);

module.exports = app;

// Error Handling in Prod
// Message Docs
// Me Routes
