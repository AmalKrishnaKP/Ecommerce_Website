import jwt from 'jsonwebtoken'

export const TokenGeneration=(userId,res)=>{
    const token= jwt.sign({userId},"passkey",{
        expiresIn:'7d'

    })  
    res.cookie("jwt_token",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    }) 
    return token;
}
