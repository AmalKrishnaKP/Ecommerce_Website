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
    

    <div className=" flex flex-col items-center justify-center border min-w-[400px] bg-[#f9f9f9] rounded-2xl shadow-2xl pb-3  float-right  mb-100">
            <div className="logo">
                <img src="src/assets/logo.png" alt="" className='w-[150px]' />
            </div>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-row justify-evenly'>
                    <button type='button' className={`p-2 border-black border-2 rounded-xl min-w-[90px] ${formdata.role=="user"?'bg-black text-white':''}`}
                        onClick={()=>{setdata({... formdata,role:"user"})}}   
                    >Buyer</button> 
                    <button type='button' className={`p-2 border-black border-2 rounded-xl min-w-[90px] ${formdata.role=="seller"?'bg-black text-white':''}`}
                        onClick={()=>{setdata({... formdata,role:"seller"})}}
                    >Seller</button>
                    <button type='button' className={`p-2 border-black border-2 rounded-xl min-w-[90px] ${formdata.role=="Admin"?'bg-black text-white':''}`}
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
                        <div className="  border-black border-2 rounded-xl">
                            <input type="text" name="mail" id="mail" placeholder='Amal Krishna' className='pl-7 py-2 outline-none min-w-[300px]'
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
                        <div className="  border-black border-2 rounded-xl">
                            <input type={password?"text":"password"} name="password" id="password" placeholder='Amal Krishna' className='pl-7 py-2 pr-7 outline-none min-w-[300px]'  
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
                    <button type="submit" className='p-2 bg-black text-white rounded-2xl min-w-[200px]'>Login</button>
                    <h2>

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