
const express = require('express');
// this api runs on port no 8000
const port = 8000;
const app = express();
// this is the monogodb
const db=require('./config/mongoose');
// the below middleware is create body object with  the given data
app.use(express.urlencoded({extended:true}));
// the below middleware is used to routing
app.use('/',require('./routers'));









app.listen(port,(err) =>{
    if(err){
    console.log(err);
    }
    console.log(`success in connected to the server on port :${port}`);
})