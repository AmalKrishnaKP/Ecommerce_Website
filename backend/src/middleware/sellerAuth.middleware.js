import jwt from 'jsonwebtoken'
import { Seller } from '../model/seller.model.js';
// import { decode } from 'punycode';
export const sellerAuthMidWare=async(req,res,next)=>{
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
            // console.log(decod.userId);
            
            const seller=await Seller.findOne({_id:decod.userId})
            if (!seller)
                return res.status(400).json({message:"no seller exist"})
        
        // console.log(seller);
            console.log("hai",seller);
            
            req.user=seller

            console.log("authendicated");
            
            next()
        }
        
    } catch (error) {
        console.log(error);
        
    }
}