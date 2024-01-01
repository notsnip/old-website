import {React,useEffect} from 'react';
import './Work.css'
import { themeChange } from 'theme-change'


// projects images 

import old_snipc from './img/old_snipc.png'
import snipc_me from './img/snipc_me.jpeg'
import tribute_to_steve from './img/tribute_to_steve.png'
import sni_blog from './img/sni_blog.jpg'




function Work() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
 <>
 <meta name="description" content="Projects I (Shaurya) have made and I'm working on."/>
 <title>work | snipc</title>
 <div id="hero_text">
                <h2 className='text_hero_text fade-in'>Projects</h2>
                <p className='text_hero_text fade-in'>Projects I've worked on so far.
                </p>
            </div>

 <div id="repos_container fade-in">


{/* projects  */}

<div className="repo fade-in">
      <img src={sni_blog} alt=""/>
      <div id="info_text">
      <h2>Blog</h2>
      <p> My Blog for anything I want to share or write.</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/blog" target='_blank' className='project_link'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://blog.snipc.me" className='project_link'>
        <iconify-icon icon="uil:link" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>

<div className="repo right">
      <img src={old_snipc} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>Old Homepage</h2>
      <p> A single framed page with links to my socials. Used to be my homepage.</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/old.snipc" target='_blank' className='project_link'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://old.snipc.me" className='project_link'>
        <iconify-icon icon="uil:link" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>

    <div className="repo">
      <img src={tribute_to_steve} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>Tribute To Steve</h2>
      <p>Tribute to 'Steven Paul Jobs' to remember his revolutionary contributions to the world, I've created this website.</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/TributeToSteve/" target='_blank' className='project_link'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://realsnipc.github.io/TributeToSteve/" className='project_link'>
        <iconify-icon icon="uil:link" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>



    <div className="repo right">
      <img src={snipc_me} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>snipc</h2>
      <p> You are here, my personal website - built with React.js, Vite and a lot of &gt;3!</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/snipc.me" target='_blank' className='project_link'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://snipc.me" className='project_link'>
        <iconify-icon icon="uil:link" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div>
    </div>
   

{/* template for adding another project (use class 'right' for alternate items) */}
      {/* <div className="repo">
      <img src={tribute_to_steve} alt="" height='250px' width='500px'/>
      <div id="info_text">
      <h2>Tribute To Steve</h2>
      <p>Tribute to 'Steven Paul Jobs' to remember his revolutionary contributions to the world, I've created this website.</p>
      <p id='link'>
        <a href="https://github.com/realsnipc/TributeToSteve/" target='_blank' className='project_link'>
          <iconify-icon icon="mingcute:github-line" height='1.5em'></iconify-icon></a>
        <a href="https://realsnip.github.io/TributeToSteve/" className='project_link'>
        <iconify-icon icon="uil:link" height='1.5em'></iconify-icon>
        </a>
        </p>
      </div> */}
 </div>
 </>
  )
}

export default Work
