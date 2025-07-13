import { User } from "../model/user.model.js";

import { TokenGeneration } from "../lib/token.js"
import bcrypt from "bcryptjs"
import { Admin } from "../model/admin.model.js";

export const signup=async(req,res)=>{
    
    
    const {fullName,password,email}=req.body
    try {
        if (!fullName || !password || !email){
            return res.status(400).json({message:"need all crediential"})
        }
        const admin=await Admin.findOne({fullName})
        if (admin)
           return res.status(400).json({message:"user already exist"})

        const salt=await bcrypt.genSalt(10)
        const hashed_pass=await bcrypt.hash(password,salt)

        const newA= new Admin({
            fullName,
            password:hashed_pass,
            email
        })  
        await newA.save()
        TokenGeneration(newA._id,res)
        if (newA)
            res.status(200).json({newA})
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
        console.log(email);
        
        const admin=await Admin.findOne({email})
        console.log(admin);
        
        if (!admin)
            return res.status(400).json({message:"invalied email"})
        // console.log(user);
        
        const pass=await bcrypt.compare(password,admin.password)
        
        if (!pass)
        {
            return res.status(400).json({message:"password incorrect;"})
            
        }
        TokenGeneration(admin._id,res)
        console.log(res.cookie);
        return res.status(200).json({login:true})   

    } catch (error) {
        res.status(500).json({messge:"server side error"})
        console.log(error.message);
        
        
    }
}
// export const update=async(req,res)=>{
//     try {
//         const update=await Admin.findOneAndUpdate({_id:req.user._id},{
//             address:req.body.address
//         },{new:true})
//         res.status(200).json({update})
//     } catch (error) {
//         res.status(500).json({message:"server side error"})
//         console.log(error);
        
//     }
    
// }
export const deleteMe=async(req,res)=>{
    try {
        const user=req.user
        await Admin.findOneAndDelete({_id:user._id})
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
export const allUsers=async(req,res)=>{
    try {
        const all=await User.find()
        res.status(200).json({all})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);        
    }
}
export const deleteOneUser=async(req,res)=>{
    try {
        const {id}=req.params
        const user=User.findOne({_id:id})
        if(!user){
            return res.status(400).json({message:"no user exist"})
        }
        await User.findOneAndDelete({_id:id})
        return res.status(200).json({message:"user deleted"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"server side error"})
           
    }
}