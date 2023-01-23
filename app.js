const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/tests', db.getTests);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
