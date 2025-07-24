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
  
  const items=products.map((product)=>(
    <Item 
      product={product}
    />
  ))

  return (
    <div className='flex flex-col pt-20 w-full '>
      <div className='w-full bg-[#f9f9f9] mt-3 p-5 z-11 '>
          <h1 className="text-5xl max-sm:text-3xl font-[Poppins] mb-2"> All Products</h1>
          <p className="text-md font-[Poppins] max-sm:text-sm">Timeless design, quality Products, and forever exchanged.</p>
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
      <div className="relative  grid grid-cols-3 gap-x-2 max-sm:grid-cols-1 max-sm:px-14">
            {items}
      </div>
    </div>
  )
}

export default ShopPage