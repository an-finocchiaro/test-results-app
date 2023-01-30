require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const multer = require('multer');

const allTestsRoute = require('./routes/allTestsRoute');
const uploadFileRoute = require('./routes/uploadFileRoute');
const uploadRoute = require('./routes/uploadRoute');

app.set('views', path.join(__dirname,'/app/views'));
app.set('view engine', 'ejs');
app.use(express.static('views'));

const upload = multer({dest: "uploads/"})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/upload-file', uploadRoute);
app.use('/uploads', uploadFileRoute);
app.use('/all-tests', allTestsRoute);

module.exports = app;
