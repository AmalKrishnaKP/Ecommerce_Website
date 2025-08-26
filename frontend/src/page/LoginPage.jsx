import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { authStore } from '../store/authStore.js'
import LoginForm from '../components/LoginForm.jsx'

const LoginPage = () => {

  const {login}=authStore()
  const [password,showpass]=useState(false)
  const [formdata,setdata]=useState({
    email:"",
    password:"",
    role:""
  })
  
  const handleSubmit=(e)=>{
    e.preventDefault()  
    if (!formdata.email || !formdata.password || !formdata.role){
        return toast.error("need all credentials")
    }
    console.log("passed");
    
    login(formdata)  
  }
  return (
    <div className=' flex  items-start justify-center w-full  opacity-100 bg-[url(https://res.cloudinary.com/dezj3e0et/image/upload/v1753387277/bgimage_l2bvlf.png)]  px-3  pt-30'>
        
        <LoginForm />
        

    </div>
  )
}

export default LoginPage