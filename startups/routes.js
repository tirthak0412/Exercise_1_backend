const express=require('express');
const user=require('../routes/user');
var cors=require('cors');

module.exports=function(app){
    app.use(express.json());
    app.use(cors());
    app.use('/api/user',user);
}