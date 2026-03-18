import React from 'react'
import { productStore } from '../store/productStore.js'

const ItemDetail = ({product,onclik,showDetail}) => {


    const {addCart}=productStore()
  return (


    showDetail &&
    (
        <div className='fixed inset-0 bg-black/30 z-20 overflow-y-auto p-3 sm:p-6'>

            <div className="mx-auto mt-8 sm:mt-14 w-full max-w-[760px] flex flex-col justify-center bg-white items-center rounded-xl shadow-2xl border p-3 sm:p-4">
                <div className="flex flex-col justify-end items-end  w-full pt-2 pr-2">
                    <button
                        onClick={()=>onclik()}
                        >
                           ✖
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="w-full overflow-hidden pb-2 flex justify-center">
                        <img src={product.picUrl} alt="image" className='object-contain h-[220px] sm:h-[260px] w-[220px] sm:w-[260px]' />
                    </div>
                    <div className='w-full flex flex-col justify-between  '>
                        <div className='w-full flex flex-col justify-between'>
                        <h1 className='font-[Poppins] font-medium text-lg sm:text-xl pb-2'>{product.name}</h1>
                        <h2 className='font-[Poppins] font-medium text-lg sm:text-xl pb-2'>₹ {product.price}</h2>

                        </div>
                        <h2 className='font-[Poppins] font-medium text-sm sm:text-base pb-2'> {product.discription}</h2>
                        <div className="flex justify-end p-2 sm:p-4">
                            <button 
                                className='border text-white bg-black rounded-2xl py-2 px-7 '
                                onClick={()=>addCart(product._id)}
                            >
                                Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
  )
}

export default ItemDetail