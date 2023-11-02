import React from 'react'
import './Contact.css'
import FadeIn from 'react-fade-in/lib/FadeIn';

function Contact() {
    return (
        <FadeIn delay={600}>
            <div id="hero_text">
                <h2 className='text_hero_text'>Contact</h2>
                <p className='text_hero_text'>Send me a message. Unless I'm busy, in that case it may take a little longer.
                    <br />
                    (But don't worry, I'll get back to you eventually!)
                </p>
            </div>


            <div id="contact_methods">


                <a href="https:/discord.com/users/1019641343875760350" target='_blank'>
                    {/* discord card  */}
                    <div className="contact_card">
                        <iconify-icon icon="logos:discord-icon" height='2rem' style={{ paddingLeft: '10px' }}></iconify-icon>
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
                        <iconify-icon icon="skill-icons:linkedin" height='2.5rem' style={{ paddingLeft: '10px' }} className='icon_mobile'></iconify-icon>
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
                        <iconify-icon icon="arcticons:github" height='2.5rem' style={{ paddingLeft: '10px' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>Github</h2>
                            <p>@realsnipc</p>
                        </div>
                    </div>
                </a>

                <a href="mailto:hello@snipc.me" target='_blank'>
                    {/* Mail card   */}
                    <div className="contact_card">
                        <iconify-icon icon="mdi:email-outline" height='2.5rem' style={{ paddingLeft: '10px' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>Mail</h2>
                            <p>m@snipc.me</p>
                        </div>
                    </div>
                </a>

                <a href="https://anilist.co/user/snipc/" target='_blank'>
                    {/* Mail card   */}
                    <div className="contact_card">
                        <iconify-icon icon="simple-icons:anilist" height='2.5rem' style={{ paddingLeft: '10px' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>A.L</h2>
                            <p>@snipc</p>
                        </div>
                    </div>
                </a>


                <a href="https://myanimelist.net/profile/snipc" target='_blank'>
                    {/* Mail card   */}
                    <div className="contact_card">
                        <iconify-icon icon="simple-icons:myanimelist" height='2.5rem' style={{ paddingLeft: '10px' }}></iconify-icon>
                        <div className="contact_card_content">

                            <h2>M.A.L</h2>
                            <p>@snipc</p>
                        </div>
                    </div>
                </a>
            </div>
        </FadeIn>
    )
}

export default Contact