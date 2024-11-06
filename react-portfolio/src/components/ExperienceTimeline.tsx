import React from 'react';
import TimelineContent from './TimelineContent';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const ExperienceTimeline = () => {
    const experience = [
        {
            year: 'February 2024 - Present',
            items: [
                {
                    title: 'Fullstack Developer React/NodeJS',
                    company: 'Trace For Good',
                    companyLink: 'https://www.traceforgood.com/',
                    type: 'work',
                    skills: [
                        'React',
                        'NodeJs',
                        'Postgres SQL',
                        'Typescript',
                        'Google Cloud',
                        'Storybook',
                        'Docker'
                    ],
                    description: 'This was my first full-stack position working with React, TypeScript, Node.js, and Google Cloud. During my time here, I undertook projects such as designing and implementing new admin features, optimizing the platform for better performance, and establishing a design system using Storybook for a consistent UI/UX. This role allowed me to gain valuable experience in building scalable, user-focused solutions in a fast-paced startup environment.',
                },
            ]
        },
        {
            year: 'May 2023 - Jan 2024',
            items: [
                {
                    title: 'Fullstack Developer PHP/Prestashop',
                    company: 'Certideal',
                    companyLink: 'https://www.certideal.com/',
                    type: 'work',
                    skills: [
                        'Sass',
                        'PHP',
                        'SQL',
                        'Jquery',
                    ],
                    description: 'This was my first fullstack position working PHP, SQL, Sass and Jquery with the framework Prestashop.During my time here I had the opportunity to undertake projects such as designing and localising their website for the Irish market, creating a new accessory cross selling module, integrating Apple sso and more. ',
                },
            ]
        }, 
        {
            year: '2019 - 2021',
            items: [
               
                {
                    title: 'Assistant Marketing Executive France, Belgium & Luxembourg',
                    company: 'Bord Bia',
                    companyLink: 'https://www.bordbia.ie/',
                    type: 'marketing',
                    skills: [
                        'Marketing',
                        'Sales',
                        'Communication'
                    ],
                    description: 'My first professional experience was in marketing working for the Irish Food Board marketing meat exports to France, Belgium and Luxembourg. Here I was able to gain experience in both operational and digital marketing and gain an in-depth understanding of the food industry.',
                },
            ]
        },
        
    ]
    return (
        <div className='experience-timeline'>
            <div className="timeline-container">
                <div className='timeline'>
                    {experience.map((item, index) => {
                        return (
                            <motion.div 
                            variants={fadeIn('up', 0.1)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.1}}
                            className='timeline-item'>
                                <div className='timeline-left'>
                                    <div className='timeline-year'>{item.year}</div>
                                </div>
                                <div className='timeline-right'>
                                    <ul className='timeline-content'>
                                {item.items.map((item, index) => {
                                    return (
                                         <TimelineContent {...item} /> 

                                    )
                                })}
                                </ul>
                                </div>

                            </motion.div>
                        )
                    })}
                        
                       
                    </div>
            </div>
        </div>
    );
}

export default ExperienceTimeline;