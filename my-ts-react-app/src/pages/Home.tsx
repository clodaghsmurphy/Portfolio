import "../css/Home.css";
import avatar from "../media/avatar.png";
import React from "react";
import pinkBall from "../media/pink-ball.svg";
import { useLayoutEffect, useRef } from "react";
import blueBall from "../media/blue-ball.svg";
import TypeWriter from "../utils/TypeWriter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TypeWriterConfigs = {
    strings : ['Developer', 'Designer', 'Dog lover'],
    speed : 100
}

function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const pinkRef = useRef<HTMLImageElement | null>(null);
    const blueRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {
       const pinkBall = pinkRef.current;
       const blueBall = blueRef.current;

       const tlHome = gsap.timeline({
           scrollTrigger: {
               trigger: '.home-section',
               start: "top top",
               end: "+=500",
               scrub: true,
           },
         });
         tlHome.to('.home-section', {
                opacity: 0,
            })
       const tl = gsap.timeline({
        scrollTrigger: {
            trigger: pinkBall,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
       });
        tl.to(pinkBall, {
            top: '0px',
            duration: 5,
          })
          .to(pinkBall, {
            right: '50%',
            duration: 3,
            })
          .to(pinkBall, {
            scale: 1.3,
            duration: 3,
            })
          

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: blueBall,
                start: "180vh 0px",
                end: "bottom top",
                scrub: true,
            },
        });
        tl2.to(blueBall, {
            top: '130%',
            duration: 5,
        })
        .to(blueBall, {
            right: '50%',
            duration: 3,
        })
        .to(blueBall, {
            scale: 1.1,
            duration: 3,
            })

        
    });

	return (
        <div>
    <div className="home-section">
        <div className="home-container">
            <div className="left-column">
                <div className="description">
                    <h1>I'm a <TypeWriter {...TypeWriterConfigs} /></h1>
                    <p>Hi I'm Clodagh ! I'm a fullstack developer based in Paris.
                        I'm passionate about using effective design and problem soliving to create 
                        user-friendly experiences</p>
                    <button className="cta">Download CV</button>
                </div>
            </div>
            <div className="right-column">
                    <div className="avatar-container">
                        <img src={avatar}	alt="avatar" className="avatar"/>
                    </div>
            </div>
        </div>
            
            <img src={pinkBall} alt="bg-blur" className="bg-blur" />
    </div>
    <img className="blue-ball-home" src={blueBall} ref={blueRef} alt="blue-ball-home" />
    <img className="pink-ball-home" src={pinkBall} ref={pinkRef} alt="pink-ball-home" />
    </div>
  );
}

export default Home;