import React, { useEffect } from 'react'
import { productStore } from '../store/productStore.js'

const Proceed = (props) => {
    const {proceedCart,avail,notAvail,total,order,getCart}=productStore()
    useEffect(()=>{
        proceedCart()
    },[])

    const ordering=()=>{
        order()
        getCart()
        props.cancel()

    }

    const av=avail.map((item)=>(
        <div className='flex flex-row items-center justify-between text-sm px-2'>
            <h1 className='p-1'>{item.name}</h1>
            <h1 className='p-1'>({item.count})</h1>
            <h1 className='p-1 text-red-600 font-medium'>₹{item.price}/-</h1>
        </div>
    ))
    const avN=notAvail.map((item)=>(
        <div className='flex flex-row items-center justify-between text-sm px-2'>
            <h1 className='p-1'>{item.name}</h1>
            <h1 className='p-1'>remaining({item.count_rem})</h1>
            
        </div>
    ))
  return (
    <div className='fixed inset-0 bg-yellow-50/50 z-10 overflow-auto'>
        
        <div className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#ffffff]  max-w-[500px] min-w-[400px] rounded-xl border-1.5 shadow-2xl">
        <div className="flex flex-col w-full p-2">
            <div className='w-full flex flex-row justify-end p-2 pt-1'>
                <button
                onClick={()=>props.cancel()}>
                    X
                </button>
            </div>
            <div className="grid grid-cols-2 w-full gap-2">
                <div className="w-full flex flex-col justify-center items-center border-1 rounded-2xl">
                    <h1 className='font-medium'>avail</h1>
                    
                    <div className='flex flex-col justify-center'>
                        {av}
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center border-1 rounded-2xl">
                    <h1 className='font-medium'>Not avail(remaining)</h1>
                    
                    <div className='flex flex-col justify-center'>
                        {avN}
                    </div>
                </div>
                              
            </div>
            <div className='flex flex-row justify-evenly py-2'>
                <h1 className="font-medium">Grant Total:</h1>      
                <h1 className="font-medium text-red-600">₹{total}/-</h1>      
            </div>
            <div className='rounded-xl shadow-md border-0 m-2 p-2 mb-0 flex flex-row justify-between items-center'>
                <h1>Proceed with Avail</h1>
                <div><button className='p-2 bg-black text-white border-1 rounded-xl'
                    onClick={()=>{ordering()}}
                >Order</button></div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Proceed