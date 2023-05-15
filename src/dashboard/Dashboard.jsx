import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/Home'
import Events from './pages/Events'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Header/>
     <div className="flex">
     <Sidebar/>
    <div className="w-full">
    <Routes>
      <Route path=""  element={<Events/>}/>
     </Routes>
    </div>
     </div>
    </>
  )
}

export default Dashboard
