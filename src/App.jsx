import React from 'react'
import Signup from './auth/Signup/Signup'
import Login from './auth/Login/Login'
import { Route, Routes } from 'react-router-dom'
import TwoFactorAuth from './auth/TwoFactorAuth/TwoFactorAuth'
import VerificationCode from './auth/TwoFactorAuth/VerficationCode'
import TwoFactorSuccess from './auth/TwoFactorAuth/TwoFactorSuccess'
import ResetPassword from './auth/ResetPassword/ResetPassword'
import ResetCode from './auth/ResetPassword/ResetCode'
import NewPassword from './auth/ResetPassword/NewPassword'
import ResetSuccess from './auth/ResetPassword/ResetSuccess'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Event from './pages/Event/Event'
import Faqs from './pages/Faqs/Faqs'
import Dashboard from './dashboard/Dashboard' 


const App = () => {
  return (
    <div >
      <Header/>
        <Routes>
          {/* page routes */}
            <Route element={  <Home/>} path='/'/>
            <Route element={  <About/>} path='/aboutus'/>
            <Route element={  <Services/>} path='/services'/>
            <Route element={  <Event/>} path='/events'/>
            <Route element={  <Faqs/>} path='/faqs'/>
            <Route element={  <Signup/>} path='signup'/>
            <Route element={  <Login/>} path='login'/>
            {/* two factor auth routes */}
            <Route element={  <TwoFactorAuth/>} path='twofactorauth'/>
            <Route element={  <VerificationCode/>} path='verificationcode'/>
            <Route element={  <TwoFactorSuccess/>} path='twofactorsucess'/>
            {/* resetpassword routes */}
            <Route element={  <NewPassword/>} path='newpassword'/>
            <Route element={  <ResetCode/>} path='resetcode'/>
            <Route element={  <ResetPassword/>} path='resetpassword'/>
            <Route element={  <ResetSuccess/>} path='resetsuccess'/>
                <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        <Footer/>
   
     
    </div>
  )
}

export default App
