import React, { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'


export const addCard=createContext()

const App = () => {
  const [cart,setCart]=useState([])
  return (
    <addCard.Provider value={{cart,setCart}}>

      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      </BrowserRouter>
     
    </addCard.Provider>
  )
}

export default App