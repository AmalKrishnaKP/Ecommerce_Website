import { TokenGeneration } from "../lib/token.js"
import bcrypt from "bcryptjs"
import { User} from "../model/user.model.js"
import { log } from "node:console"

export const signup=async(req,res)=>{
    // console.log(req.body);
    
    const {fullName,password,email,phone}=req.body
    try {
        if (!fullName || !password || !email || !phone){
            return res.status(400).json({message:"need all crediential"})
        }
        const user=await User.findOne({fullName})
        if (user)
           return res.status(400).json({message:"user already exist"})

        const salt=await bcrypt.genSalt(10)
        const hashed_pass=await bcrypt.hash(password,salt)

        const newU= new User({
            fullName,
            password:hashed_pass,
            email,
            phone,
        })  
        await newU.save()
        TokenGeneration(newU._id,res)
        return res.status(200).json({
            _id:newU._id,
            fullName:newU.fullName,
            phone:newU.phone,
            email:newU.email,
            role:"seller"
        }) 

    } catch (error) {
        res.status(500).json({message:error})
        console.log(error);
        
    }
    
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log(password);
        
        if (!email ||!password)
            return res.status(400).json({message:"need all credential"})

        const user=await User.findOne({email})
        console.log(user);
        
        if (!user)
            return res.status(400).json({message:"invalied email"})
        // console.log(user);
        
        const pass=await bcrypt.compare(password,user.password)
        
        if (!pass)
        {
            return res.status(400).json({message:"password incorrect;"})
            
        }
        TokenGeneration(user._id,res)
        console.log(res.cookie);
        return res.status(200).json({
            _id:user._id,
            phone:user.phone,
            email:user.email,
            role:"user"
        })   

    } catch (error) {
        res.status(500).json({messge:"server side error"})
        console.log(error);
        
        
    }
}
export const update=async(req,res)=>{
    try {
        const update=await User.findOneAndUpdate({_id:req.user._id},{
            address:req.body.address
        },{new:true})
        res.status(200).json({update})
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
    
}
export const deleteUser=async(req,res)=>{
    try {
        const user=req.user
        await User.findOneAndDelete({_id:user._id})
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
        const user=req.user
        console.log(req.user);
        
        return res.status(200).json({
            _id:user._id,
            phone:user.phone,
            email:user.email,
            role:"user"
        })
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error);
        
    }
}