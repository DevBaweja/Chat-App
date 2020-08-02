const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception');
    console.log(err.name, err.message);
    process.exit(1);
});

// ------------
// Loading env variables
dotenv.config({ path: './config.env' });

const app = require('./app');
const socket = require('./socket');

// ------------
// Connecting database
const DB =
    process.env.NODE_ENV !== 'development'
        ? process.env.DATABASE.replace(
              '<PASSWORD>',
              process.env.DATABASE_PASSWORD
          )
        : process.env.DATABASE_LOCAL;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(
            `DB connection successful to ${con.connection.host}:${con.connection.port}`
        );
    });

// ------------
// Port
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`App is served at http://localhost:${PORT}`);
});
const io = socket.init(server);
io.on('connection', () => console.log('Connection Established'));

process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
