import "../css/Home.css";
import avatar from "../media/avatar.png"
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

       const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pinkBall,
                markers: true,
                start: "40% center",
                end: "bottom top",
                scrub: true,
            },
        });
        tl.to(pinkBall, {
            top: '0px',
            transform: 'translateY(-70%)',
          })
          .to(pinkBall, {
            scale: 1.5,
            duration: 1,
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: blueBall,
                start: "center center",
                end: "bottom top",
                scrub: true,
            },
            });
            tl2.to(blueBall, {
                bottom: '0px',
                left: '50%',
                transform: 'translate(-50%, 30%)',
            })
        });

	return (
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
            <img className="blue-ball" src={blueBall} ref={blueRef} alt="blue-ball" />
            <img className="pink-ball" src={pinkBall} ref={pinkRef} alt="pink-ball" />
            <img src={pinkBall} alt="bg-blur" className="bg-blur" />
    </div>
  );
}

export default Home;