import { Item } from "../model/item.model.js";
import cloudinary from "../lib/cloudinary.js";
export const addItem=async(req,res)=>{
    try {
        const {pic,count,discription,price,name}=req.body
        const sellerId=req.seller._id
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