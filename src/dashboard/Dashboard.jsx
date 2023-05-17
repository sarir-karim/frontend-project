import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./pages/Profile";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Routes>
            {/* <Route path="" element={<Home />} /> */}
            <Route path="" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
