import express from "express"
import { addOrderFromCart, showForUser } from "../controller/order.controller.js"


const order=express.Router()

order.post("/addOrder",addOrderFromCart)
order.get("/showforuser",showForUser)
export default order