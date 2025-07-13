import jwt from 'jsonwebtoken'
import { Admin } from '../model/admin.model.js'; 
import { decode } from 'punycode';
export const adminAuthMidWare=async(req,res,next)=>{
    try {
        // console.log(req.cookies);
        
        const token=req.cookies.jwt_token
        // console.log(token);
        if (!token)
            return res.status(400).json({message:"no token"})
        const decod=jwt.verify(token,"passkey")
        if (!decod)
            return res.status(400).json({message:"no decoded token"})
        else{
            console.log(decod.userId);
            
            const admin=await Admin.findOne({_id:decod.userId})
            if (!admin)
                return res.status(400).json({message:"no admin exist"}
            )
            req.user=admin
            console.log("authendicated");
            
            next()
        }
        
    } catch (error) {
        console.log(error);
        
    }
}