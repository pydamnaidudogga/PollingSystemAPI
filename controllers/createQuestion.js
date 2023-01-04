const Post = require('../models/polling_Schema');
module.exports.create = async function(req, res){
    try{
        // creating a question
        let post = await Post.create({
            title: req.body.content,
            
        });
        return res.status(200).json({
            data: {
             post
            },
            message: "Post created!"
        });
        

        
    }catch(err){
       
        // added this to view the error on console as well
        console.log(err);
        return ;
    }
  
}