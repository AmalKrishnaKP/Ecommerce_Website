import React from 'react'
import {Search, Settings, ShoppingCart, UserRoundCog} from 'lucide-react'
const Nav = () => {
  return (
    <div className="bg-[#a37537] flex flex-col  items-center max-w-[100vw]">
      <div className="">
        site name
      </div>
      <div className=' w-full flex flex-row items-center justify-between px-4 py-2 w-min-[100vw] '>
        <div className='min-w-[30vw]'>
          <h1 className=''>
            logo
          </h1>
        </div>
        <div className="flex-1 max-w-[34vw]">
          <div className="bg-[#f2f2f2] flex flex-row items-center h-8 outline-1 rounded-2xl px-2">
            <button>
              <Search className='   z-10'/>
            </button>
            <input type="text" name="" id="" className='h-9 border-0 outline-none pl-2 w-[40vw] ' />
            
          </div>
        </div>
        <div className='flex flex-row items-center min-w-[30vw] justify-end-safe'>
            <div className="flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#b39062] hover:cursor-pointer rounded-2xl p-2">
              <ShoppingCart size={35} /> 
              <h1 className='  max-md:hidden'>
                Cart
              </h1>
            </div>
            <div className="flex flex-row pr-3 items-center text-sm font-bold hover:bg-[#b39062] hover:cursor-pointer rounded-2xl p-2">
              <UserRoundCog size={35}/>
              <h1 className="max-md:hidden">
                Profile  
              </h1>
            </div>
            <div className="hover:bg-[#b39062] hover:cursor-pointer ml-3 rounded-2xl">
              <Settings size={35} color="#000000"  />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
