import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/Home'
import Events from './pages/Events'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Anayatics from './pages/Anayatics'
import Tickets from './pages/Tickets'
import EventDetail from './pages/EventDetail'
import NotifyGuests from './pages/NotifyGuests'
import GuestList from './GuestList'

const Dashboard = () => {
  return (
    <>
      <Header/>
     <div className="flex">
     <Sidebar/>
    <div className="w-full">
    <Routes>
      <Route path=""  element={<EventDetail/>}/>
     </Routes>
    {/* <Routes>
      <Route path=""  element={<NotifyGuests/>}/>
     </Routes> */}
    {/* <Routes>
      <Route path=""  element={<GuestList/>}/>
     </Routes> */}
    </div>
     </div>
    </>
  );
};

export default Dashboard;
