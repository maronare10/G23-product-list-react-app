import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LayoutBase from './layouts/LayoutBase.jsx'
import LayoutLogin from './layouts/LayoutLogin.jsx'
import Products from './pages/Products.jsx'
import Profile from './pages/Profile.jsx'
import Product from './pages/Product.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
    <Routes>
      <Route path='/login' element={<LayoutLogin/>}>
        <Route index element={<Login/>}/>
      </Route>

      <Route path='/' element={<LayoutBase />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/profile' element={<Profile />} />

      </Route>
    </Routes>
   
  </BrowserRouter>,
)
