import express from "express"
import { sellerAuthMidWare } from "../middleware/sellerAuth.middleware.js"
import { addItem, getItems} from "../controller/item.controller.js"



const itemR=express.Router()

// itemR.post("/addnewItem",sellerAuthMidWare,)
itemR.post("/additem",addItem)
itemR.post("/getItems",getItems)

export default itemR