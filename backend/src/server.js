import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.js';
import main from './router/main.router.js';
import cors from 'cors'
import path, { join } from 'path'
const __dirname=path.resolve()
dotenv.config()
const app=express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json({limit:"50mb"})) 
app.use(express.json())
app.use(cookieParser())

app.use("/api",main)
if (process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}

app.listen(5000,()=>{
    console.log("server listening");
    
    connectDB()
    // console.log("Hai".toLowerCase());
    
       
})