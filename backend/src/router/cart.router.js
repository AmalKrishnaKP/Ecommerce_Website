import express from "express"
import { addCart, deleteCart, updateCart } from "../controller/cart.controller.js"

const cart = express.Router()

cart.put("/addCart",addCart)
cart.patch("/updatecart",updateCart)
cart.delete("/deletecart",deleteCart)

export default cart