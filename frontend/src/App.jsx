import React, { useEffect } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import LoginPage from './page/Login.page.jsx' 
import SignupPage from './page/Signup.page.jsx'
import Profile from './page/Profile.page.jsx'
import Shop from './page/Shop.page.jsx'
import AboutUs from './page/AboutUs.page.jsx'
import Support from './page/Support.page.jsx'
import Sell from './page/Sell.page.jsx'
import Cart from './page/Cart.page.jsx'
import Settings from './page/Settings.page.jsx'
import { authStore } from './store/authStore.js'
import {Toaster} from 'react-hot-toast'
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
          <Route path='/' element={authUser?<AboutUs />: <Navigate to="/login"/>}/>
          <Route path='/login' element={authUser?<Navigate to="/"/>:<LoginPage />} />
          <Route path='/signup' element={authUser?<Navigate to="/"/>:<SignupPage />} />
          <Route path='/shop' element={authUser && authUser.role=="user"? <Shop />:<Navigate to="/login"/>} />
          <Route path='/sell' element={authUser && authUser.role=="seller"? <Sell />:<Navigate to="/login"/>} />
          <Route path='/cart' element={authUser && authUser.role=="user"? <Cart />:<Navigate to="/login"/>} />
          
          <Route path='/support' element={authUser?<Support /> :<Navigate to="/login"/> } />
          <Route path='/profile' element={<Profile />} />
          
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App