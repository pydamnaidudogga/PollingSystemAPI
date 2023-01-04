// import { Schema } from 'mongoose';
const mongoose = require('mongoose');

 const AnswerOptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
},

question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
},
votes:{
    type:Number
},
link_to_vote:{
    type:String
}
});

const Options = mongoose.model('Options', AnswerOptionSchema);
module.exports = Options;
