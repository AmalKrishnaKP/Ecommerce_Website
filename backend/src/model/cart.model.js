import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    items:{
        type:[{
            itemId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Item"
            },
            count:{
                type:Number,
                default:1,
            }
        }]
    }
})
export const Cart=mongoose.model("Cart",cartSchema,"Cart")
// each time when we go to the cart the cart should fetch cart using useeffect({},[])
// cart controllers through user