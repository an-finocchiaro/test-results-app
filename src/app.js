require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');

class AppController {
  constructor() {
    this.express = express();
    this.routes();
    this.views();
  }
  routes() {
    this.express.use(require('./routes'));
  }
  views() {
    this.express.engine('handlebars', engine());
    this.express.set('view engine', 'handlebars');
    this.express.set('views', './app/views')
  }
}

app.use(bodyParser.json());
module.exports = new AppController().express


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
