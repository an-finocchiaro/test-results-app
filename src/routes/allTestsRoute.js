const express = require('express');
const router = express.Router();

const TestsController = require('../app/controllers/test-controller')

router.get('/', TestsController.getAllTests);

module.exports = router;