import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import avatar from '../media/avatar.png';

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
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className="text">
                    <h1 className='text-gradient'>Work</h1>
                    <h3>Originally form a a background in marketing I'm a fullstack dveloper with almost a year of experience</h3>
                    <div className="image">
                        <img src={avatar} alt="avatar" />
                    </div>
                </motion.div>
                <div className="experience">
                    <div className="experience-container">
                        {experience.map((item, index) => (
                            <motion.div 
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
                            className="experience-item" key={index}>
                                <h3 className='experience-title'>{item.name}</h3>
                                <h4>{item.jobTitle}</h4>
                                <p>{item.dateStart} - {item.dateEnd}</p>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;