import express from "express"
import { allUsers, deleteOneUser, login, logout, signup ,auth} from "../controller/admin.controller.js"
import { adminAuthMidWare } from "../middleware/adminAuth.middleware.js"

const admin=express.Router()

admin.get("/allUsers",allUsers)
admin.delete("/deleteUser/:id",adminAuthMidWare,deleteOneUser)
// admin.delete("/deleteUser/:id",deleteUser)
admin.post("/login",login)
admin.get("/logout",logout)
admin.post("/signup",signup)
admin.get("/auth",adminAuthMidWare,auth)

export default admin