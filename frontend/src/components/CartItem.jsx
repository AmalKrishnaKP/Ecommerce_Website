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
      <div className="w-full  bg-[#ffffff] border-1 shadow-xl p-5 rounded-2xl max-sm:max-h-[200px]">
        <div className='flex flex-row justify-between '>
            <div className='h-full '>
              <img src={props.item.picUrl} alt="" className='h-full max-sm:max-h-[150px] max-h-[510px]'/>
            </div>
            <div className="flex flex-col justify-between">
              <div>

              <h1 className='font-medium text-sm'>{props.item.name}</h1>
              <h2 className='font-medium'>₹ {props.item.price}</h2>
              </div>
              <div className="flex felx-row">
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