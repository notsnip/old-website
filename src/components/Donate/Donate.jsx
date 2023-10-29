import React from 'react'
import './Donate.css'
import FadeIn from 'react-fade-in/lib/FadeIn';

function Donate(props) {
  return (
<>
<meta name="description" content="Support me by donating some amount to help me awesome stuff."/>

{/* Content is set according to the props(donate/pay mode)  */}
<title>{props.type} • snipc</title>
<FadeIn delay={400}>
<div id="hero-text">
    <h2>{props.type}</h2>
    <p>{props.title}</p>
</div>

<div id="donate-methods"></div>

<a href="https://buymeacoffee.com/snipc">
<div className="donate-method">
<iconify-icon icon="simple-icons:buymeacoffee" height='2rem'></iconify-icon>
    <h5>Buy me a coffee</h5>
</div>
</a>
</FadeIn>

</>
  )
}

export default Donate
