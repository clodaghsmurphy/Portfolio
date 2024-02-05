import React from 'react';
import TimelineContent from './TimelineContent';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const ExperienceTimeline = () => {
    const experience = [
        {
            year: 'May 2023 - Jan 2024',
            items: [
                {
                    title: 'Fullstack Developer',
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
                // {
                //     title: ' Digital Technologies Architect',
                //     company: 'École 42',
                //     companyLink: 'https://42.fr',
                //     type: 'eduucation',
                //     skills: [
                //         'C',
                //         'C++',
                //         'React',
                //         'NodeJs',
                //     ]
                // }
              

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
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
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