import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    }


})
export const User=mongoose.model("User",userSchema,"Users")