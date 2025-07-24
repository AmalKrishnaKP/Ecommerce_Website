import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'
import axios from 'axios'

export const productStore=create((set,get)=>({
    products:[],
    cart:[],
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
            console.log(res); 
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
            
        }
    },
    deleteItemCart:async(itemId)=>{
        try {
            console.log(itemId);
            
            const res=await axiosInstance.patch("http://localhost:5000/api/user/cart/deletecart",{itemId})
            // console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.message)
            console.log(error);
            
        }
    }
}))