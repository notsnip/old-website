import React from 'react'
import './Donate.css'

function Donate(props) {
  return (
<>
<title>{props.type} • snipc</title>
<div id="hero-text">
    <h2>{props.type}</h2>
    <p>{props.title}</p>
</div>

<div id="donate-methods"></div>

<div className="donate-method">
<iconify-icon icon="simple-icons:buymeacoffee" height='2rem'></iconify-icon>
    <h5>Buy me a coffee</h5>
</div>

</>
  )
}

export default Donate
