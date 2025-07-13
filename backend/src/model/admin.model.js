import mongoose from "mongoose";


const adminSchema= new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
})
export const Admin=mongoose.model("Admin",adminSchema,"Admins")