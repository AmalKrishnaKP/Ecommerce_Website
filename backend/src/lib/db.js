import mongoose from 'mongoose'

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log("connectd in "+ conn.connection.host);
        
    } catch (error) {
        console.log(error); 
        
    }
}