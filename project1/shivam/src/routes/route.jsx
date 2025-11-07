import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Product from '../pages/product'
function Routing() {
  return (
       <Routes>
         <Route path='/' element={<Home/>} /> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/product' element={<Product/>}/>
       </Routes>
  )
}

export default Routing