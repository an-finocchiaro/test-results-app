const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: "uploads/"})

const TestsController = require('../app/controllers/tests-controller')

router.post('/uploads', upload.single("file"), TestsController.uploadFile);

module.exports = router;