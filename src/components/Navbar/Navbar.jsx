// importing libraries and css
import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";



function Navbar(props) {


  function redirect() {
    history.back()
  }

  return (
    // navbar section 
    <div id='navbar'>

      
      <span id='mode' target='' className='switch-btn' onClick={redirect} data-tooltip-id="Home">
        <iconify-icon icon="ant-design:home-filled" height='1.4em' ></iconify-icon>
      </span>

      {/* <span id='mode' target='' data-tooltip-id="home">
        <Link to='/'>
          <iconify-icon icon="ic:round-home" height='1.4em' style={{ color: 'white' }}>
          </iconify-icon>
        </Link>
      </span> */}

      {/* <ReactTooltip
        id="Feedback"
        place="bottom"
        content="Feedback"
        style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
      /> */}

      <ReactTooltip
        id="Home"
        place="bottom"
        content="Home (Back)"
        style={{ borderRadius: '10px', fontFamily: "'Work Sans', sans-serif" }}
      />




    </div>
  )
}

export default Navbar
