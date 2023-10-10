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
    if (json.data.spotify!=null){
      setStatus(`Listening to '${json.data.spotify.song}'`)
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
      <img src="https://www.freeiconspng.com/uploads/spotify-icon-18.png" alt="" id="spotify" />
      <span id="circle" style={stylesObj}></span> 
      &nbsp; 
      <span id='discord_s'>{discord_state}</span>
    </h5>
    {/* name and about me section  */}
    <h1 id='hello'>Hello, I'm <span id='Shaurya'>Shaurya</span></h1>
    <p id='about'>I'm a 14 y/o self-taught hobbyistic frontend developer from India. As a Nerd you may find me as <span id='Shaurya'>snipc</span> online.</p>

    <div id="links">

  <a href="https://github.com/realsnipc" target="_blank"className="link"><iconify-icon icon="line-md:github-loop" className="icon"  height='1.5em' style={{color:'white'}}></iconify-icon></a>

  <a href="https://linkedin.com/in/realshaurya" target="_blank"className="link"  id="linkedin" ><iconify-icon icon="ri:linkedin-fill" height='1.5em'style={{color:'white'}}></iconify-icon></a>
</div>
</div>

{/* image container */}
<div className="img">
  <img src="./public/snipc_nobg.png" alt="" />
</div>


</div>


<div className="pages1">
  
  <div id="first" className='page'><h3>Repositories</h3> <p>View my GitHub repositories and have a look of my projects and configs!</p></div>
  <div id="second" className='page'><h3>Anime</h3> <p>I love anime and here's some cool anime I'm watching right now.</p></div>
</div>
<div className="pages2">
  <div id="third" className='page'><h3>Donate</h3> <p>View my GitHub repositories and have a look of my projects and configs!</p></div>
  <div id="fourth" className='page'><h3>Contact</h3> <p>Wanna Chitchat? Need some help? Or just wanna say hey? React me out.</p></div>
</div>

</>
  )
}

export default Hero
