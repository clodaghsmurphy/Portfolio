import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import avatar from '../media/avatar.png';
import ExperienceTimeline from '../components/ExperienceTimeline';

function Work() {

    const experience = [
        {
            name: 'Certideal',
            dateStart: 'May 2023',
            dateEnd: 'December 2023',
            jobTitle: 'Fullstack Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie interdum blandit. Mauris urna urna, vulputate sed convallis vel, condimentum vel nisi. Morbi at dolor mollis, euismod massa ut, fermentum felis. Vestibulum vestibulum tempus sem in accumsan. Vivamus sed commodo purus. In velit eros, tristique in nibh vel, sodales posuere tortor. Donec euismod, mi sed efficitur aliquet, arcu erat tempor ligula, eu elementum augue metus non turpis. Maecenas quis eros rutrum, tempor arcu vitae, lobortis dui. Aenean efficitur eget leo non porta. Fusce viverra lobortis laoreet. Pellentesque efficitur pharetra sem at aliquam. Nam rhoncus consequat erat sed venenatis. Curabitur at molestie sapien, eu finibus neque.',
        },
        {
            name: 'Bord Bia',
            dateStart: 'May 2023',
            dateEnd: 'December 2023',
            jobTitle: 'Assistant Marketing Executive France, Belgium & Luxembourg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie interdum blandit. Mauris urna urna, vulputate sed convallis vel, condimentum vel nisi. Morbi at dolor mollis, euismod massa ut, fermentum felis. Vestibulum vestibulum tempus sem in accumsan. Vivamus sed commodo purus. In velit eros, tristique in nibh vel, sodales posuere tortor. Donec euismod, mi sed efficitur aliquet, arcu erat tempor ligula, eu elementum augue metus non turpis. Maecenas quis eros rutrum, tempor arcu vitae, lobortis dui. Aenean efficitur eget leo non porta. Fusce viverra lobortis laoreet. Pellentesque efficitur pharetra sem at aliquam. Nam rhoncus consequat erat sed venenatis. Curabitur at molestie sapien, eu finibus neque.',
        },
    ]
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