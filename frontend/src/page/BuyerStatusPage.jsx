import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../lib/axios.js'

const BuyerStatusPage = () => {
    const [orders,setOrders]=useState([])

    useEffect(()=>{
        const load = async()=>{
            try{
                const res = await axiosInstance.get('user/order/showforuser')
                setOrders(res.data)
            }catch(e){
                console.log(e)
            }
        }
        load()
    },[])

    const callNumber=(num)=>{
        if(!num) return
        window.location.href = `tel:${num}`
    }

    return (
        <div className='w-full flex justify-center pt-20'>
            <div className='w-full max-w-[800px] p-4'>
                <h2 className='text-xl font-bold mb-4'>My Orders</h2>
                <div className='flex flex-col gap-3'>
                    {orders.map(o=> (
                        <div key={o._id} className='border rounded-xl p-3 bg-white'>
                            <div className='flex justify-between'>
                                <div className='flex gap-3 items-start'>
                                    {o.itemId?.picUrl && (
                                        <img src={o.itemId.picUrl} alt={o.itemId?.name} className='w-16 h-16 object-cover rounded' />
                                    )}
                                    <div className="flex flex-col">
                                        <div className='font-semibold'>Order #{o._id.slice(-6)}</div>
                                        <div className='font-medium'>Product: {o.itemId?.name || o.itemId}</div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    {o.currentStatus!=="success" ? (
                                        <div className='text-yellow-600 font-semibold'>Pending</div>
                                    ) : (
                                        <div className='flex flex-col items-end gap-1'>
                                            <div className='text-green-600 font-semibold'>Success</div>
                                            {o.deliveryPhone && (
                                                <button className='underline text-blue-700' onClick={()=>callNumber(o.deliveryPhone)}>
                                                    {o.deliveryPhone}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
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

export default BuyerStatusPage


