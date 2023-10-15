import {React,useState} from 'react'
import './Hero.css'
import './Pages.css'
import { Link } from "react-router-dom";
import help from 'nodemon/lib/help';
import './Contact.css'

function Hero() {
  const [discord_state,setStatus]= useState('Loading..')
  var stylesObj = {
    backgroundColor: 'grey',
  };
  fetch("https://api.lanyard.rest/v1/users/1019641343875760350")
  .then((res) => res.json())
  .then((json) => {
    let data= json.data.discord_status
    if (json.data.spotify!=null){
      setStatus(`Listening to ${json.data.spotify.song}`)
      document.getElementById('circle').style.display='none'
      document.getElementById('intro').style.display='flex'
      document.getElementById('spotify').style.display='inline'

      
    }
    else if (data=='offline') {
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
      <img src="https://sniarchive.github.io/images/spotify-icon.png" alt="" id="spotify" />
      <span id="circle" style={stylesObj}></span> 
      &nbsp; 
      <span id='discord_s'>{discord_state}</span>
    </h5>
    {/* name and about me section  */}
    <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
    <p id='about'>I'm a 14 y/o self-taught fullstack developer from India. I'm a nerd so you may find me as <span id='Shaurya'>snipc</span> online.</p>


{/* the social links section  */}
    <div id="links">

  <a href="https://github.com/realsnipc" target="_blank"className="link"><iconify-icon icon="line-md:github-loop" className="icon"  height='1.5em' style={{color:'white'}}></iconify-icon></a>

  <a href="https://linkedin.com/in/realshaurya" target="_blank"className="link"  id="linkedin" ><iconify-icon icon="ri:linkedin-fill" height='1.5em'style={{color:'white'}}></iconify-icon></a>
</div>
</div>

{/* image container */}
<div className="img">
  <img src="https://sniarchive.github.io/images/snipc_nobg.png" alt="" />
</div>


</div>

{/* pages section  */}
<div className="pages1">
  
  <div id="first" className='page'>
  <Link to="/work"  style={{ textDecoration: 'none' }} preventScrollReset={false}>
    <h3>/work</h3> 
    <p>View my elegently crafted open-source and other awesome projects.</p>
    </Link>
    </div>


  <div id="second" className='page'>
  <Link to="/anime"  style={{ textDecoration: 'none' }}>
    <h3>/anime</h3> <p>The animes that I'm currently watching that make me feel like I can do anything.</p>
  </Link>
    </div>
</div>
<div className="pages2">
  <div id="third" className='page'>
  <Link to="/donate"  style={{ textDecoration: 'none' }}>
    <h3>/donate</h3>
     <p>Support my work to help me create something that will blow up people's minds!</p>
  </Link>
     </div>
  <div id="fourth" className='page'>
  <Link to="/stack"  style={{ textDecoration: 'none' }}>
    <h3>/stack</h3> 
    <p>The tools that make me look like a genius (even though I'm not). </p>
    </Link>
    </div>
</div>


<div id="contact">

<iconify-icon icon="fluent:contact-card-16-filled" height='10em' style={{color: '#b3bdb6;'}}></iconify-icon>

<div id="text_section">
  <div className="social">
    <h3>Discord</h3>
    <p>snipc</p>
  </div>
  <div className="social"></div>
  <div className="social"></div>
</div>
</div>

</>
  )
}

export default Hero
