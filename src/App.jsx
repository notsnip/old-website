import { useState } from 'react'
import { Outlet,Routes,BrowserRouter,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Anime from './components/Anime/Anime';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import AnimatedCursor from "react-animated-cursor";
import ToTop from '../scripts/ToTop';
import sound from './sound.mp3'
import FadeIn from 'react-fade-in';


function App(){
  // script to play the 'click' audio 
  function play() {
    new Audio(sound).play()
  }
    
  return (
    <>
    {/* fade in animation effect to whole hero content  */}
       <FadeIn delay={900}>
    <div id='main_div' onClick={play}>

      {/* animated cursor component  */}
    <AnimatedCursor color='128, 128, 128'/>
    {/* default navbar in every route  */}
    <Navbar/>

    {/* scroll to top script which shift the page to top when user visit a route (this is script not button) */}
    <ToTop/>



    {/* routes setup */}
    <Routes>

      {/* home route (i have given value in props to age and social links here )  */}
      <Route path='/' element={<Hero age='14' developer='fullstack' nerd_name='snipc' discord='snipc' linkedin='realshaurya' github='realsnipc' email='hey@snipc.me'/>} />

      {/* the anime section  */}
      <Route path='/anime' element={<Anime/>}/>

      {/* projects section  */}
      <Route path='/work' element={<Work/>}/>
      </Routes>
      {/* footer (on every route) with text and project_link props */}
      <Footer text='snipc' project_link='https://github.com/realsnipc/snipc.me'/>

      </div>
      </FadeIn>
    </>
  )
}

export default App
