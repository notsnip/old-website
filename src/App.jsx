import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Anime from './components/Anime/Anime';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Support from './components/Donate/Support';
import AnimatedCursor from "react-animated-cursor";
import ToTop from '../scripts/ToTop';
import sound from './click_sound.mp3'
import FadeIn from 'react-fade-in';
import Page404 from '../scripts/Page404';
import Contact from './components/Contact/Contact';
import Stack from './components/Stack/Stack';


function App() {




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

          <AnimatedCursor
            color='123, 123, 123'
            clickables={[
              'a',
              {
                target: 'html',
                options: {
                  color: '123, 123, 123',
                  innerScale: 0.1,
                  innerSize: 8,
                  innerStyle: null,
                  outerAlpha: 0.4
                }
              }
            ]}
          />

          {/* these meta tags change the top bar colour to dark in ios and android devices  */}
          <meta name="theme-color" content="rgb(23,23,23)" />
          <meta name="apple-mobile-web-app-status-bar-style" content="rgb(23,23,23)"></meta>

          {/* default navbar in every route  */}
          <Navbar />

          {/* scroll to top script which shift the page to top when user visit a route (this is script not button) */}
          <ToTop />



          {/* routes setup */}
          <Routes>


            <Route path='*' element={<Page404 />} />
            {/* home route (i have given value in props to social links here )  */}
            <Route path='/' element={<Hero />} />

            {/* the contact section  */}
            <Route path='/contact' element={<Contact />} />

            {/* the stack section  */}
            <Route path='/stack' element={<Stack />} />

            {/* the anime section  */}
            <Route path='/anime' element={<Anime />} />

            {/* projects section  */}
            <Route path='/work' element={<Work />} />

            {/* Donate section  */}
            <Route path='/support' element={<Support type='support' title="“No act of kindness, no matter how small, is ever wasted.” – Aesop" />} />
          </Routes>
          {/* footer (on every route) with text and project_link props */}
          <Footer project_link='https://github.com/realsnipc/snipc' />

        </div>
      </FadeIn>
    </>
  )
}

export default App
