const Question = require('../models/polling_Schema');
const Option = require('../models/optionSchema');


module.exports.display = async function(req, res){

    try{
        // finding the question
        let question = await Question.findById(req.body.id);
        // finding the option
        let option = await Option.find({});
    
        
        let result=[];
        let temp = question.options.map((data)=>{
            
            
            option.map((dataa)=>{
                if(data.valueOf()==dataa._id.valueOf()){
                    result.push(dataa);
                }
            })
                

        })
            
        question.options=result; 
            
            
        return res.status(200).send({
            
          question

                
        });
            

        
    }catch(err){
        
        return;
    }
    
}