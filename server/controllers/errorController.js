const AppError = require('../utils/appError');

const sendErrorDev = (err, req, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, req, res) => {
    // Operational, trusted error
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
        // Programming or other unknow error
    } else {
        // Log error
        // console.error('Error: ', err);
        // Send generic message
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong',
        });
    }
};

const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
    let value = err.message.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    value = value.replace(/"/g, '');
    const message = `${value} already exists. Please use another value!`;
    return new AppError(message, 400);
};
const handleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map((cur) => cur.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
    // return new AppError(err.message, 400);
};

const handleJWTError = () => {
    return new AppError('Invalid token. Please log in again!', 401);
};

const handleJWTExpiredError = () => {
    return new AppError(
        'Your token has been expired! Please log in again',
        401
    );
};

const handleUserValidationError = (err) => {
    let { message } = err;
    message = message.replace('User validation failed: ', '');
    return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
    }
    if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        // Saving message
        error.message = err.message;
        switch (true) {
            // Cast Error
            case error.name === 'CastError':
                error = handleCastErrorDB(error);
                break;
            case error.code === 11000:
                error = handleDuplicateFieldsDB(error);
                break;
            case error.name === 'ValidationError':
                error = handleValidationErrorDB(error);
                break;
            case error.name === 'JsonWebTokenError':
                error = handleJWTError();
                break;
            case error.name === 'TokenExpiredError':
                error = handleJWTExpiredError();
                break;
            case error._message === 'User validation failed':
                error = handleUserValidationError(error);
                break;
            default:
                break;
        }
        sendErrorProd(error, req, res);
    }
};
