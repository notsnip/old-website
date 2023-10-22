import React from 'react';
import './Work.css'
import FadeIn from 'react-fade-in';

// projects images 

import old_snipc from './img/old_snipc.png'
import snipc_me from './img/snipc_me.png'
import tribute_to_steve from './img/tribute_to_steve.png'


function Work() {
  return (
 <>
 <FadeIn delay={300}>


 <div id="repos_container">


{/* projects  */}
 <div className="repo">
      <img src={snipc_me} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>snipc.me</h2>
      <p> My personal website, built with React.js, Vite and &gt;3!</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/snipc.me" target='_blank'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://snipc.me">
        <iconify-icon icon="mdi:web" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>
   
    <div className="repo right">
      <img src={old_snipc} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>Old Homepage</h2>
      <p> A single framed page with links to my socials. Used to be my homepage</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/old.snipc" target='_blank'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://old.snipc.me">
        <iconify-icon icon="mdi:web" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>

    <div className="repo">
      <img src={tribute_to_steve} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>Tribute To Steve</h2>
      <p>Steve was a innovative and inspiring person and I'm always fascinated by his lifestyle and this perception of life. To remember his revolutionary contributions to the world, I've created this website.</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/TributeToSteve/" target='_blank'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://realsnipc.github.io/TributeToSteve/">
        <iconify-icon icon="mdi:web" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>

    </div>
           {/* the github note  */}
           <div id="note">
  <h1>Find my other open-source projects on <a href="https://github.com/realsnipc">GitHub</a></h1>
 </div>


    
 </div>
 </FadeIn>
 </>
  )
}

export default Work
