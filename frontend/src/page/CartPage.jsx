import React, { useEffect, useState } from 'react'
import { productStore } from '../store/productStore.js'
import CartItem from '../components/CartItem.jsx'
import Proceed from '../components/Proceed.jsx'
import { Link } from 'react-router-dom'

const CartPage = () => {

  const [proceed,setProceed]=useState(false)

  const {getCart,cart}=productStore()

  useEffect(()=>{
    getCart()
  },[proceed])
  
  const carts=cart.map((item)=>(
      (
        <CartItem 
          item={item} 
        />

      )
  ))
  return (
    <div className='flex flex-col h-full p-2 sm:p-4 pt-4 sm:pt-8'>
      {
        cart.length!=0 ?(
          <div className="w-full bg-[#ffffff] shadow-2xl rounded-2xl p-3">
            <div className='w-full flex flex-col sm:flex-row gap-3 justify-between sm:items-center'> 
                <h1 className="text-[Poppins] font-medium text-sm sm:text-md">if you are ready</h1>
                <button className='border bg-black text-white p-2 rounded-xl'
                  onClick={()=>{setProceed(!proceed)}}
                >
                  Proceed Cart
                </button>
            </div>
          </div>
        ):(
          <div className="w-full bg-[#ffffff] shadow-2xl rounded-2xl p-3">
            <div className='w-full flex flex-col sm:flex-row gap-3 justify-between sm:items-center'> 
                No cart Item Yet 
                <Link to={"/shop"}>
                  <button  className='border bg-black text-white p-2 rounded-xl'>
                    Shop
                  </button>
                </Link>
            </div>
          </div>
        )
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 p-2 sm:p-6 lg:p-10">
        {carts}
      </div>
     { proceed &&(
        <Proceed 
        cancel={()=>setProceed(!proceed)}
        />
      )}
    </div>
  )
}

export default CartPage