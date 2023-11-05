import "../css/Home.css";
import avatar from "../media/avatar.png"
import pinkBall from "../media/pink-ball.svg";
import blueBall from "../media/blue-ball.svg";


function Home() {
	  return (
    <div className="home-section">
        <div className="home-container">
            <div className="left-column">
               
                <div className="description">
                    <h1>Full stack developer</h1>
                </div>
            </div>
            <div className="right-column">
                <img src={pinkBall} alt="pink-ball" className="pink-ball" />
                <img src={blueBall} alt="blue-ball" className="blue-ball" />
                <div className="avatar-container">
                    <img src={avatar}	alt="avatar" className="avatar"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;