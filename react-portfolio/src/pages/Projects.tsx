import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
const projects = [
    {
        title : 'Transcendence',
        description : 'My first fullstack project as a part of my studies at École 42. \
        In a team of 4, our mission was to create a website in which students could log in using the schools OAuth2 API  \
        and challenge their friends to a game of pong. The site also contained an integrated chatroom in which users could create roles and groups',
        stack: [
            'React',
            'Node.js',
            'NestJS',
            'PostgreSQL',
            'Prisma'
        ],
        img: 'assets/pong.png',
        alt: 'pong protoype',
        link: 'https://github.com/clodaghsmurphy/ft_transcendence'
    },
    {
        title: 'LVMH x Data x Design x Tech Academy',
        description: 'As a part of the LVMH x Data x Design x Tech Academy organised by Haigo, I colloborated students from HEC and Strate to create a web application for LVMH to improve their in store customer experience.  Our solution? A virtual queue system for Louis Vuitton customers to offer them tailored luxury experiences in the area calculated from their estimated waiting time. We managed to design and code our prototype in under a week using React and Tailwind. ',
        stack: [
        'React',
        'Tailwind',
        ],
        img: 'assets/lvmh.png',
        alt: 'lvmh protoype',
        link: 'https://github.com/WalterLuong/LVMHx42'
    }
]


const Projects: React.FC = () => {
  return (
    <div id='projects' className='section'>
        <h1>My Projects</h1>
        {projects.map((project, index) => {
            return (
                <div className="container" key={index}>
                    <motion.div
                        initial="hidden"
                        whileInView={'show'}
                        variants={fadeIn('right', 0.1)}
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
                                <a href={project.link} className="btn">View Source Code</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView={'show'}
                        variants={fadeIn('left', 0.1)}
                        className="right-column">
                        <div className="img-container">
                            <div className="image">
                                <img src={project.img} alt={project.alt} />
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
