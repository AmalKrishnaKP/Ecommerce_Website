import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'

export const productStore=create((set,get)=>({
    products:[],
    getProducts:async()=>{
        try {
            const all=await axiosInstance.get("/")
        } catch (error) {
            
        }
    }
}))