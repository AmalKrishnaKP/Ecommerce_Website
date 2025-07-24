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
    <div className=' flex  items-start justify-center opacity-100  px-3  pt-20  '>
        <div className='max-md:hidden max-w-[720px]'>
        <img src="src/assets/bgimage.png" alt=""   />

        </div>
        <LoginForm />
        

    </div>
  )
}

export default LoginPage