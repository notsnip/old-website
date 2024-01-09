import React from 'react'
import './Footer.css'


function Footer(props) {
  return (

<div id="footer">
  <a href='https://github.com/realsnipc/snipc.me' id="link" target='_blank'>
    <p id='icon'><iconify-icon icon="ph:link-bold" style={{color: '#999'}}></iconify-icon> </p> <span id='text'>Open Source | MIT License</span>
    </a>
</div>
  )
}

export default Footer
