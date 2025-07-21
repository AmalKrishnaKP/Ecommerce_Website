import React, { useEffect } from 'react'
import { productStore } from '../store/productStore.js'
import Item from '../components/Item.jsx'
import { useState } from 'react'

const ShopPage = () => {
  const {getProducts,products}=productStore()
  const [filter,setFilter]=useState("all")
  useEffect(()=>{
    getProducts(filter)
  },[filter])
  console.log(products);
  
  return (
    <div className='flex flex-col pt-20'>
      <div className='w-[100vw] bg-[#f9f9f9] mt-3 p-5 '>
          <h1 className="text-5xl font-[Poppins] mb-2"> All Products</h1>
          <p className="text-md font-[Poppins]">Timeless design, quality Products, and forever exchanged.</p>
      </div>

      <div className="w-100">
          <select name="filter" id="filter"
            onChange={(e)=>{setFilter(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="laptop">Laptop</option>
            <option value="phone">Phone</option>
            <option value="accesseries">accesseries</option>
          </select>
      </div>
      <div className="grid grid-cols-3 gap-x-2">
      <Item />      
      <Item />
      <Item />
      <Item />      
      <Item />
      <Item />
      </div>
    </div>
  )
}

export default ShopPage