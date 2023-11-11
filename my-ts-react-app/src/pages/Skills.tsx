import React from "react";
import blueBall from "../media/blue-ball.svg";


function Skill() {
    return (
        <div className="skills-section">
            <ul className="card-container">
                <li className="card">
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </li>
                <li className="card">
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </li>
                <li className="card">
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </li>
            </ul>
            <img src={blueBall} alt="blue-ball" className="blue-ball" />
        </div>
    );
}

export default Skill;