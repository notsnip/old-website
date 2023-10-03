import {React,useState} from 'react'
import './Hero.css'
import './Pages.css'

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

    <div id="links">

  <a href="https://github.com/realsnipc" target="_blank"className="link"><iconify-icon icon="line-md:github-loop" className="icon"  height='1.5em' style={{color:'white'}}></iconify-icon></a>

  <a href="https://linkedin.com/in/realshaurya" target="_blank"className="link"  id="linkedin" ><iconify-icon icon="ri:linkedin-fill" height='1.5em'style={{color:'white'}}></iconify-icon></a>
</div>
</div>

{/* image container */}
<div className="img">
  <img src="/src/assets/snipc_nobg.png" alt="" />
</div>


</div>
<div className="pages1">

  <div id="Repository" className='page'><h3>Text</h3> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptates!</p></div>
  <div id="" className='page'><h3>Text2</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, earum.</p></div>
  {/* <div id="" className='page'><h3>Text2</h3> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur minima earum quis ipsam repellendus deserunt distinctio repellat delectus, ea molestias?</p></div>
  <div id="" className='page'><h3>Text2</h3> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur minima earum quis ipsam repellendus deserunt distinctio repellat delectus, ea molestias?</p></div> */}
</div>

</>
  )
}

export default Hero
