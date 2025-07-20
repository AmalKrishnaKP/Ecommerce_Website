import React from 'react'
import {Search, Settings, ShoppingCart, UserRoundCog} from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="bg-[#ffffff] flex flex-col  items-center max-w-[100vw]">
      <div className="font-bold text-5xl font-[Poppins] pt-2">
        Pixelcrate
      </div>
      <div className=' w-full flex flex-row items-center justify-between px-4  py-2 w-min-[100vw] '>
        <div className='min-w-[30vw] max-sm:min-w-0'>
          {/* <img src="src/assets/T2.png" alt="img" className='h-[80px]' /> */}
        </div>
        <div className="flex-1 max-w-[30vw]  max-sm:max-w-[50vw]">
          <div className="bg-[#ffffff] flex flex-row justify-between items-center h-8  px-2 text-[20px] font-medium">
              <Link to={"/shop"}>
                <h1>shop</h1>
              </Link>
            <Link to={"/about"}>
              <h1>about</h1>
            </Link>
            <Link to={"/support"}>
              <h1>support</h1>
            </Link>

          </div>
        </div>
        <div className='flex flex-row items-center min-w-[30vw] justify-end-safe px-4 '>
          
          <Link to={"/cart"}>
            <div className="flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded-2xl p-2">
              <ShoppingCart size={35} /> 
              <h1 className='  max-md:hidden'>
                Cart
              </h1>
            </div>
          </Link>
          
          <Link to={"/profile"}>
            <div className="flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#f0ede7] hover:cursor-pointer rounded-2xl p-2">
              <UserRoundCog size={35}/>
              <h1 className="max-md:hidden">
                Profile  
              </h1>
            </div>
          </Link>
          <Link to={"/settings"}>
            <div className="hover:bg-[#f0ede7] hover:cursor-pointer ml-3 rounded-2xl">
              <Settings size={35} color="#000000"  />

            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
