import "../css/Home.css";
import avatar from "../media/avatar.png"
import pinkBall from "../media/pink-ball.svg";
import blueBall from "../media/blue-ball.svg";
import TypeWriter from "../utils/TypeWriter";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion"

const TypeWriterConfigs = {
    strings : ['Developer', 'Designer', 'Dog lover'],
    speed : 100
}

function Home() {
    // const { scrollYProgress } = useViewportScroll()
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    // return (
    //     <motion.div
    //         style={{ scale }}
    //     >
    //         <motion.div
    //             style={{
    //                 scaleY: scrollYProgress
    //             }}
    //         />
    //     </motion.div>
    // )
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
            <img className="blue-ball" src={blueBall} alt="blue-ball" />
            <img className="pink-ball" src={pinkBall} alt="pink-ball" />
            <img src={pinkBall} alt="bg-blur" className="bg-blur" />
    </div>
  );
}

export default Home;