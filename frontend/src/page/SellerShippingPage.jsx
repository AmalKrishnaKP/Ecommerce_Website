import React, { useEffect, useState } from 'react'
import { productStore } from '../store/productStore.js'

const SellerShippingPage = () => {
    const {getSellerOrders,markOrderSuccess}=productStore()
    const [orders,setOrders]=useState([])
    const [phoneByOrder,setPhoneByOrder]=useState({})

    useEffect(()=>{
        const load= async()=>{
            const data=await getSellerOrders()
            setOrders(data)
        }
        load()
    },[])

    const handleMark = async(orderId)=>{
        const phone = phoneByOrder[orderId]
        if(!phone){
            return alert('Please enter delivery phone number')
        }
        const ok = await markOrderSuccess(orderId,phone)
        if(ok){
            setOrders(prev=> prev.map(o=> o._id===orderId? {...o,currentStatus:'success',deliveryPhone:phone}:o))
        }
    }

    return (
        <div className='w-full flex justify-center pt-20'>
            <div className='w-full max-w-[800px] p-4'>
                <h2 className='text-xl font-bold mb-4'>Shipping</h2>
                <div className='flex flex-col gap-3'>
                    {orders.map(o=> (
                        <div key={o._id} className='border rounded-xl p-3 bg-white'>
                            <div className='flex justify-between'>
                                <div className='flex gap-3 items-start'>
                                    {o.itemId?.picUrl && (
                                        <img src={o.itemId.picUrl} alt={o.itemId?.name} className='w-16 h-16 object-cover rounded' />
                                    )}
                                    <div className='font-semibold'>Order #{o._id.slice(-6)}</div>
                                    <div>Product: {o.itemId?.name || o.itemId}</div>
                                    <div>Status: {o.currentStatus}</div>
                                    {o.deliveryPhone && (
                                        <div>Delivery: {o.deliveryPhone}</div>
                                    )}
                                </div>
                                {o.currentStatus!=="success" && (
                                    <div className='flex items-center gap-2'>
                                        <input className='border rounded px-2 py-1' placeholder='Delivery phone'
                                            value={phoneByOrder[o._id]||''}
                                            onChange={(e)=> setPhoneByOrder(prev=> ({...prev,[o._id]:e.target.value}))}
                                        />
                                        <button className='bg-black text-white px-3 py-1 rounded'
                                            onClick={()=>handleMark(o._id)}
                                        >Mark Success</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {orders.length===0 && (
                        <div className='text-center text-gray-600'>No orders yet.</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SellerShippingPage


