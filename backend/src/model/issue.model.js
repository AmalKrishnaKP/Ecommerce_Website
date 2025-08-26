import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    reporterRole:{ type:String, enum:['user','seller'], required:true },
    reporterId:{ type:mongoose.Schema.Types.ObjectId, required:true },
    category:{ type:String, enum:['order','item','website'], default:'website' },
    title:{ type:String, required:true },
    description:{ type:String, required:true },
    orderId:{ type:mongoose.Schema.Types.ObjectId },
    itemId:{ type:mongoose.Schema.Types.ObjectId },
    contactPhone:{ type:String },
    status:{ type:String, default:'open' },
    createdAt:{ type:Date, default:Date.now }
})

export const Issue = mongoose.model('Issue', issueSchema, 'Issue')


