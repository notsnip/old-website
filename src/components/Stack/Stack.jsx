import React from 'react'
import './Stack.css'
import FadeIn from 'react-fade-in/lib/FadeIn';
import ScrollToTop from 'react-scroll-up';

function Stack() {
    return (
        <FadeIn delay={600}>
            <div id="hero_text">
                <h2 className='text_hero_text'>Stack</h2>
                <p className='text_hero_text'>From games to design tools, I use a variety of software to make things epic.
                    <br />
                    (This list mentions almost every app I use, not just development tools.)


                </p>
            </div>


            <div className="technologies-container">
                <div className="tech-cont">
                    <br />
                    <br />
                    <br />
                    <span className="technologies-text tech-sub">DEVELOPMENT</span>
                </div>
                <div className="container2">

                    <div className="technologies-card">
                        <div className="tech-card-display"><iconify-icon icon="vscode-icons:file-type-html" height='1.5rem'></iconify-icon></div>
                        <span className="tech-card-desc">HTML</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-css" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">CSS</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-js" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">JavaScript</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:react" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">React.js</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:python" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Python</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-node" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Node.js</span>
                    </div>

                </div>

                <div className="app-container">
                    <span className="technologies-text tech-sub">SERVICES</span>
                </div>
                <div className="container2">

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:prerender-icon" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Render.com</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="bi:github" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Git/Github</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="arcticons:iconify" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Iconify</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="arcticons:proton-mail" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Proton Mail</span>
                    </div>
                    {/* Template to add more item  */}
                    {/* <div className="technologies-card">
                <div className="tech-card-display">
                <iconify-icon icon="vscode-icons:file-type-html" height='1.5rem'></iconify-icon>
                </div>
                <span className="tech-card-desc">Adobe</span>
            </div> */}

                </div>

                <div className="app-container">
                    <span className="technologies-text tech-sub">DESKTOP APPS (<iconify-icon icon="fa6-brands:fedora"></iconify-icon>)</span>
                </div>
                <div className="container2">

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-vscode" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">VS Code</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:figma" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Figma</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:chrome" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Chrome</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:discord-icon" height='1.3rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Discord</span>
                    </div>


                    {/* Template to add more item  */}
                    {/* <div className="technologies-card">
                <div className="tech-card-display">
                <iconify-icon icon="vscode-icons:file-type-html" height='1.5rem'></iconify-icon>
                </div>
                <span className="tech-card-desc">Adobe</span>
            </div> */}
                   
                </div>

                <div className="app-container">
                    <span className="technologies-text tech-sub">MOBILE APPS (<iconify-icon icon="uil:android"></iconify-icon>)</span>
                </div>
                <div className="container2">

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="openmoji:discord" height='1.9rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Discord</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="skill-icons:linkedin" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Linkedin</span>
                    </div>


                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="logos:spotify-icon" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Spotify</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="arcticons:anime-slayer" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Dantotsu</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="simple-icons:roadmapdotsh" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Roadmap.sh</span>
                    </div>

                    {/* Template to add more item  */}
                    {/* <div className="technologies-card">
                <div className="tech-card-display">
                <iconify-icon icon="vscode-icons:file-type-html" height='1.5rem'></iconify-icon>
                </div>
                <span className="tech-card-desc">Adobe</span>
            </div> */}
                </div>
            </div>
            <p className='text_hero_text stack_note'>(this awesome section uses a code snippet from <a href="https://wounds.rip/">neksio</a>)


</p>
            {/* scroll to top button  */}
            <ScrollToTop showUnder={160}>
                <div id="scroll_to_top">
                    <iconify-icon icon="ep:top" height='1.3rem'></iconify-icon>
                </div>
            </ScrollToTop>

        </FadeIn>
    )
}

export default Stack