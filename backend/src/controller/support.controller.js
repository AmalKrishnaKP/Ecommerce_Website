import { Issue } from "../model/issue.model.js"

export const addIssue = async(req,res)=>{
    try{
        const role = req.user ? 'user' : (req.seller ? 'seller' : null)
        const reporterId = req.user? req.user._id : (req.seller? req.seller._id : null)
        const {title,description,orderId,itemId,contactPhone,category}=req.body
        if(!title || !description){
            return res.status(400).json({message:"title and description required"})
        }
        const issue = new Issue({
            reporterRole: role,
            reporterId,
            category: category || 'website',
            title,
            description,
            orderId,
            itemId,
            contactPhone,
        })
        await issue.save()
        return res.status(200).json({message:"issue submitted"})
    }catch(error){
        res.status(500).json({message:"server side error"})
    }
}

