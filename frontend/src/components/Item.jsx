import React from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { productStore } from '../store/productStore.js'
const Item = (props) => {
    const [showDetail,setShowDetail]=useState(false)
  const {addCart}=productStore()
  return (
    <div>
      <div className="w-full p-3 m-3 bg-white border rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
        onClick={()=>{setShowDetail(!showDetail)}}
      >
        <div className='mb-3 flex justify-center'>
          <img className="w-full max-w-[220px] h-[180px] object-contain" src={props.product.picUrl} alt={props.product.name} />
        </div>
        <div className="px-1 flex flex-col gap-1">
          <h2 className="font-[Poppins] line-clamp-2 min-h-[48px]">{props.product.name}</h2>
          <div className='flex items-center justify-between'>
            <span className="font-[Poppins] font-semibold text-lg">₹ {props.product.price}</span>
            <button
              className='bg-black text-white text-sm px-3 py-1 rounded'
              onClick={(e)=>{e.stopPropagation(); addCart(props.product._id)}}
            >Add to cart</button>
          </div>
        </div>
      </div>
      <ItemDetail
        product={props.product}
        onclik={()=>setShowDetail(!showDetail)}
        showDetail={showDetail}
      />
    </div>
  )
} 

export default Item