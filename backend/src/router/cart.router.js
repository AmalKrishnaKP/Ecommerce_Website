import express from "express"
import { addCart, deleteCart, procedcart, showCart, updateCart } from "../controller/cart.controller.js"

const cart = express.Router()
cart.get("/showCart",showCart)
cart.put("/addCart",addCart)
cart.patch("/updatecart",updateCart)
cart.patch("/deletecart",deleteCart)
cart.get('/proceedCart',procedcart)

export default cart