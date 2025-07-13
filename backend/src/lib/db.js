import mongoose from 'mongoose'

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://amalkrishnatuttu2004:anhsirklama@amal.ruludza.mongodb.net/ECOM")
        console.log("connectd in "+ conn.connection.host);
        
    } catch (error) {
        console.log(error); 
        
    }
}