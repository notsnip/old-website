import React from 'react'
import './Footer.css'

function Footer(props) {
  return (

<div id="footer">
  <a href={props.project_link} id="link" target='_blank'>
    <p id='icon'><iconify-icon icon="raphael:opensource" style={{color: '#999'}}></iconify-icon> </p> <span id='text'>snipc</span>
    </a>
</div>
  )
}

export default Footer
