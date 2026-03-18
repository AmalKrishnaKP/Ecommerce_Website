import React from 'react'
import SignupForm from '../components/SignupForm.jsx'
// import { set } from 'mongoose';
const SignupPage = () => {
    // preventdefault()
    
  return (
    <div className='flex items-start justify-center w-full min-h-[calc(100vh-72px)] opacity-100 bg-[url(https://res.cloudinary.com/dezj3e0et/image/upload/v1753387277/bgimage_l2bvlf.png)] bg-cover bg-center px-3 sm:px-4 pt-12 sm:pt-16 pb-8'>
      
        <SignupForm />
    </div>
  )
}

export default SignupPage