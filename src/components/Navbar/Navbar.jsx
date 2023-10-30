// importing libraries and css
import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";



function Navbar(props) {


  function redirect() {
    console.log('running')
    window.location = `https://github.com/realsnipc/snipc/issues`;
  }

  return (
    // navbar section 
    <div id='navbar'>
      <span id='mode' target='' className='switch-btn' onClick={redirect} data-tooltip-id="feedback">
        <iconify-icon icon="fluent:person-feedback-16-filled" height='1.4em' ></iconify-icon>
      </span>

      <span id='mode' target='' data-tooltip-id="home">
        <Link to='/'>
          <iconify-icon icon="ic:round-home" height='1.4em' style={{ color: 'white' }}>
          </iconify-icon>
        </Link>
      </span>

      <ReactTooltip
        id="feedback"
        place="bottom"
        content="Feedback"
        style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
      />

      <ReactTooltip
        id="home"
        place="bottom"
        content="Home"
        style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
      />




    </div>
  )
}

export default Navbar
