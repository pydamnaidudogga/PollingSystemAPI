const express = require('express');

const router = express.Router();

const deleteOption = require('../controllers/deleteOption');
const addingVotes = require('../controllers/addingVote');


// the below router is used to adding the vote to the option
router.get('/:id/add_vote',addingVotes.addVoting);
// the below router is used to delete the question (An option can’t be deleted if it has even one vote given to it)
router.delete('/:id/delete',deleteOption.delete);


module.exports = router;
