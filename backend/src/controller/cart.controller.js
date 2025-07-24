import mongoose from "mongoose"
import { Cart } from "../model/cart.model.js"
import { Item } from "../model/item.model.js"

 
export const addCart=async(req,res)=>{
    try {
        const {itemId}=req.body
        const userid=req.user._id
        const present=await Cart.findOne({
            userid,
            "items.itemId":itemId
        
        })
        console.log(present);
        
        if (present)
        {
            return res.status(400).json({message:"product already in cart"})
        }    
        const cart=await Cart.findOneAndUpdate({userid},
            {
                $setOnInsert:{
                    userid
                },
                $push:{
                    items:{itemId,count:1}
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
        console.log(itemId,count);
        
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
        res.status(200).json({message:"removed successfully",item})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message);
        
    }
}
export const procedcart=async(req,res)=>{
    try {
        const avail=[]
        const notAvail=[]
        const userid=req.user._id
        const cartItems=await Cart.findOne({userid})
        if(!cartItems){
            return res.status(400).json({message:"no cart availabe"})
        }
        await Promise.all( cartItems.items.map(async (item) => {
            const product = await Item.findOne({ _id: item.itemId })
            // console.log(product);
            if (product.count >= item.count) {

                const addAvail = {
                    name: product.name,
                    count: item.count,
                    picUrl: product.picUrl,
                    price: item.count * product.price,
                }
                console.log(addAvail)

                avail.push(addAvail)

            }
            else {
                const addNotAvail = {
                    name: product.name,
                    count_rem: product.count,
                    picUrl: product.picUrl
                }
                console.log(addNotAvail)

                notAvail.push(addNotAvail)

            }
        }))
        console.log(avail);
        console.log(notAvail);
        
        res.status(200).json({avail,notAvail})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message);
        
    }
}
export const showCart=async(req,res)=>{
    try {
        const userid=req.user._id
        const cart= await Cart.findOne({userid})
        if(!cart)
        {
            return res.status(400).json({message:"no item in cart yet"})
        }
        else{
            const items=await 
            Promise.all(cart.items.map(async(item)=>{
                if(item!=null)
                {
                return(
                    
                 { ... await Item.findOne({_id:item.itemId}).lean(),
                    count:item.count
                } //to remove unnecessory data and to get only object from the model
                )
                    
                }
            }
                
            ))
            console.log(items);
            
            return res.status(200).json(items)
        }
        
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message)       
    }
}