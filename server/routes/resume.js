const express = require('express');
const { generateResume } = require('../controllers/resumeController');

const router = express.Router();

router.post('/generateResume', generateResume);

module.exports = router;