import jwt from 'jsonwebtoken'
import { User } from '../model/user.model.js';
export const userAuthMidWare=async(req,res,next)=>{
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
            const user=await User.findOne({_id:decod.userId})
            if (!user)
                return res.status(400).json({message:"no user exist"})
            console.log(user);
            req.user=user
            console.log("hai");
            
            console.log("authendicated");
            
            next()
        }
        
    } catch (error) {
        console.log(error);
        
    }
}