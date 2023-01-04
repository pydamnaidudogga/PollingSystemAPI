const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/polling_data');

mongoose.set('strictQuery',false);
mongoose.connect("mongodb+srv://pydamnaidu:T3qby2N9N0lOaMyq@cluster0.22bxq8o.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});

 const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error in connectiong to the mongoodb'));
db.once('open',()=>{
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;