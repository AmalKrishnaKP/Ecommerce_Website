import React from 'react'

const Item = (props) => {
  return (
    <div className="w-[100%] object-contain  p-2 m-3 bg-[#f9f9f9]  ">
        <div className='mb-4 flex justify-center' >
            <img className="w-[25vw] h-[25vw] object-contain " src="https://res.cloudinary.com/dezj3e0et/image/upload/v1753093133/qstanugyh7qo94snebzh.jpg" alt="" />
        </div>
        <div className="px-4 flex flex-row justify-between items-center pr-6">
            <div className="flex flex-col">
                <h2 className="font-[Poppins]">LapTop</h2>
                <h2 className="font-[Poppins]">₹ 15000</h2>
            </div>
            <div className="">
                <button className='border text-white bg-black rounded-2xl py-2 px-7'>
                    Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default Item