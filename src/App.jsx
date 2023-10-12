import { useState } from 'react'
import { Outlet,Routes,BrowserRouter,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Anime from './components/Anime/Anime';
import Work from './components/Work/Work';
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from './ScrollToTop';
import sound from './sound.mp3'


function App(){
  function play() {
    new Audio(sound).play()
  }
    
  return (
    <>
    <div id='main_div' onClick={play}>
    <AnimatedCursor color='128, 128, 128'/>
    <Navbar/>
    <ScrollToTop/>
    <Routes>

      <Route path='/' element={<Hero/>} />
      <Route path='/anime' element={<Anime/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<Work/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
