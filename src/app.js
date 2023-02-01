require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const multer = require('multer');

const allTestsRoute = require('./routes/allTestsRoute');
const uploadFileRoute = require('./routes/uploadFileRoute');
const uploadRoute = require('./routes/uploadRoute');
const searchTokenRoute = require('./routes/searchTokenRoute');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use(expressLayouts);
app.set('view engine', 'ejs');


//app.set('views','/views/');

const upload = multer({dest: "uploads/"})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/upload-file', uploadRoute);
app.use('/uploads', uploadFileRoute);
app.use('/all-tests', allTestsRoute);
app.use('/tests', searchTokenRoute);

module.exports = app;
