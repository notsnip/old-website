// importing libraries and css
import React from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";



function Navbar(props) {
  



  // const darkMode = useDarkMode(false);

  
  function redirect() {
    console.log('running')
    window.location= `https://www.eightsleep.com/blog/17-deep-thoughts-that-will-blow-your-damn-mind/`;
  }

  return (
    // navbar section 
    <div id='navbar'>
        <span id='mode' target='' className='switch-btn'><iconify-icon icon="akar-icons:paper-airplane" height='1.4em' onClick={redirect}></iconify-icon></span>
        
        <span id='mode' target=''> <Link to="/"><iconify-icon icon="ic:round-home" height='1.4em' style={{color:'white'}}></iconify-icon></Link></span>

        </div>
)}

export default Navbar
