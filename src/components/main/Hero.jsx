import React from 'react'
import './hero.css'

function Hero() {
  return (
<>
<div className="container">
  {/* here comes the text container  */}
<div className="text">
  {/* the text in bracket */}
    <h5 id="intro">
      (snipc)
    </h5>
    {/* name and about me section  */}
    <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
    <p id='about'>I'm a 14 y/o self-taught hobbyistic frontend developer from India. I'm a Nerd and Otaku.</p>
</div>

{/* image container */}
<div className="img">
  <img src="../src/assets/snipc_nobg.png" alt="" />
</div>

</div>
</>
  )
}

export default Hero
