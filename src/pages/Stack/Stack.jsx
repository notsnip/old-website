import React from 'react';
import './Stack.css';
import { useEffect } from 'react';
import { themeChange } from 'theme-change'


function Stack() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    return (
        <>
            <title>stack | snipc</title>
            <div id="hero_text">
                <h2 className='text_hero_text'>Stack</h2>
                <p className='text_hero_text'>Discover the apps and tools that power my productivity, creativity, and everyday life.
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
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="simple-icons:express" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Express.js</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-tailwind" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Tailwind CSS</span>
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
                        <span className="tech-card-desc">Render</span>
                    </div>
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="bi:github" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Github</span>
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
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="vscode-icons:file-type-mongo" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">MongoDB</span>
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
                    <span className="technologies-text tech-sub">APPS ( <iconify-icon icon="cib:zorin"></iconify-icon>)</span>
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
                            <iconify-icon icon="logos:discord-icon" height='1.25rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Discord</span>
                    </div>

                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="devicon:canva" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Canva</span>
                    </div>
                    {/* 
                    <div className="technologies-card">
                        <div className="tech-card-display">
                            <iconify-icon icon="devicon-plain:notion" height='1.5rem'></iconify-icon>
                        </div>
                        <span className="tech-card-desc">Notion</span>
                    </div> */}


                    {/* Template to add more item  */}
                    {/* <div className="technologies-card">
                <div className="tech-card-display">
                <iconify-icon icon="vscode-icons:file-type-html" height='1.5rem'></iconify-icon>
                </div>
                <span className="tech-card-desc">Adobe</span>
            </div> */}
                    <p className='text_hero_text stack_note'>P.S: this awesome section uses a code snippet from <a href="https://wounds.rip/">neksio</a></p>

                </div>

            </div>

        </>
    );
}

export default Stack;