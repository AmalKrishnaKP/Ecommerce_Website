import { Item } from "../model/item.model.js";
import cloudinary from "../lib/cloudinary.js";
export const addItem=async(req,res)=>{
    try {
        const {pic,count,discription,price,name}=req.body
        const sellerId=req.user._id
        // console.log(req.);
        
        if (!pic || !count || !discription || !price)
        {
            return res.status(400).json({message:"need all credential"})
        }

        const picUrl=(await  cloudinary.uploader.upload(pic)).secure_url
        console.log(picUrl);
        
        const newI= new Item({
            name,
            count,
            picUrl,
            discription,
            price,
            sellerId,

        })
        await newI.save()
        res.status(200).json({newI})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
}
export const getItems=async(req,res)=>{
    try {
        const {filter}=req.body
        let all
        if (filter=="all"){

             all= await Item.find()
        }
        else
        if(!all){
            return res.status(400).json({message:"no products detected"})
        }
        return res.status(200).json(all)
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
}