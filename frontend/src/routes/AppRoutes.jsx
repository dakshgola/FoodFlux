import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from '../pages/auth/Login'
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'

import ChooseRegister from '../pages/auth/ChooseRegister'
import UserRegister from '../pages/auth/UserRegister'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'

import Home from '../pages/general/Home'
import Saved from '../pages/general/Saved'
import Landing from '../pages/general/Landing'

import CreateFood from '../pages/food-partner/CreateFood'
import Profile from '../pages/food-partner/Profile'

import BottomNav from '../components/BottomNav'
import PartnerDashboard from '../pages/food-partner/Dashboard'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* ===== Public SaaS ===== */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* ===== Login Flows ===== */}
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/partner" element={<FoodPartnerLogin />} />

        {/* ===== Register ===== */}
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />

        {/* ===== App ===== */}
        <Route
          path="/app/home"
          element={<><Home /><BottomNav /></>}
        />

        <Route
          path="/app/saved"
          element={<><Saved /><BottomNav /></>}
        />

        {/* ===== Partner ===== */}
        <Route path="/create-food" element={<CreateFood />} />
        <Route path="/food-partner/:id" element={<Profile />} />
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />


      </Routes>
    </Router>
  )
}

export default AppRoutes
