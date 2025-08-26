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
    <div className='flex flex-col pt-20 max-w-full'>
      <div className='w-full bg-[#f5f6f6] mt-3 p-5 border-y'>
          <h1 className="text-4xl max-sm:text-2xl font-[Poppins] mb-2">All Products</h1>
          <p className="text-sm text-gray-700">Explore electronics across categories and brands.</p>
      </div>

      <div className="w-full flex items-center gap-2 px-4 py-3">
          <span className='text-sm text-gray-600'>Filter:</span>
          <select name="filter" id="filter" className='border rounded px-2 py-1'
            onChange={(e)=>{setFilter(e.target.value);}}
          >
            <option value="all">All</option>
            <option value="laptop">Laptop</option>
            <option value="phone">Phone</option>
            <option value="accessories">Accessories</option>
          </select>
      </div>
      <div className="relative max-w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 pb-6">
            {items}
      </div>
    </div>
  )
}

export default ShopPage