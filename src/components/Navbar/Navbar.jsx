// importing libraries and css
import React from 'react'
import './Navbar.css'


function Navbar(props) {
  function redirect() {
    console.log('running')
    window.location= `/`;
  }

  return (
    // navbar section 
    <div id='navbar'>
        <span id='mode' target=''><iconify-icon icon="ph:sun" height='1.4em'></iconify-icon></span>
        <span id='mode' target=''><iconify-icon icon="ic:round-home" height='1.4em'  onClick={redirect}></iconify-icon></span>
        </div>
)}

export default Navbar
