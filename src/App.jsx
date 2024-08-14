
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HOMEPAGE from './components/Homepage'
import ProductPage from "./components/ProductPage"
import BaksetContext from "./contexts/BaksetContext"
import { useState } from 'react'
import Abot from "./components/About"
import Layout from './components/Layout'
import Contact from './components/Contact'
import Account from './components/Account'
import Register from './components/Register'
import Cart from './components/Cart'

function App() {
  const [basket,setBasket]=useState([]);
  return (
    <>
     <BaksetContext.Provider value={{basket,setBasket}}>
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<HOMEPAGE/>}/>
      <Route path='/Prduct/:id' element={<ProductPage/>}/>
      <Route path='/about' element={<Abot/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Account' element={<Account/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </BaksetContext.Provider>
  </>
)
}

export default App