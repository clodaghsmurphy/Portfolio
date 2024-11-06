import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import avatar from '../media/avatar.png';
import ExperienceTimeline from '../components/ExperienceTimeline';

function Work() {

    return (
        <div className='section' id='work'> 
            <div className="container">
                <motion.div 
                variants={fadeIn('right', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.1}}
                className="text">
                    <h1 >Experience</h1>
                    <h3>With a degree in Languages and a masters in Global Business form UCD, I started my career in the food industry in marketing. 
                         In 2021 I enrolled in Ecole 42 in Paris to become a fullstack developer. 
                         Since then I've been able to gain experience in the domaine discovering my passion for coding and design.
                         </h3>
                </motion.div>
                <div className="experience">
                    <ExperienceTimeline />
                </div>
            </div>
        </div>
    )
}

export default Work;