import { Cart } from "../model/cart.model.js"
import { Item } from "../model/item.model.js"
import { Order } from "../model/order.model.js"

export const addOrderFromCart=async(req,res)=>{
    try {
        const remaining=[]
        const userid=req.user._id

        const cart=await Cart.findOne({userid})
        if(!cart){
            return res.status(400).json({message:"no cart",order:false})
        }
        cart.items.map(async(item)=>{
            const product= await Item.findOne({_id:item.itemId})
            if(item.count<=product.count)
            {
                const sellerId=product.sellerId
                const newO= new Order({
                    userid,
                    sellerId,
                    itemId:item.itemId,  
                    count:item.count
                })
                await newO.save()
                await Cart.updateOne({userid},
                    {
                        $pull:{
                            items:{itemId:item.itemId}
                        }
                    }
                )
                await Item.findOneAndUpdate({_id:item.itemId},
                    {
                        count:product.count-item.count
                    }
                )
            }
            
        })
        res.status(200).json({message:"ordered"})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
}
export const showForUser=async(req,res)=>{
    try {
        const userid=req.user._id
        const orders= await Order.find({userid})
        if(!orders){
            return res.status(400).json({message:"no orders"})
        }
        res.status(200).json(orders)
    } catch (error) {
         res.status(500).json({message:"server side error"})
         console.log(error.message);
         
    }
}
export const showForSeller=async(req,res)=>{
    try {
        const sellerId=req.seller._id
        const orders= await Order.find({sellerId})
        if(!orders){
            return res.status(400).json({message:"no orders"})
        }
        console.log(orders,"hi");
        
        res.status(200).json(orders)
    } catch (error) {
         res.status(500).json({message:"server side error"})
         console.log(error.message);
         
    }
}