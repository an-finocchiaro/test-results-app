require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
//const router = express.Router();

const allTestsRoute = require('./routes/allTestsRoute');

app.set('views', path.join(__dirname,'/app/views'));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/all-tests', allTestsRoute);

    
/*app.get("/about", (req, res) => {
  res.render('about');
});*/
 

module.exports = app;


/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api/test_results');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//app.get('/dbtest', service.getDbTest);
app.get('/test_results', api.test_results);
//app.get('/test-results', db.getTestResultsData);
app.get('/hello', (request, response) => {
  response.send('Hello world')
})
module.exports = app;*/
