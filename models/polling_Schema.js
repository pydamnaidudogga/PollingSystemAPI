const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
        
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Options'
    }
  ]
});
    
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;