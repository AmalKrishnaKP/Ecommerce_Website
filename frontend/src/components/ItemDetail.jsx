import React from 'react'
import { productStore } from '../store/productStore.js'

const ItemDetail = ({product,onclik,showDetail}) => {


    const {addCart}=productStore()
  return (


    showDetail &&
    (
        <div className='fixed inset-0 bg-black/30 z-20 overflow-hidden'>

            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[70%] min-w-[420px] flex flex-col justify-center bg-white items-center rounded-xl shadow-2xl border p-3">
                <div className="flex flex-col justify-end items-end  w-full pt-2 pr-2">
                    <button
                        onClick={()=>onclik()}
                        >
                           ✖
                    </button>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-full overflow-hidden pb-2">
                        <img src={product.picUrl} alt="image" className='object-contain h-[260px] w-[260px]' />
                    </div>
                    <div className='w-full flex flex-col justify-between  '>
                        <div className='w-full flex flex-col justify-between'>
                        <h1 className='font-[Poppins] font-medium text-xl max-sm:text-[17px] pb-2'>{product.name}</h1>
                        <h2 className='font-[Poppins] font-medium text-xl max-sm:text-[17px] pb-2'>₹ {product.price}</h2>

                        </div>
                        <h2 className='font-[Poppins] font-medium text-xl max-sm:text-[12px]  pb-2'> {product.discription}</h2>
                        <div className="flex justify-end p-4">
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