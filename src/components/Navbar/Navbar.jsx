// importing libraries and css
import React from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";



function Navbar(props) {
  



  // const darkMode = useDarkMode(false);

  
  function redirect() {
    console.log('running')
    window.location= `https://i.snipc.me`;
  }

  return (
    // navbar section 
    <div id='navbar'>
        <span id='mode' target='' className='switch-btn' onClick={redirect}>
          <iconify-icon icon="akar-icons:paper-airplane" height='1.4em' style={{color:'rgb(201, 201, 201)'}}></iconify-icon>
          </span>
        
        <span id='mode' target=''> 
<iconify-icon icon="ic:round-home" height='1.4em' style={{color:'rgb(201, 201, 201)'}}>
          </iconify-icon>

          </span>

        </div>
)}

export default Navbar
