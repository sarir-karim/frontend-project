import React from "react";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import TwoFactorAuth from "./auth/TwoFactorAuth/TwoFactorAuth";
import VerificationCode from "./auth/TwoFactorAuth/VerficationCode";
import TwoFactorSuccess from "./auth/TwoFactorAuth/TwoFactorSuccess";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import ResetCode from "./auth/ResetPassword/ResetCode";
import NewPassword from "./auth/ResetPassword/NewPassword";
import ResetSuccess from "./auth/ResetPassword/ResetSuccess";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Event from "./pages/Event/Event";
import Faqs from "./pages/Faqs/Faqs";

//dashboard links
import Dashboard from "./dashboard/Dashboard"
import DashHome from "./dashboard/pages/Home";
import DashEvents from "./dashboard/pages/Events";
import DashEventDetail from "./dashboard/pages/EventDetail";
import DashNotifyGuests from "./dashboard/pages/NotifyGuests";
import DashGuestList from "./dashboard/GuestList";
import DashProfile from "./dashboard/pages/Profile";
import DahAnayatics from "./dashboard/pages/Anayatics";
import DahTickets from "./dashboard/pages/Tickets";
import DashChat from './dashboard/pages/Chat'
import DashSettings from './dashboard/pages/Settings'


const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        {/* page routes */}
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/aboutus" />
        <Route element={<Services />} path="/services" />
        <Route element={<Event />} path="/event" />
        <Route element={<Faqs />} path="/faqs" />
        <Route element={<Signup />} path="signup" />
        <Route element={<Login />} path="login" />
        {/* two factor auth routes */}
        <Route element={<TwoFactorAuth />} path="twofactorauth" />
        <Route element={<VerificationCode />} path="verificationcode" />
        <Route element={<TwoFactorSuccess />} path="twofactorsucess" />
        {/* resetpassword routes */}
        <Route element={<NewPassword />} path="newpassword" />
        <Route element={<ResetCode />} path="resetcode" />
        <Route element={<ResetPassword />} path="resetpassword" />
        <Route element={<ResetSuccess />} path="resetsuccess" />
        {/* dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard/home" element={<DashHome/>}/>
            <Route path="/dashboard/events" element={<DashEvents/>}/>
            <Route path="/dashboard/eventdetail" element={<DashEventDetail/>}/>
            <Route path="/dashboard/notifyguest" element={<DashNotifyGuests/>}/>
            <Route path="/dashboard/guestlist" element={<DashGuestList/>}/>
            <Route path="/dashboard/profile" element={<DashProfile/>}/>
            <Route path="/dashboard/analytics" element={<DahAnayatics/>}/>
            <Route path="/dashboard/tickets" element={<DahTickets/>}/>
            <Route path="/dashboard/chat" element={<DashChat/>}/>
            <Route path="/dashboard/settings" element={<DashSettings/>}/>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
