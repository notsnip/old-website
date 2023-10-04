import { useState } from 'react'
import { Outlet,Routes,BrowserRouter,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import AnimatedCursor from "react-animated-cursor";

function App(){
    
  return (
    <>
    <AnimatedCursor color='128, 128, 128'/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
