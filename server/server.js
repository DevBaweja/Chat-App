const mongoose = require('mongoose');
const dotenv = require('dotenv');

// ------------
// Loading env variables
dotenv.config({ path: './config.env' });

const app = require('./app');

// ------------
// Connecting database
const DB = process.env.DATABASE_LOCAL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB connection successful');
    });

// ------------
// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is served at http://localhost:${PORT}`);
});
