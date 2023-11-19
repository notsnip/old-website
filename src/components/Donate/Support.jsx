import React from 'react'
import './Donate.css'
import FadeIn from 'react-fade-in/lib/FadeIn';

function Support(props) {
  return (
<>
<meta name="description" content="Support me by donating some amount to help me awesome stuff."/>

<title>Support - snipc</title>
<FadeIn delay={400}>
<div id="hero-text">
    <h2 className='text_hero_text'>{props.type}</h2>
    <p> {props.title}</p>
</div>

<div id="donate-methods"></div>


{/* buymeacoffee  */}
<a href="https://buymeacoffee.com/snipc">
<div className="donate-method">
<iconify-icon icon="simple-icons:buymeacoffee" height='2rem'></iconify-icon>
    <h5>Buy Me Coffee</h5>
</div>
</a>


{/* patreon  */}
<a href="https://patreon.com/snipc">
<div className="donate-method">
<iconify-icon icon="mdi:patreon" height='2rem'></iconify-icon>
    <h5>Patreon </h5>
</div>
</a>
{/* 
<h2 className='text_hero_text'>more ways</h2>

<a href="https://github.com/realsnipc/snipc.me">
<div className="donate-method">
<iconify-icon icon="material-symbols:star" height='2rem'></iconify-icon>
    <h5>Star - Github </h5>
</div>
</a> */}
</FadeIn>

</>
  )
}

export default Support
