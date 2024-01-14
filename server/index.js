const express = require('express');
const cors = require('cors');

const resumeRoute = require('./routes/resume');

const app = express();

app.use(express.json());
app.use(cors());

//test route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to server side</h1>');
});

app.use('/resume', resumeRoute);

//PORT
const PORT = 8080;

//SERVER LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});