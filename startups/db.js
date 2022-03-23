const mongoose=require('mongoose');
const winston=require('winston');

module.exports=function(){
    mongoose.connect('mongodb://localhost/ex1')
    .then(()=>winston.info("connected to mongodb"));
}