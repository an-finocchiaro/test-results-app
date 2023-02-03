require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

const allTestsRoute = require('./routes/allTestsRoute');
const uploadFileRoute = require('./routes/uploadFileRoute');
const uploadRoute = require('./routes/uploadRoute');
const searchTokenRoute = require('./routes/searchTokenRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/upload-file', uploadRoute);
app.use('/', uploadFileRoute);
app.use('/all-tests', allTestsRoute);
app.use('/tests', searchTokenRoute);

module.exports = app;
