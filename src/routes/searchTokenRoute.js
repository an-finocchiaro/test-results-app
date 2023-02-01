const express = require('express');
const router = express.Router();

const TestsController = require('../app/controllers/tests-controller')

router.get('/:token', TestsController.searchToken);

module.exports = router;