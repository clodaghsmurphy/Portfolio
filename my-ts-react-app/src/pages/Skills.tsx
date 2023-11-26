import React from "react";
import { useLayoutEffect, useRef } from "react";
import blueBall from "../media/blue-ball.svg";
import codeIcon from "../media/code.svg";
import html from "../media/html.svg";
import css from "../media/css.svg";
import js from "../media/javascript.svg";
import typescript from "../media/typescript.svg";
import c from "../media/c.svg";
import cpp from "../media/c++.svg";
import python from "../media/python.svg";
import php from "../media/php.svg";
import nodejs from "../media/nodejs.svg";
import sass from "../media/sass.svg";
import react from "../media/react.svg";
import database from "../media/database.svg";
import settings from "../media/settings.svg";
import github from "../media/github.svg";
import docker from "../media/docker.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skill() {
    const skillsList = useRef<HTMLUListElement | null>(null);
    useLayoutEffect(() => {
    const anim = gsap.fromTo('.skills-section', { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
        trigger: '.skills-section',
        start: '30% bottom',
        end: 'center 30%',
        animation: anim,
        scrub: true,
     });
    });

    return (
        <div className="skills-section">
            <h1> My Expertise</h1>
            <ul className="card-container" ref={skillsList}>
                <li className="card">
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
                <li className="card">
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
                <li className="card">
                    <div className="icon-header">
                        <img src={settings} alt="code-icon" />
                    </div>
                    <h2>Devops</h2>
                    <ul>
                        <li><img className="logo" src={github} alt="github logo" />Github</li>
                        <li><img className="logo" src={docker} alt="docker logo" />Docker</li>
                    </ul>
                </li>
            </ul>
            <img src={blueBall} alt="blue-ball" className="blue-ball" />
        </div>
    );
}

export default Skill;