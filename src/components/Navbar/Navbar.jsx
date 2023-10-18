// importing libraries and css
import React from 'react'
import './Navbar.css'


function Navbar(props) {
  function redirect() {
    console.log('running')
    window.location= `/`;
  }
  function tooglemode(){
    alert("Sorry, I'm busy. I'll code it later.")
  }

  return (
    // navbar section 
    <div id='navbar'>
        <span id='mode' target='' onClick={tooglemode}><iconify-icon icon="ph:sun" height='1.4em'></iconify-icon></span>
        <span id='mode' target='' onClick={redirect}><iconify-icon icon="ic:round-home" height='1.4em'></iconify-icon></span>
        </div>
)}

export default Navbar
