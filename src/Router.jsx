import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import AllProducts from './components/AllProducts'
import HomePage from './pages/HomePage'
import AdminHome from './pages/AdminHome'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ContactUs from './components/ContactUs'
import MyCart from './pages/Cart'
import AdminDashboard from './pages/AdminHome/AdminDashboard'



const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/products' element={<AllProducts/>} />

          <Route path='/admin' element={<Outlet/>}>
            <Route index element={<AdminHome/>} />
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          </Route>



          
          <Route path='/contactus' element={<ContactUs/>}/>

          <Route path='/mycart' element={<MyCart/>} />

        </Route>
    </Routes>
  )
}

export default Router