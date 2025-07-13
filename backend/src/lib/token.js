import jwt from 'jsonwebtoken'

export const TokenGeneration=(userId,res)=>{
    const token= jwt.sign({userId},"passkey",{
        expiresIn:'7d'

    })  
    res.cookie("jwt_token",token,{
        maxAge:7*24*60*60*1000,
        httponly:true,
        sameSite:true,
    }) 
    return token;
}
