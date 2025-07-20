import express from 'express'

import { deleteUser, login, logout, signup, update ,auth} from '../controller/user.controller.js'
import { userAuthMidWare } from '../middleware/userAuth.middileware.js'
import cart from './cart.router.js'
import order from './order.router.js'

const user=express.Router()


user.post("/signup",signup)
user.post("/login",login)
user.get("/logout",logout)
user.put("/update",userAuthMidWare,update)
user.delete("/delete",userAuthMidWare,deleteUser)


user.use("/cart",userAuthMidWare,cart)

user.use("/order",userAuthMidWare,order)
user.get("/auth",auth)
export default user