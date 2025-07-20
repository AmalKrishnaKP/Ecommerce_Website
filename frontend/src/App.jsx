import React from 'react'
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

const App = () => {

  

  

  return (
    <div className=" bg-[url(src/assets/T2.png)] bg-no-repeat bg-size-[60vh] bg-center" >
      <div className='flex flex-col justify-start h-[100vh]  bg-[#ffffff]  bg-center  opacity-97'>
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/support' element={<Support />} />
          <Route path='/profile' element={<Profile />} />
          
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App