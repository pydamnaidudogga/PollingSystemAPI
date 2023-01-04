const express = require('express');

const router = express.Router();



router.use('/questions',require('./questionsRoutes'));
// router.get('/questions/:id',displayQuestion.displey);
router.use('/options',require('./optionsRoutes'));

module.exports = router;