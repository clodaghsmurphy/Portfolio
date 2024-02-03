import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboard2Data, BsChatSquare, BsBriefcase } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Nav() {
    return (
      
        <nav className='nav'>
            <svg style={{width: 0, height: 0}}>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#30dbc6' }} />
                    <stop offset="50%" style={{ stopColor: '#2ba2f7' }} />
                    <stop offset="100%" style={{ stopColor: '#6b66fc' }} />
                </linearGradient>
            </svg>
            <div className='nav-container'>
                <Link to='home' className='link ' 
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}>
                    <BiHomeAlt style={{strokeWidth: 1}}/>
                </Link>
                <Link to='about' className='link'
                activeClass='active'
                smooth={true}
                spy={true}>
                    <BiUser  />
                </Link >
                <Link to='test' className='link'
                    activeClass='active'
                    smooth={true}
                    spy={true}>
                    <BsClipboard2Data  />
                </Link >
                <Link to='work' className='link'
                    activeClass='active'
                    smooth={true}
                    spy={true}>
                    <BsBriefcase  />
                </Link >
                <Link to='contact' className='link'
                    activeClass='active'
                    smooth={true}
                    spy={true}>
                    <BsChatSquare  />
                </Link >
            </div>
        </nav>
    )
}

export default Nav;