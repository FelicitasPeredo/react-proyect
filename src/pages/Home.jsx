import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from '../components/CartContext'

const Home = () => {
  return (
    // Envuelvo toda la app con el cartcontext provider
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            {/* Los dos puntos indican una variable */}
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default Home


