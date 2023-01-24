const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./services/testResultsService');
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/dbtest', db.getDbTest);
app.get('/csv-file', db.getCsvFile);
//app.get('/test-results', db.getTestResultsData);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
