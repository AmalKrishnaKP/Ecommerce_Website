import React from 'react'
import SellForm from '../components/SellForm.jsx'
import { Loader, Loader2 } from 'lucide-react'
const SellPage = () => {
  return (
    <div className='flex justify-center items-start sm:items-center pt-4 sm:pt-8 pb-8 w-full min-h-[calc(100vh-72px)] px-2 sm:px-4'>
        <SellForm />
        
    </div>
  )
}

export default SellPage