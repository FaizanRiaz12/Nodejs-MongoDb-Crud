const mongoose= require("mongoose");



const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true

    }
})

const usermodel = mongoose.model("User" , Schema);
module.exports=usermodel;