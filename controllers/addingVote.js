const Option = require('../models/optionSchema');


module.exports.addVoting = async function(req,res){
    
    // the below split function spliting the url for getting the id of the option
    let id = req.url.split('/');
    // finding the option 
    let preVote = await Option.findById(id[1]);
    // to get the previous votes
    const pre = preVote.votes;
    // adding one vote to it
    let result = pre+1;
    // update the votes in the database
    let option = await Option.findByIdAndUpdate(id[1],{votes:result});
    option.save();
    preVote.votes = result;


    return res.status(200).json({
        message:'vote added',
        option:preVote
    })





}