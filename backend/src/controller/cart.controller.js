import { Cart } from "../model/cart.model.js"

export const addCart=async(req,res)=>{
    try {
        const {itemId,count}=req.body
        const userid=req.user._id
        const cart=await Cart.findOneAndUpdate({userid},
            {
                $setOnInsert:{
                    userid
                },
                $push:{
                    items:{itemId,count}
                }
            },
            {
                upsert:true,
                new:true,
            }
        )
        res.status(200).json({message:"added successfully",cart})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message);
        
    }
}
export const updateCart=async(req,res)=>{
    try {
        const {itemId,count}=req.body
        const userid=req.user._id
        const cart= await Cart.findOneAndUpdate({userid,"items.itemId":itemId},{
            $set:{
                "items.$.count":count
            }

        },
        {
            new:true
        }
        
    )
    const newC=await Cart.findOne({userid})
    res.status(200).json({message:"updated successfully",newC})
    } catch (error) {
        res.status(500).json({message:"server side error"})
    }
}
export const deleteCart=async(req,res)=>{
    try {
        const {itemId}=req.body
        const userid=req.user._id
        const item= await Cart.findOneAndUpdate({userid},
            {
               $pull:{
                    items:{itemId}
               } 
            },
            {new:true}
        )
        res.status(200).json({message:"deleted successfully",item})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message);
        
    }
}