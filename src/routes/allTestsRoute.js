const express = require('express');
const router = express.Router();

const TestsController = require('../app/controllers/tests-controller')

router.get('/', TestsController.getAllTests);

module.exports = router;