import React from 'react';
import github from "../media/github.svg";
import linkedin from "../media/linkedin.svg";

function SocialIcons() {
    return (
        <ul className="social-icons">
            <li>
                <a href="https://github.com/clodaghsmurphy" > {/* Add 'https://' to the GitHub URL */ }
                    <img src = { github } alt = "github-icon" /> {/* Assuming 'github' is a variable */ }
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/clodaghsmurphy" > {/* Add 'https://' and 'in/' to the LinkedIn URL */ }
                    < img src = { linkedin } alt = "linkedin icon" /> {/* Assuming 'linkedin' is a variable */ }
                </a>
            </li>
        </ul>
  );
}

export default SocialIcons;