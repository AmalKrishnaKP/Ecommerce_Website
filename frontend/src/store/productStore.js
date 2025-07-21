import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'

export const productStore=create((set,get)=>({
    products:[],
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
    }
}))