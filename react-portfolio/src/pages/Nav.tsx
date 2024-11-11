
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Nav() {
    return (
      
        <nav className='nav'>
            <div className='nav-container'>
                <a href='https://github.com/clodaghsmurphy'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/clodaghsmurphy/'>
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    )
}

export default Nav;