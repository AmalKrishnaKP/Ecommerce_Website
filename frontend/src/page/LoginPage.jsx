import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { authStore } from '../store/authStore.js'
import LoginForm from '../components/loginForm.jsx'

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
    <div className=' items-center justify-center opacity-100 p-2 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sunt, fugit nihil nam reprehenderit vero fugiat, similique modi maiores cumque ut fuga? Delectus voluptate perspiciatis, et corporis doloribus asperiores dignissimos quaerat officia? Eaque qui reprehenderit ab iusto ipsam magni voluptatibus neque deleniti nesciunt, modi aperiam nam id vel quisquam repellendus reiciendis maiores veritatis facere dolores unde deserunt nulla doloribus? Repudiandae, placeat maiores et nesciunt nulla ut reiciendis cum earum ipsa autem vel accusamus distinctio natus doloremque quaerat officia enim quas consectetur quibusdam soluta. Nihil quos nisi iste ea nemo adipisci sint vero impedit error. Optio in iusto ullam alias eaque?
        <LoginForm />
    </div>
  )
}

export default LoginPage