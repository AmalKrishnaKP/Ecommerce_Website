import express from "express"
import user from "./user.router.js"
import admin from "./admin.router.js"
import seller from "./seller.router.js"
import support from "./support.router.js"
// import itemR from "./item.router.js"
// import { defaultMaxListeners } from "events"

const main=express.Router()

main.use("/user",user)
main.use("/admin",admin)
main.use("/seller",seller)
main.use("/support",support)
// main.use("/item",itemR)
export default main