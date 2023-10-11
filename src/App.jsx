import { useState } from 'react'
import { Outlet,Routes,BrowserRouter,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Anime from './components/Anime/Anime';
import Work from './components/Work/Work';
import AnimatedCursor from "react-animated-cursor";


function App(){
    
  return (
    <>
    <AnimatedCursor color='128, 128, 128'/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/anime' element={<Anime/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<Work/>}/>
      </Routes>
    </>
  )
}

export default App
