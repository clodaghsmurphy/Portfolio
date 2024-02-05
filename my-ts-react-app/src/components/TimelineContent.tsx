import React from "react";
import { FaCode } from 'react-icons/fa';
import { MdAutoGraph } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

interface TimelineContentProps {
        skills?: string[];
        title: string;
        company: string;
        type: string;
        companyLink: string;
        description: string;
}

const TimelineContent = (props: TimelineContentProps) => {
    return (
        <>
            <motion.li
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="content-left">
                    <div className="timeline-bubble">
                        <div className={props.type === 'work' ?  'bubble-work': 'bubble-education'}>
                            {props.type === 'work' ? <FaCode /> : <MdAutoGraph />}
                        </div>
                    </div>
                    <div className="timeline-text">
                        <div className='timeline-title'>{props.title}</div>
                        <a className='company-link label' href={props.companyLink}>{props.company}</a>
                        <p className="job-description">
                            {props.description}
                        </p>
                        <ul className='timeline-description'>
                            {props.skills?.map((skill, index) => {
                                return (
                                    <li className='label' key={index}>{skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </motion.li>
        </>
    )
}

export default TimelineContent;