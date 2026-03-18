import { Images, Inbox, IndianRupee, NotebookPen, Tally5 } from 'lucide-react'
import React, { useState } from 'react'
import { productStore } from '../store/productStore.js'

const SellForm = () => {
    const {additem}=productStore()
    const [formdata,setFormdata]=useState({
        name:"",
        count:null,
        pic:"",
        discription:"",
        price:null,
        elec_type:"",
    })
    const handleimge=(e)=>{
        const file=e.target.files[0]
        if (file)
        {

            const reader = new FileReader();   
            reader.onload=()=>{
                setFormdata({... formdata,pic:reader.result})
            }
            reader.readAsDataURL(file)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        additem(formdata)
            
    }
  return (
    <div className='border-1 p-4 sm:p-5 rounded-2xl shadow-xl w-full max-w-[560px] bg-white'>
        <div className='flex flex-row justify-center items-center  font-bold font-[Poppins]'>
            SELL YOUR PRODUCT
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>

                <div className="form-control pb-4">
                        <label htmlFor="name" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Product Name:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="absolute left-0 pl-1">
                            <Inbox />
                            </div>
                            <div className="w-full border-black border-2 rounded-xl">
                                <input type="text" name="name" id="name" placeholder='ASUSE ROWGE' className='pl-7 py-2 outline-none w-full'
                                    required={true}
                                    onChange={(e)=>{setFormdata({... formdata,name:e.target.value })}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-4">
                        <label htmlFor="category" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Category:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="border-black border-2 rounded-xl w-full">
                                <select name="category" id="category" className='pl-2 py-2 outline-none w-full'
                                    required={true}
                                    value={formdata.elec_type}
                                    onChange={(e)=>{setFormdata({... formdata,elec_type:e.target.value })}}
                                >
                                    <option value="" disabled>Choose category</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="accessory">Accessory</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-4">
                        <label htmlFor="count" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Product Count:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="absolute left-0 pl-1">
                            <Tally5 />
                            </div>
                            <div className="w-full border-black border-2 rounded-xl">
                                <input type="number" name="count" id="count" placeholder='20' className='pl-7 py-2 outline-none w-full'
                                    required={true}
                                    onChange={(e)=>{setFormdata({... formdata,count:e.target.value })}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-4">
                        <label htmlFor="image" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Product image:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="absolute left-0 pl-1">
                            <Images />
                            </div>
                            <div className="w-full border-black border-2 rounded-xl">
                                <input type="file" name="image" id="image" placeholder='20' className='pl-7 py-2 outline-none w-full' accept="image/png, image/jpeg"
                                    required={true}
                                    onChange={handleimge}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-4">
                        <label htmlFor="discription" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Product Discription:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="absolute left-0 pl-1">
                            <NotebookPen />
                            </div>
                            <div className="w-full border-black border-2 rounded-xl">
                                <input type="text" name="discription" id="discription" placeholder='Intel processor whith snapdragon....' className='pl-7 py-2 outline-none w-full'
                                    required={true}
                                    onChange={(e)=>{setFormdata({... formdata,discription:e.target.value })}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-control pb-4">
                        <label htmlFor="price" className=' mb-2'>
                            <span className='font-medium text-md pl-2'>Product Price:</span>
                        </label>
                        <div className="relative flex items-center  ">
                            <div className="absolute left-0 pl-1">
                            <IndianRupee />
                            </div>
                            <div className="w-full border-black border-2 rounded-xl">
                                <input type="text" name="price" id="price" placeholder='150000' className='pl-7 py-2 outline-none w-full'
                                    required={true}
                                    onChange={(e)=>{setFormdata({... formdata,price:e.target.value })}}
                                />
                            </div>
                        </div>
                    </div>
                <div className='w-full flex justify-center'>
                    <button type="submit" className=' py-2 px-3 border-1 rounded-xl bg-black text-white'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SellForm