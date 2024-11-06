import "../css/Home.css";
import avatar from "../media/avatar.png";
import React from "react";
import pinkBall from "../media/pink-ball.svg";
import { useLayoutEffect, useRef } from "react";
import blueBall from "../media/blue-ball.svg";
import TypeWriter from "../utils/TypeWriter";


const TypeWriterConfigs = {
    strings : ['Developer', 'Designer', 'Dog lover'],
    speed : 100
}

function Home() {
    
	return (
        <div>
    <div className="home-section">
        <div className="home-container">


            {/* <div className="left-column">
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
            </div> */}
        </div>
            
            <img src={pinkBall} alt="bg-blur" className="bg-blur" />
    </div>
    <img className="blue-ball-home" src={blueBall}  alt="blue-ball-home" />
    <img className="pink-ball-home" src={pinkBall}  alt="pink-ball-home" />
    </div>
  );
}

export default Home;