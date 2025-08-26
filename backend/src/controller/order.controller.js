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
        const orders= await Order.find({userid}).populate({path:'itemId',select:'name picUrl'})
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
        const sellerId=req.user._id
        const orders= await Order.find({sellerId}).populate({path:'itemId',select:'name picUrl'})
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

export const markOrderSuccess=async(req,res)=>{
    try {
        const sellerId=req.user._id
        const {orderId,deliveryPhone}=req.body
        if(!orderId || !deliveryPhone){
            return res.status(400).json({message:"orderId and deliveryPhone required"})
        }
        const order=await Order.findOne({_id:orderId,sellerId})
        if(!order){
            return res.status(404).json({message:"order not found"})
        }
        order.currentStatus="success"
        order.deliveryPhone=deliveryPhone
        await order.save()
        return res.status(200).json({message:"order updated"})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
    }
}