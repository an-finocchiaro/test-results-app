const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const service = require('./services/testResultsService');
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//app.get('/dbtest', service.getDbTest);
app.get('/csv-file', service.getCsvFile);
//app.get('/test-results', db.getTestResultsData);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
