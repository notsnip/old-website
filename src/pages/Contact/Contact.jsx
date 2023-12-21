import React from 'react'
import './Contact.css'
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useEffect } from 'react';
import { themeChange } from 'theme-change'


function Contact() {useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
    return (
        <FadeIn delay={600}>
            <title>Contact - snipc</title>
            <div id="hero_text">
                <h2 className='text_hero_text'>Contact</h2>
                <p className='text_hero_text'>If you have any questions, Reach out to me.
                </p>
            </div>


            <div id="contact_methods">


                <a href="https://dsc.gg/devsh" target='_blank'>
                    {/* discord card  */}
                    <div className="contact_card">
                        <iconify-icon icon="ri:discord-fill" height='2.5rem' style={{ paddingLeft: '10px'
                        ,color: 'var(--text-white)'}}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>Discord</h2>
                            <p>@snipc</p>
                        </div>
                    </div>
                </a>
                <a href="https://linkedin.com/in/realshaurya" target='_blank'>
                    {/* linkedin card  */}
                    <div className="contact_card">
                        <div className="icon_mobile">
                        <iconify-icon icon="ri:linkedin-fill" height='2.5rem' style={{ paddingLeft: '10px',color: 'var(--text-white)' }} className='icon_mobile'></iconify-icon>
                        </div>
                        <div className="contact_card_content">

                            <h2>LinkedIn</h2>
                            <p>@realshaurya</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/realsnipc" target='_blank'>
                    {/* Github card   */}
                    <div className="contact_card">
                        <iconify-icon icon="ri:github-line" height='2.5rem' style={{ paddingLeft: '10px',color: 'var(--text-white)' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>Github</h2>
                            <p>@realsnipc</p>
                        </div>
                    </div>
                </a>

                <a href="mailto:hello@snipc.me" target='_blank'>
                    {/* Mail card   */}
                    <div className="contact_card">
                        <iconify-icon icon="iconoir:mail" height='2.5rem' style={{ paddingLeft: '10px',color: 'var(--text-white)' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>Mail</h2>
                            <p>m@snipc.me</p>
                        </div>
                    </div>
                </a>

                {/* <a href="https://myanimelist.net/profile/snipc" target='_blank'>
                    <div className="contact_card">
                        <iconify-icon icon="simple-icons:myanimelist" height='2.5rem' style={{ paddingLeft: '10px' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>M.A.L</h2>
                            <p>@snipc</p>
                        </div>
                    </div>
                </a> */}
            </div>
        </FadeIn>
    )
}

export default Contact