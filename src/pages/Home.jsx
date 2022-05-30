import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            {/* Los dos puntos indican una variable */}
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Home


