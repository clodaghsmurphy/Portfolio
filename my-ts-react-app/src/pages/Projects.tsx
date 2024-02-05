import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import pong from '/pong.png';
import lvmh from '/lvmh.png';

const projects = [
    {
        title : 'Transcendence',
        description : 'My first fullstack project as a part of my studies at École 42. \
        In a team of 4, our mission was to create a website in which students could log in using the schools OAuth2 API  \
        and challenge their friends to a game of pong. The site also contained an integrated chatroom in which users could create roles and groups',
        stack: [
            'React',
            'Node.js',
            'Express',
            'MongoDB'
        ],
        img: 'assets/pong.png'
    },
    {
        title: 'LVMH x Data x Design x Tech Academy',
        description: 'My first fullstack project as a part of my studies at École 42. \
        In a team of 4, our mission was to create a website in which students could log in using the schools OAuth2 API  \
        and challenge their friends to a game of pong. The site also contained an integrated chatroom in which users could create roles and groups',
        stack: [
            'React',
        'Node.js',
        'Express',
        'MongoDB'
        ],
img: 'assets/lvmh.png'
    }
]


const Projects: React.FC = () => {
  return (
    <div id='projects' className='section'>
        {projects.map((project, index) => {
            return (
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView={'show'}
                        variants={fadeIn('right', 0.3)}
                        className="left-column">
                        <div className="left-text">
                            <div className="title">
                                <h2>{project.title}</h2>
                            </div>
                            <div className="description">
                                <p>{project.description}</p>
                            </div>
                        </div>
                        <div className="stack">
                            <ul>
                                {project.stack.map((tech, index) => {
                                    return <li className='label' key={index}>{tech}</li>
                                })}
                            </ul>
                            <div className="cta">
                                <button className="btn">View Project</button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView={'show'}
                        variants={fadeIn('left', 0.3)}
                        className="right-column">
                        <div className="img-container">
                            <div className="image">
                                <img src={project.img} alt="project" />
                            </div>
                        </div>

                    </motion.div>
                </div>
            )
        })}
    </div>
  );
};

export default Projects;
