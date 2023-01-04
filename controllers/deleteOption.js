const Option = require('../models/optionSchema');


module.exports.delete = async function(req,res){
    // finding the option 
    const option = await Option.findById(req.body.id);
    // check if one of its having vote. If it having a vote then the option is can't delete
    if(option.votes>0){
        return res.status(200).json({
            message:'option  cannnot delete the option '
        });
    }
    //  delete the option
    await Option.findByIdAndDelete(req.body.id);

    return res.status(200).json({
        message:'Option deleted'
    })





}