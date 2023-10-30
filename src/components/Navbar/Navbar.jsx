// importing libraries and css
import React from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";



function Navbar(props) {
  

  function redirect() {
    console.log('running')
    window.location= `https://github.com/realsnipc/snipc/issues`;
  }

  return (
    // navbar section 
    <div id='navbar'>
        <span id='mode' target='' className='switch-btn' onClick={redirect}>
          <iconify-icon icon="fluent:person-feedback-16-filled" height='1.4em' ></iconify-icon>
          </span>

        <span id='mode' target=''> 
        <Link to='/'>
<iconify-icon icon="ic:round-home" height='1.4em' style={{color:'white'}}>
          </iconify-icon>
          </Link>
          </span>


        </div>
)}

export default Navbar
