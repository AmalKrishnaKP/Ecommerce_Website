import mongoose, { mongo } from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    count:{
        type:Number,
        require:true,
        default:1,
    },
    picUrl:{
        type:String,
        require:true,
    },
    discription:{
        type:String,
        require:true,
    },
    elec_type:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller",
    },

})
export const Item =mongoose.model("Item",itemSchema,"Item")