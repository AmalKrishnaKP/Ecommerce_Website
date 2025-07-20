import { TokenGeneration } from "../lib/token.js"
import bcrypt from "bcryptjs"
import  {Seller}  from "../model/seller.model.js"
export const signup=async(req,res)=>{
    // console.log(req.body);
    
    const {fullName,password,email,phone}=req.body
    try {
        if (!fullName || !password || !email || !phone){
            return res.status(400).json({message:"need all crediential"})
        }
        const seller=await Seller.findOne({fullName})
        if (seller)
           return res.status(400).json({message:"seller already exist"})

        const salt=await bcrypt.genSalt(10)
        const hashed_pass=await bcrypt.hash(password,salt)

        const newS= new Seller({
            fullName,
            password:hashed_pass,
            email,
            phone,
        })  
        await newS.save()
        TokenGeneration(newS._id,res)
        if (newS)
            res.status(200).json({newS})
    } catch (error) {
        res.status(500).json({message:error})
        console.log(error);
        
    }
    
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body

        if (!email ||!password)
            return res.status(400).json({message:"need all credential"})

        const seller=await Seller.findOne({email}).select("-password")
        console.log(seller);
        
        if (!seller)
            return res.status(400).json({message:"invalied email"})
        // console.log(seller);
        
        const pass=await bcrypt.compare(password,seller.password)
        
        if (!pass)
        {
            return res.status(400).json({message:"password incorrect;"})
            
        }
        TokenGeneration(seller._id,res)
        console.log(res.cookie);
        return res.status(200).json({seller})   

    } catch (error) {
        res.status(500).json({messge:"server side error"})
        console.log(error.message);
        
        
    }
}
export const update=async(req,res)=>{
    try {
        const update=await Seller.findOneAndUpdate({_id:req.user._id},{
            address:req.body.address
        },{new:true})
        res.status(200).json({update})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
    
}
export const deleteSeller=async(req,res)=>{
    try {
        const seller=req.user
        await Seller.findOneAndDelete({_id:seller._id})
        res.cookie("jwt_token","",{maxAge:0})
        res.status(200).json({message:"deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
        
    }
}
export const logout=async(req,res)=>{
    try {
        res.cookie("jwt_token","",{maxAge:0})
        res.status(200).json({message:"logout successfully"})
    } catch (error) {
        res.status(500).json({message:"server side error"})
    }
}
export const auth=async(req,res)=>{
    try {
        res.status(200).json(res.user)
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error.message);
        
    }
}