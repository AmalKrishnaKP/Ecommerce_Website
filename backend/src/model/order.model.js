import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller"
    },
    itemId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    },
    count:{
        type:Number,
        require:true
    },
    currentStatus:{
        type:String,
        default:"pending"
    }
})

export const Order= mongoose.model("Order",orderSchema,"Order")