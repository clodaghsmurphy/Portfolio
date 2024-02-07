import React from "react";
import { useLayoutEffect } from "react";

import avatar from "../media/avatar-purple.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import IconScroller from "../components/IconScroller";


function About() {

  return (
    <div className="section" id="about">
        <div className="container">
            <motion.div 
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={'show'}
            className="text">
                <h1 className='header-title'>About</h1>
                <motion.p
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}>
                      Orginally from a background in marketing, in 2021 I decided to make a career change and become a fullstack developer by enrolling in <a href='https://42.fr/'>École 42</a> in Paris. 
                    I'm passionate about using effective design and problem solving to create user-friendly experiences. I'm currently based in Paris and I'm open to new opportunities. 
                </motion.p>
                <div className="icon-container"
                >
                    <IconScroller />
                </div>
               
            </motion.div>
            <motion.div 
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            className="image">
                <img src={avatar} alt="avatar" />
            </motion.div>
        </div>
    </div>
  );
}

export default About;
