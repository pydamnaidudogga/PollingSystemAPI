const express = require('express');

const router = express.Router();
const createQestion = require('../controllers/createQuestion');
const createOptions = require('../controllers/createOptions');
const viewQuestion = require('../controllers/viewQuestion');
const deleteQestion = require('../controllers/deleteQuestion');



// the below router is used to create the question
router.post('/create',createQestion.create);
// the below router is used to view the question with gieven id
router.post('/:id',viewQuestion.display);
// the below router is used to create the options 
router.post('/:id/options/create',createOptions.create);
// the below router is used to delete the question (A question can’t be deleted if one of it’s options has votes)
router.delete('/:id/delete',deleteQestion.destroy);


module.exports = router;
