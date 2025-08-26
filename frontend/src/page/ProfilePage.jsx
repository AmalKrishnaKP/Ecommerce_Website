import React, { useState } from 'react'
import { authStore } from '../store/authStore.js'

const ProfilePage = () => {
  const {authUser,updateAddress,updateAvatar,updateName}=authStore()
  const [address,setAddress]=useState(authUser?.address || "")
  const [name,setName]=useState(authUser?.fullName || "")
  const [preview,setPreview]=useState(authUser?.avatarUrl || "")
  const [editingAddress,setEditingAddress]=useState(false)
  const [editingName,setEditingName]=useState(false)

  if(!authUser){
    return <div className='pt-20 text-center'>Login required</div>
  }

  const handleAvatar=(e)=>{
    const file=e.target.files[0]
    if(!file) return
    const reader=new FileReader()
    reader.onload=()=>{
      setPreview(reader.result)
      updateAvatar(authUser.role,reader.result)
    }
    reader.readAsDataURL(file)
  }
  const handleAddressSave=()=>{
    updateAddress(authUser.role,address)
    setEditingAddress(false)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center pt-20'>
      <div className='w-full max-w-[600px] p-4'>
        <h2 className='text-xl font-bold mb-4'>Profile</h2>
        <div className='bg-white p-4 rounded-xl border shadow-xl flex  flex-col items-center justify-center gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-center relative'>
              <img src={preview || authUser?.avatarUrl || 'https://via.placeholder.com/100'} className='w-24 h-24  rounded-full object-cover'/>
              <label className='absolute bottom-1 right-8 bg-black text-white text-xs px-2 py-1 rounded cursor-pointer'>Edit
                <input type='file' accept='image/*' className='hidden' onChange={handleAvatar}/>
              </label>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
              <div className='mb-1 flex items-center gap-2  w-full'>
                <span className='font-semibold'>Name:</span>
                {!editingName ? (
                  <>
                    <span>{name || authUser?.fullName || '-'}</span>
                    <button className='bg-black text-white px-3 py-1 rounded' onClick={()=>setEditingName(true)}>Edit</button>
                  </>
                ):(
                  <div className='flex'>
                    <input className='border rounded px-2 py-1 shadow-sm' value={name} onChange={(e)=>setName(e.target.value)} />
                    <button className='bg-black text-white px-3 py-1 rounded' onClick={()=>{updateName(authUser.role,name); setEditingName(false)}}>Save</button>
                    <button className='px-3 py-1 rounded border' onClick={()=>{setName(authUser.fullName||""); setEditingName(false)}}>Cancel</button>
                  </div>
                )}
              </div>
              <div className='mb-1'><span className='font-semibold'>Email:</span> {authUser.email}</div>
              <div className='mb-1'><span className='font-semibold'>Phone:</span> {authUser.phone}</div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>Address:</span>
              {!editingAddress ? (
                <>
                  <span>{address || authUser?.address || '-'}</span>
                  <button className='bg-black text-white px-3 py-1 rounded' onClick={()=>setEditingAddress(true)}>Edit</button>
                </>
              ) : (
                <div className='flex gap-2 w-full'>
                  <input className='border rounded px-2 py-1 flex-1 shadow-sm' value={address} onChange={(e)=>setAddress(e.target.value)} />
                  <button className='bg-black text-white px-3 py-1 rounded' onClick={handleAddressSave}>Save</button>
                  <button className='px-3 py-1 rounded border' onClick={()=>{setAddress(authUser.address||""); setEditingAddress(false)}}>Cancel</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage