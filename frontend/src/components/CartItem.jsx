import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { productStore } from '../store/productStore.js'
import { ColumnsSettings } from 'lucide-react'

const CartItem = (props) => {

  const {updateCart,deleteItemCart}=productStore()
  const [count,setcount]=useState(props.item.count)
  const [remove,setRemove]=useState(false)

  
  useEffect(()=>{  
      updateCart(props.item._id,count)
  },[count])

  useEffect(()=>{
    if (remove){

      deleteItemCart(props.item._id)
    }
  },[remove])
  


  return (
    <div className={`${remove?'hidden':''}`}>
      <div className="w-full bg-[#ffffff] border-1 shadow-xl p-4 sm:p-5 rounded-2xl">
        <div className='flex flex-col sm:flex-row justify-between gap-4'>
            <div className='h-full flex justify-center'>
              <img src={props.item.picUrl} alt="" className='h-full max-h-[180px] sm:max-h-[150px] md:max-h-[220px] object-contain'/>
            </div>
            <div className="flex flex-col justify-between gap-3 sm:gap-2">
              <div>

              <h1 className='font-medium text-sm'>{props.item.name}</h1>
              <h2 className='font-medium'>₹ {props.item.price}</h2>
              </div>
              <div className="flex flex-row items-center">
                <button 
                  className='border px-1.5 rounded-sm shadow-md  '
                  onClick={()=>{setcount((count)=>count+1)}}
                >+</button>
                <h2 className='mx-3'>{count}</h2>
                <button 
                  className='border px-1.5 rounded-sm shadow-md  '
                  onClick={()=>{setcount((count)=>{
                    if (count>1){
                      return count-1
                    }
                    else
                      return count=1
                  })}}
                >−</button>
              </div>
              <div className="flex border justify-center  rounded-xl bg-black text-white">
                <button 
                  className='p-1 cursor-pointer'
                  onClick={()=>{setRemove(true)}}
                >
                    Remove

                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem