import React from 'react'
import './Donate.css'
import FadeIn from 'react-fade-in/lib/FadeIn';

function Donate(props) {
  return (
<>
<title>{props.type} • snipc</title>
<FadeIn delay={400}>
<div id="hero-text">
    <h2>{props.type}</h2>
    <p>{props.title}</p>
</div>

<div id="donate-methods"></div>

<div className="donate-method">
<iconify-icon icon="simple-icons:buymeacoffee" height='2rem'></iconify-icon>
    <h5>Buy me a coffee</h5>
</div>
</FadeIn>

</>
  )
}

export default Donate
