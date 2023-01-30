const express = require('express');
const router = express.Router();

const TestsController = require('../app/controllers/tests-controller')

router.get('/', TestsController.upload);

module.exports = router;