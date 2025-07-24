import React, { useEffect } from 'react'
import {Search, LogOut, ShoppingCart, UserRoundCog} from 'lucide-react'
import { Link } from 'react-router-dom'
import { authStore } from '../store/authStore.js'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  
  const {authUser,logout}=authStore()
  const location=useLocation()
  console.log(authUser);
  
  
  

  return (
    <div className="bg-[#ffffff] flex flex-row items-center w-[100vw] px-2 py-3 fixed z-20">
      
      <div className=' w-full flex flex-row items-center justify-between px-4 py-2  w-min-[100vw] '>
        <div className='font-[Poppins] font-bold text-3xl  max-sm:text-[20px] min-w-[30vw] max-sm:min-w-0'>
          Pixelcrate
        </div>
        <div className="flex-1 max-w-[30vw]  max-sm:max-w-[50vw]">
          <div className="bg-[#ffffff] flex flex-row justify-between items-center h-8  px-2 text-[20px]  font-medium">
            { authUser && authUser.role=="user" &&(
              <div className={`
                flex flex-row  items-center text-md font-bold  hover:bg-[#f0ede7] hover:cursor-pointer rounded px-1 
                ${location.pathname=="/shop" && 'border-b-2'}
              `}>
              <Link to={"/shop"}>
              <h1 className='max-sm:text-[15px]'>shop</h1>
            </Link>
            </div>
            )}
            { authUser && authUser.role=="seller" &&(
              <div className={`
                flex flex-row  items-center text-md font-bold  hover:bg-[#f0ede7] hover:cursor-pointer rounded px-1 
                ${location.pathname=="/sell" && 'border-b-2'}
              `}>
              <Link to={"/sell"}>
              <h1 className='max-sm:text-[15px]'>Sell</h1>
            </Link>
            </div>
            )}
            
            { authUser &&(
              <div className={`
                flex flex-row  items-center text-md font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded px-1 
                ${location.pathname=="/" && 'border-b-2'}
              `}>
                <Link to={"/"}>
                  <h1 className='max-sm:text-[15px]'>about</h1>
                </Link>
              </div>
            )}
            {
              authUser &&(
                <div className={`
                flex flex-row  items-center text-md font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded px-1 
                ${location.pathname=="/support" && 'border-b-2'}
              `}>
                  <Link to={"/support"}>
                    <h1 className='max-sm:text-[15px]'>support</h1>
                  </Link>
                </div>
              )}

          </div>
        </div>
        <div className='flex flex-row items-center min-w-[30vw] justify-end-safe px-4 '>
          
          { authUser && authUser.role=="user" &&
            <Link to={"/cart"}>
              <div className={`
                flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded px-2
                ${location.pathname=="/cart" && 'border-b-2'}
              `}>
                <ShoppingCart size={30} className='max-sm:w-[20px]'/> 
                <h1 className='  max-md:hidden'>
                  Cart
                </h1>
              </div>
            </Link>
          }
          
          { authUser &&
            <Link to={"/profile"}>
              <div className={`
                flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded px-2
                ${location.pathname=="/profile" && 'border-b-2'}
              `}>
                <UserRoundCog size={30} className='max-sm:w-[20px]'/>
                <h1 className="max-md:hidden">
                  Profile  
                </h1>
              </div>
            </Link>
          }
          {
              authUser &&
              <Link to={"/settings"}>
                <div className={`
                flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded px-2
                ${location.pathname=="/settings" && 'border-b-2'}
              `}>
                  <button
                    onClick={()=>{logout("user")}}
                  >
                    <LogOut size={30} color="#000000" className='max-sm:w-[20px]'/>
                  </button>

                </div>
              </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Nav
