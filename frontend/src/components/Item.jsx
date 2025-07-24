import React from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
const Item = (props) => {
    const [showDetail,setShowDetail]=useState(false)
  return (
    <div>
    <div className="w-full object-contain  p-2 m-3 bg-[#ffffff]  "
        onClick={()=>{setShowDetail(!showDetail)}}
    >
        <div className='mb-4 flex justify-center' >
            <img className="w-[25vw] h-[25vw] object-contain " src={props.product.picUrl} alt="" />
        </div>
        <div className="px-4 flex flex-row justify-between items-center pr-6">
            <div className="flex flex-col">
                <h2 className="font-[Poppins]">{props.product.name}</h2>
                <h2 className="font-[Poppins]">₹ {props.product.price}</h2>
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