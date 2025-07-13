import mongoose from "mongoose";

const sellerSchema= new mongoose.Schema({
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
        required:true
    },
    address:{
        type:String,
    },
    



})
export const Seller=mongoose.model("Seller",sellerSchema,"Seller")