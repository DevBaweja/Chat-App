const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    console.log('Hello');
    res.json({
        name: 'dev',
        age: 20,
    });
});

app.get('/users', (req, res) => {
    res.json({
        status: 'success',
        user: [
            {
                name: 'dev',
                age: 20,
            },
            {
                name: 'admin',
                age: 13,
            },
        ],
    });
});

app.listen(port, () => {
    console.log(`App is served at http://localhost:${port}`);
});
