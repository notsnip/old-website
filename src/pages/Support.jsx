import React from 'react'
import '../styles/Donate.css'
import { useEffect } from 'react';
import { themeChange } from 'theme-change'


function Support() {useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
  return (
<>
<meta name="description" content="Support me by donating some amount to help me awesome stuff."/>

<title>support | snipc</title>
<div className='fade-in'>
<div id="hero-text">
    <h2 className='text_hero_text'>Support</h2>
    <p>
If you appreciate my work or would like to show your support, I would be incredibly grateful for your support! Your generosity would truly make my day! ✧˖°. </p>
</div>

<div id="donate-methods">


{/* buymeacoffee  */}
<a href="https://buymeacoffee.com/snipc">
<div className="donate-method">
<iconify-icon icon="simple-icons:buymeacoffee" height='2rem'></iconify-icon>
    <h5>Buy Me A Coffee</h5>
</div>
</a>


{/* patreon  */}
<a href="https://github.com/realsnipc/snipc" target='_blank'>
<div className="donate-method">
<iconify-icon icon="entypo-social:github" height='2rem'></iconify-icon>
    <h5>Star on Github </h5>
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
</div>
</div>

</>
  )
}

export default Support
