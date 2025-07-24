import React from 'react'
import SignupForm from '../components/SignupForm.jsx'
// import { set } from 'mongoose';
const SignupPage = () => {
    // preventdefault()
    
  return (
    <div className='flex  items-center justify-center opacity-100  px-3  pt-20  '>
      <div className=''>
        <img src="src/assets/bgimage.png" alt=""   />

      </div>
        <SignupForm />
    </div>
  )
}

export default SignupPage