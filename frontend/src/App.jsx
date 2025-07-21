import React, { useEffect } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Nav from './components/Nav.jsx'

import { authStore } from './store/authStore.js'
import {Toaster} from 'react-hot-toast'
import LoginPage from './page/loginPage.jsx'
import SignupPage from './page/SignupPage.jsx' 
import ShopPage from './page/ShopPage.jsx'
import SellPage from './page/SellPage.jsx'
import CartPage from './page/CartPage.jsx'
import SupportPage from './page/SupportPage.jsx'
import ProfilePage from './page/ProfilePage.jsx'
import AboutUsPage from './page/AboutUsPage.jsx'

const App = () => {

  const {checkAuth ,authUser}=authStore()

  useEffect(()=>{
    checkAuth("user")
    checkAuth("seller")
  },[])
  console.log(authUser);
  

  return (
    <div className=" bg-[url(src/assets/T2.png)] bg-no-repeat bg-size-[60vh] bg-center" >
      <Toaster />
      <div className='flex flex-col justify-start h-[100vh]  bg-[#ffffff]  bg-center  opacity-97'>
        <Nav />
        <Routes>
          <Route path='/' element={authUser?<AboutUsPage />: <Navigate to="/login"/>}/>
          <Route path='/login' element={authUser?<Navigate to="/"/>:<LoginPage />} />
          <Route path='/signup' element={authUser?<Navigate to="/"/>:<SignupPage />} />
          <Route path='/shop' element={authUser && authUser.role=="user"? <ShopPage />:<Navigate to="/login"/>} />
          <Route path='/sell' element={authUser && authUser.role=="seller"? <SellPage />:<Navigate to="/login"/>} />
          <Route path='/cart' element={authUser && authUser.role=="user"? <CartPage />:<Navigate to="/login"/>} />
          
          <Route path='/support' element={authUser?<SupportPage /> :<Navigate to="/login"/> } />
          <Route path='/profile' element={<ProfilePage />} />
          
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App