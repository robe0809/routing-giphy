const express = require('express');
const app = express();
// let port = process.env.PORT || 3000;
var path = require('path');
const axios = require('axios');
const env = require('dotenv');
const gyphyRouter = require('./routes/gyphy.router')

env.config();
var port = process.env.PORT

app.use(express.static('server/public'));

app.use('/search', gyphyRouter);


app.listen(port, () => {
    console.log(`server running on ${port}`);
});