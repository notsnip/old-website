import {React,useState} from 'react'
import './hero.css'

function Hero() {
  const [discord_state,setStatus]= useState('Loading..')
  var stylesObj = {
    backgroundColor: 'grey',
  };
  fetch("https://api.lanyard.rest/v1/users/1019641343875760350")
  .then((res) => res.json())
  .then((json) => {
    let data= json.data.discord_status
    if (data=='offline') {
      setStatus('Offline')
    }
    else if (data=='online'){
      setStatus('Online')
      document.getElementById('circle').style.backgroundColor= 'rgb(121, 214, 121)'
    } 
    else if(data=='dnd'){
      setStatus('Busy')
      document.getElementById('circle').style.backgroundColor= 'rgb(212, 109, 109)'

    }
    else if(data=='idle'){
      setStatus('AFK')
      document.getElementById('circle').style.backgroundColor= 'rgb(209, 209, 116)'
    
    }
  })
  return (
<>
<div className="container">
  {/* here comes the text container  */}
<div className="text">
  {/* the text in bracket */}
    <h5 id="intro">
      <span id="circle" style={stylesObj}></span> &nbsp; {discord_state}
    </h5>
    {/* name and about me section  */}
    <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
    <p id='about'>I'm a 14 y/o self-taught hobbyistic frontend developer from India. I'm a Nerd who go by <span id='Shaurya'>snipc</span> online.</p>
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
