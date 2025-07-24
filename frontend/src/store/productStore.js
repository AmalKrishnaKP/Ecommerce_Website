import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'
import axios from 'axios'

export const productStore=create((set,get)=>({
    products:[],
    cart:[],
    avail:[],
    notAvail:[],
    total:0,
    loading:false,
    getProducts:async(filter)=>{
        try {
            const fil={
                filter:filter,
            }
            const res=await axiosInstance.post("user/item/getItems",fil)
            if(res)
                set({products:res.data})

        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    getCart:async()=>{
        try {
            const res=await axiosInstance.get("http://localhost:5000/api/user/cart/showCart")
            // console.log(res.data)
            
            set({cart:res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    addCart:async(itemId)=>{
        try {
            const res= await axiosInstance.put("http://localhost:5000/api/user/cart/addCart",{itemId})
            if (res)
                toast.success(res.data.message)
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
            
        }
        
    },
    updateCart:async(itemId,count)=>{
        try {
            
            const res=await axiosInstance.patch("http://localhost:5000/api/user/cart/updateCart",{itemId,count})
            // console.log(res); 
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
            
        }
    },
    deleteItemCart:async(itemId)=>{
        try {
            // console.log(itemId);
            
            const res=await axiosInstance.patch("http://localhost:5000/api/user/cart/deletecart",{itemId})
            // console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.message)
            console.log(error);
            
        }
    },
    proceedCart:async()=>{
        try {
            const res=await axiosInstance.get("http://localhost:5000/api/user/cart/proceedCart")
            set({avail:res.data.avail})
            set({notAvail:res.data.notAvail})
            set({total:res.data.total})
            
        } catch (error) {
            toast.error(error.response.message)
            console.log(error);
            
        }
    },
    order:async()=>{
        try {
            const res = await axiosInstance.post("http://localhost:5000/api/user/order/addOrder")
            set({loading:false})
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.message)
            console.log(error);
        }
    },
    additem:async(formdata)=>{
        set({loading:true})
        try {
            const res = await axiosInstance.post("http://localhost:5000/api/seller/item/additem",formdata)
            toast.success(res.data.message)
            console.log(res.data);
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error.response.data.message);
        }
        set({loading:false})
    }
}))