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
    origin: process.env.NODE_ENV==="development" ? "http://localhost:5173" : process.env.CLIENT_ORIGIN || true,
    credentials:true,
}))
app.use(express.json({limit:"50mb"})) 
app.use(express.json())
app.use(cookieParser())

app.use("/api",main)
if (process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname,"../frontend","dist")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
    connectDB()
})