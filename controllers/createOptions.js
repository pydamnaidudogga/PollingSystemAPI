const Question = require('../models/polling_Schema');
const Option = require('../models/optionSchema');
const { findByIdAndUpdate } = require('../models/optionSchema');

module.exports.create = async function(req, res){
    try{
        // finding the question by id
        let question = await Question.findById(req.body.id);
    
        // question is existing the create the option to it
        if (question){
            // creating a option to the question
            let option = await Option.create({
                text: req.body.content,
                question: req.body.id,
                votes:0,
                link_to_vote:'http://localhost:8000/options/1/add_vote'
                
            });
            // link to add vote with its id
        let link = `http://localhost:8000/options/${option._id.valueOf()}/add_vote`
        let update = await Option.findByIdAndUpdate(option._id,{link_to_vote: link});
        let newOption = await Option.findById(option._id);
            // console.log(newOption);

        question.options.push(newOption);
        question.save();
            
                  
    
        return res.status(200).send({
            data: {
                question: question
            },
            message: "Post created!"
        });
            

        }
    }catch(err){
        
        return;
    }
    
}