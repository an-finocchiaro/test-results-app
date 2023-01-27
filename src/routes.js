const routes = require('express').Router();
const TestController = require('./app/controllers/TestController');

routes.get("/test_results", TestController.test_results);

module.exports = routes;