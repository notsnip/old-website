import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Anime from './pages/Anime/Anime';
import Work from './pages/Work/Work';
import Footer from './components/Footer/Footer';
import Support from './pages/Donate/Support';
import ToTop from './scripts/ToTop';
import sound from './click_sound.mp3';
import Contact from './pages/Contact/Contact';
import Stack from './pages/Stack/Stack';
import ScrollToTop from 'react-scroll-up';
import 'animate.css';

function App() {

  // script to play the 'click' audio 
  function play() {
    new Audio(sound).play();
  }

  return (
    <>
      <div id='main_div' onClick={play} className='animate__animated animate__fadeIn animate__delay-1s'>

        {/* these meta tags change the top bar colour to dark in ios and android devices  */}
        <meta name="theme-color" content="rgb(23,23,23)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="rgb(23,23,23)"></meta>

        {/* default navbar in every route  */}
        <Navbar />

        {/* scroll to top script which shift the page to top when user visit a route (this is script not button) */}
        <ToTop />


        {/* scroll to top button  */}
        <ScrollToTop showUnder={160}>
          <div id="scroll_to_top">
            <iconify-icon icon="mingcute:up-fill" height='1.3rem' style={{ color: 'var(--text-white)' }}></iconify-icon>
          </div>

        </ScrollToTop>

        {/* routes setup */}
        <Routes>


          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Route path='*' element={<Page404 />} />
                  {/* home route*/}
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
                </CSSTransition>
              </TransitionGroup>
            )}
          />

          <Route path='*' element={<Hero />} />
          {/* home route*/}
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

    </>
  );
}

export default App;
