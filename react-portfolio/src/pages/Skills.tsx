import { useLayoutEffect, useRef } from "react";
import blueBall from "../media/blue-ball.svg";


function Skill() {
    const skillsList = useRef<HTMLUListElement | null>(null);
    useLayoutEffect(() => {
    
       
     });
     
     const Frontend = [
         { src: 'logos/html.svg', alt: 'html logo', text: 'HTML' },
        { src: 'logos/css.svg', alt: 'css logo', text: 'CSS' },
        { src: 'logos/sass.svg', alt: 'sass logo', text: 'Sass' },
        { src: 'logos/javascript.svg', alt: 'javascript logo', text: 'JavaScript' },
        { src: 'logos/typescript.svg', alt: 'typescript logo', text: 'Typescript' },
        { src: 'logos/react.svg', alt: 'react logo', text: 'React' }
    ]
    const backend = [
        { src: 'logos/php.svg', alt: 'php logo', text: 'PHP' },
        { src: 'logos/nodejs.svg', alt: 'nodejs logo', text: 'NodeJs' },
        { src: 'logos/python.svg', alt: 'python logo', text: 'Python' },
        { src: 'logos/c++.svg', alt: 'c++ logo', text: 'C++' },
        { src: 'logos/c.svg', alt: 'c logo', text: 'C' }
    ]
    const devops = [
        { src: 'logos/github.svg', alt: 'github logo', text: 'Github' },
        { src: 'logos/docker.svg', alt: 'docker logo', text: 'Docker' }
    ]

    const skills = [
        {
            'skill': 'Frontend',
            'content': Frontend
        },
        {
            'skill': 'Backend',
            'content': backend
        },
        {
            'skill': 'Devops',
            'content': devops
        }
    ]


    return (
        <div className="skills-section">
            <h1 className="skills-header"> My Expertise</h1>
            <ul className="card-container" ref={skillsList}>
                {
                    skills.map((skill, index) => {
                        return <ul className={`card-${index + 1}`} key={index}>
                            <h2>{skill.skill}</h2>
                            {skill.content.map((item, index) => {
                                return (
                                <li key={index}>
                                    <img className="logo" src={item.src} alt={item.alt} />{item.text}
                                </li>
                                )
                            })
                        }
                            </ul>
                    })
                }
        
                {/* <li className="card-1">
                    <div className="icon-header">
                        <img src={codeIcon} alt="code-icon" />
                    </div>
                    <h2>Frontend</h2>
                    <ul>
                        <li><img className="logo" src={html} alt="html loog"/>HTML</li>
                        <li><img className="logo" src={css} alt="css logo" />CSS</li>
                        <li><img className="logo" src={sass} alt="sass logo" />Sass</li>
                        <li><img className="logo" src={js} alt="javascript logo" />JavaScript</li>
                        <li><img className="logo" src={typescript} alt="typescript logo" />Typescript</li>
                        <li><img className="logo" src={react} alt="react logo" />React</li>
                    </ul>
                </li>
                <li className="card-2">
                    <div className="icon-header">
                        <img src={database} alt="code-icon" />
                    </div>
                    <h2>Backend</h2>
                    <ul>
                        <li><img className="logo" src={php} alt="php logo" />PHP</li>
                        <li><img className="logo" src={nodejs} alt="nodejs logo" />NodeJs</li>
                        <li><img className="logo" src={python} alt="python logo" />Python</li>
                        <li><img className="logo" src={cpp} alt="c++ logo" />C++</li>
                        <li><img className="logo" src={c} alt="c logo" />C</li>
                    </ul>
                </li>
                <li className="card-3">
                    <div className="icon-header">
                        <img src={settings} alt="code-icon" />
                    </div>
                    <h2>Devops</h2>
                    <ul>
                        <li><img className="logo" src={github} alt="github logo" />Github</li>
                        <li><img className="logo" src={docker} alt="docker logo" />Docker</li>
                    </ul>
                </li> */}
            </ul>
            <img src={blueBall} alt="blue-ball" className="blue-ball" />
        </div>
    );
}

export default Skill;