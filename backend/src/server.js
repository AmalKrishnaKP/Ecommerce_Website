import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.js';
import main from './router/main.router.js';

dotenv.config()
const app=express()

app.use(express.json({limit:"50mb"})) 
app.use(express.json())
app.use(cookieParser())

app.use("/api",main)


app.listen(5000,()=>{
    console.log("server listening");
    
    connectDB()
    
})