import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import axios from 'axios'
import toast from 'react-hot-toast'
export const authStore=create((set,get)=>({
    
    authUser:null,
    loadingA:false,
    


    checkAuth:async(role)=>{
        try {
            
            if (role=="user"){
                const res=await axiosInstance.get("user/auth")
                set({authUser:res.data})
            }
            else if (role=="seller"){
                const res=await axiosInstance.get("seller/auth")
                set({authUser:res.data})
            }
            set({loadingA:false})
            
        } catch (error) {
            console.log(error.message);
            
        }
    },
    signup:async()=>{
        try {
            set({loadingA:true})
            if (formdata.role=="user"){
                const res=await axiosInstance.post("user/signup",formdata)
                set({authUser:res.data})
                // console.log(get().authUser);
                
            }
            else if (formdata.role=="seller"){
                const res=await axiosInstance.post("seller/signup",formdata)
                set({authUser:res.data})
                console.log(get().authUser);
                
            }
            set({loadingA:false})
        } catch (error) {
            
        }
    },
    login:async(formdata)=>{
        try {
            set({loadingA:true})
            if (formdata.role=="user"){
                const res=await axiosInstance.post("user/login",formdata)
                set({authUser:res.data})
                // console.log(get().authUser);
                
            }
            else if (formdata.role=="seller"){
                const res=await axiosInstance.post("seller/login",formdata)
                set({authUser:res.data})
                console.log(get().authUser);
                
            }
            set({loadingA:false})
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    },
    logout:async(role)=>{
        try {
            // something uncaughted is here in the logout role is not requied for log out why?
            if (role=="user")
            {
                const res= await axiosInstance.get("user/logout")
                set({authUser:null})    
            }
            else if(role=="seller")
             {
                const res= await axiosInstance.get("seller/logout")
                set({authUser:null})    
            }
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    }

}))