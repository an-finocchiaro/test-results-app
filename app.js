const express = require('express');
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


module.exports = app;
