import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import Support from "./pages/Support";
import ToTop from "./scripts/ToTop";
import clickSound from "./click_sound.mp3";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
import ScrollToTop from "react-scroll-up";

function App() {
  // script to play the 'click' audio
  function play() {
    new Audio(clickSound).play();
  }

  return (
    <>
      <div id="main_div fade-in" onClick={play}>
        {/* these meta tags change the top bar colour to dark in ios and android devices  */}
        <meta name="theme-color" content="rgb(23,23,23)" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="rgb(23,23,23)"
        ></meta>

        {/* default navbar in every route  */}
        <Navbar />

        {/* scroll to top script which shift the page to top when user visit a route (this is script not button) */}
        <ToTop />

        {/* scroll to top button  */}
        <ScrollToTop showUnder={160}>
          <div id="scroll_to_top">
            <iconify-icon
              icon="mingcute:up-fill"
              height="1.3rem"
              style={{ color: "var(--text-white)" }}
            ></iconify-icon>
          </div>
        </ScrollToTop>

        {/* routes setup */}
        <Routes>
          <Route path="*" element={<Hero />} />
          {/* home route*/}
          <Route path="/" element={<Hero />} />

          {/* the contact section  */}
          <Route path="/contact" element={<Contact />} />

          {/* the stack section  */}
          <Route path="/stack" element={<Stack />} />

          {/* projects section  */}
          <Route path="/work" element={<Work />} />

          {/* Donate section  */}
          <Route
            path="/support"
            element={
              <Support
                type="support"
                title="“No act of kindness, no matter how small, is ever wasted.” – Aesop"
              />
            }
          />
        </Routes>
        {/* footer (on every route) with text and project_link props */}
        <Footer project_link="https://github.com/realsnipc/snipc" />
      </div>
    </>
  );
}

export default App;
