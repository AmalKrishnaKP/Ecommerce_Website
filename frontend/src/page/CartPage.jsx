import React, { useEffect } from 'react'
import { productStore } from '../store/productStore.js'
import CartItem from '../components/CartItem.jsx'

const CartPage = () => {
  const {getCart,cart}=productStore()
  useEffect(()=>{
    getCart()
  },[])
  // console.log(cart);
  
  const carts=cart.map((item)=>(
      (
        <CartItem 
          item={item} 
        />

      )
  ))
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className="grid grid-cols-3 gap-3 pt-25 p-10 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {carts}
      </div>
      <div className="w-full bg-[#fafafa]">
        hai
      </div>
    </div>
  )
}

export default CartPage