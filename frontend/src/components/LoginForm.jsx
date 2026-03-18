import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { authStore } from '../store/authStore.js'

const LoginForm = () => {
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
    

    <div className="w-full max-w-[460px] flex flex-col items-center justify-center border bg-[#f9f9f9] rounded-2xl shadow-2xl pb-4 px-3 sm:px-5">
            <div className="logo">
                <img src="https://res.cloudinary.com/dezj3e0et/image/upload/v1753386825/logo_tubdxy.png" alt="img" className='w-[150px]' />
            </div>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className='grid grid-cols-3 gap-2'>
                    <button type='button' className={`p-2 border-black border-2 rounded-xl w-full text-sm ${formdata.role=="user"?'bg-black text-white':''}`}
                        onClick={()=>{setdata({... formdata,role:"user"})}}   
                    >Buyer</button> 
                    <button type='button' className={`p-2 border-black border-2 rounded-xl w-full text-sm ${formdata.role=="seller"?'bg-black text-white':''}`}
                        onClick={()=>{setdata({... formdata,role:"seller"})}}
                    >Seller</button>
                    <button type='button' className={`p-2 border-black border-2 rounded-xl w-full text-sm ${formdata.role=="Admin"?'bg-black text-white':''}`}
                        onClick={()=>{setdata({... formdata,role:"Admin"})}}
                    >Admin</button> 
                </div>
                
                <div className="form-control pb-4">
                    <label htmlFor="name" className=' mb-2'>
                        <span className='font-medium text-md pl-2'>Email:</span>
                    </label>
                    <div className="relative flex items-center  ">
                        <div className="absolute left-0 pl-1">
                            <Mail className='cursor-none'/>
                        </div>
                        <div className="w-full border-black border-2 rounded-xl">
                            <input type="text" name="mail" id="mail" placeholder='Amal Krishna' className='pl-7 py-2 outline-none w-full'
                                onChange={(e)=>{setdata({... formdata,email:e.target.value})}}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="form-control pb-4">
                    <label htmlFor="name" className=' mb-2'>
                        <span className='font-medium text-md pl-2'>Password:</span>
                    </label>
                    <div className="relative flex items-center  ">
                        <div className="absolute left-0 pl-1">
                            <Lock className='cursor-none'/>
                        </div>
                        <div className="w-full border-black border-2 rounded-xl">
                            <input type={password?"text":"password"} name="password" id="password" placeholder='Amal Krishna' className='pl-7 py-2 pr-7 outline-none w-full'  
                                onChange={(e)=>{setdata({... formdata,password:e.target.value})}}
                            />
                        </div>
                        <button  
                            type='button'
                            className="absolute right-0 pr-2 cursor-pointer"
                            onClick={()=>showpass(!password)}
                        >
                        {
                            password? <Eye />: <EyeOff />
                        }
                        </button>
                    </div>
                </div>
                <div className="flex flex-col  justify-center">
                    <button type="submit" className='p-2 bg-black text-white rounded-2xl w-full sm:w-[220px]'>Login</button>
                    <h2 className='text-sm sm:text-base'>

                    Don't have an account? 
                    <Link to={"/signup"}> 
                    <span className='text-blue-800'>Signup</span>
                    </Link>
                    </h2>
                </div>
            </form>
        </div>
    
    
  )
}

export default LoginForm