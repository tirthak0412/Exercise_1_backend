const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        minlength:3,
        maxlength:255,
        required:true
    },
    lastname:{
        type:String,
        minlength:3,
        maxlength:255,
        required:true
    }
})

let User=mongoose.model('User',userSchema);

exports.User=User;