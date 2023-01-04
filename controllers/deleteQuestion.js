const Question = require('../models/polling_Schema');
const Option = require('../models/optionSchema');


module.exports.destroy = async function(req, res){

    try{
        // finding the question
        let question = await Question.findById(req.body.id);

        // get all the options
        let option = await Option.find({});
        let temp=true;
        // checking the options for votes. if one of its option having the vote then the question is con't delete
        option.map((data)=>{
                               
            if(data.question==req.body.id){
                if(data.votes>0){
                    temp = false;
                    return res.status(200).json({
                        message: "can't delete the post"
                    });
                }
                    
            }
               
                
        });
                

        
        // rmove the question 
        await question.remove();
        // deleting the options 
        await Option.deleteMany({question: req.body.id});
        // console.log({_id: {$in: result}});

        

            


        if(temp){  
            return res.status(200).json({
           
              message: "Post deleted"
           });
        }
            

        

            
        

    }catch(err){
        console.log(err);
        return ;
    }
    
}