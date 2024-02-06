import React from 'react';
import avatar from '../media/avatar.png';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation} from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import Spline from '@splinetool/react-spline';
import Three from '../components/Three';


function Banner() {
    return (
        <div className='section' id='home'>
            <div className="container">
                <Three />
                <div className='title'>Hello, I'm Clodagh, a creative fullstack developer</div>
            </div>   
        </div>
    )
}

export default Banner;