import React from 'react';
import './Work.css'
import ss from '../../assets/ss.png'


function Work() {
  return (
 <>

 {/* the github note  */}
 <div id="note">
  <h1>Find my newest open-source projects on <a href="https://github.com/realsnipc">GitHub.</a></h1>
 </div>
 <div id="repos_container">


{/* projects  */}
 <div className="repo">
      <img src='../../../src/assets/ss.png' alt="" height='250px' width='500px'/>
      <div id="text">
      <h2>snipc.me</h2>
      <p> Personal website (yep this one!). Everthing is included. Written in React.js with Vite.</p>
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
      <img src='https://old.snipc.me/img/snipc.png' alt="" height='250px' width='500px'/>
      <div id="text">
      <h2>Personal Homepage</h2>
      <p> (Old) Personal Homepage. Simple and elegent single framed page.</p>
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
      <img src='https://realsnipc.github.io/TributeToSteve/preview.png' alt="" height='250px' width='500px'/>
      <div id="text">
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

{/* last updated note  */}
    <div id="last_updated">
      <p>Projects Last Updated: 12 October 2023</p>
    </div>


    
 </div>
 </>
  )
}

export default Work
