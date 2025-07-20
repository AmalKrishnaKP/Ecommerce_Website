
import express from 'express'

import { deleteSeller, login, logout, signup, update,auth } from '../controller/seller.controller.js'
import { sellerAuthMidWare } from '../middleware/sellerAuth.middleware.js'
import itemR from './item.router.js'
import { showForSeller } from '../controller/order.controller.js'


const seller=express.Router()


seller.post("/signup",signup)
seller.post("/login",login)
seller.get("/logout",logout)
seller.put("/update",sellerAuthMidWare,update)
seller.delete("/delete",sellerAuthMidWare,deleteSeller)

seller.use("/item",sellerAuthMidWare,itemR)
seller.get("/showOrders",sellerAuthMidWare,showForSeller)
seller.get("/auth",auth)
export default seller