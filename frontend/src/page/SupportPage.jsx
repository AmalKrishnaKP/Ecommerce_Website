import React, { useState } from 'react'
import { axiosInstance } from '../lib/axios.js'
import { authStore } from '../store/authStore.js'

const SupportPage = () => {
  const {authUser}=authStore()
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [orderId,setOrderId]=useState("")
  const [itemId,setItemId]=useState("")
  const [contactPhone,setContactPhone]=useState(authUser?.phone||"")
  const [category,setCategory]=useState("website")

  const submit=async()=>{
    const endpoint = authUser?.role==="seller"? 'support/issue-seller':'support/issue'
    await axiosInstance.post(endpoint,{title,description,orderId,itemId,contactPhone,category})
    setTitle("")
    setDescription("")
    setOrderId("")
    setItemId("")
  }

  return (
    <div className='w-full flex justify-center '>
      <div className='w-full max-w-[700px] p-4'>
        <h2 className='text-xl font-bold mb-4'>Support</h2>
        <div className='bg-white p-4 rounded-xl border shadow-xl flex flex-col gap-4'>
          <div>
            <div className='font-semibold mb-1'>Issue Type</div>
            <select className='border rounded px-2 py-1' value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="website">Website</option>
              <option value="order">Order</option>
              <option value="item">Item</option>
            </select>
          </div>
          <div>
            <div className='font-semibold mb-1'>Issue Title</div>
            <input className='w-full border rounded px-2 py-2 shadow-sm' placeholder='Enter a concise title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <div>
            <div className='font-semibold mb-1'>Describe the problem in detail</div>
            <textarea className='w-full border rounded px-2 py-2 min-h-[120px] shadow-sm' placeholder='Steps tried, expected vs actual behavior, device, screenshots link, etc.' value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <div className='font-semibold mb-1'>Related Order ID (optional)</div>
              <input className='w-full border rounded px-2 py-1 shadow-sm' value={orderId} onChange={(e)=>setOrderId(e.target.value)} placeholder='Paste order id if relevant' />
            </div>
            <div>
              <div className='font-semibold mb-1'>Related Item ID (optional)</div>
              <input className='w-full border rounded px-2 py-1 shadow-sm' value={itemId} onChange={(e)=>setItemId(e.target.value)} placeholder='Paste item id if relevant' />
            </div>
          </div>
          <div>
            <div className='font-semibold mb-1'>Contact phone</div>
            <input className='w-full border rounded px-2 py-1 shadow-sm' value={contactPhone} onChange={(e)=>setContactPhone(e.target.value)} />
          </div>
          <div className='flex justify-end'>
            <button className='bg-black text-white px-4 py-2 rounded' onClick={submit}>Submit Issue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage