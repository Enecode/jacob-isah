import React from 'react';
import image from '../image/myimage.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons"; 
// import { Header } from '../Header/Header';
import './Home.css'

function Home() {

  return (
    <>
      <div className="home-containers">
            {/* <div className="about-containers"> */}
                <div className="about-containers">
                    <img className="myphoto" src={image} alt="Isah Jacob" />  
                    
                    <h3 className="header-title">
                        <strong >Jacob</strong>
                    </h3>
                
                    <div className="about-container-holder">
                        <strong className="about-me">FullStack Engineer</strong>            
                    </div>
                    <p className="about-paragraph">
                    I am an innovative software engineer committed to pushing the limits of technology to provide brilliant results for businesses of all sizes. Beyond my work, I'm similarly committed to helping other professionals and tech enthusiasts along their paths by sharing my expertise through technical writing, lesson development, and interesting YouTube material.
                    </p>
                    <div className="social-button">
                        <a href="https://www.linkedin.com/in/isahjacob">
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-Icon" size="2x" />
                        </a>
                        <a href="https://github.com/enecode" className="github-Icon">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/_jayky" className="twitter-Icon">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>

                        <a href="https://www.youtube.com/channel/UCvJ4J6Wb0mr0LEhhTmYoURQ" className="youtube-Icon">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>
                </div>
            {/* </div> */}
      </div>
        
    </>
  );
}

export default Home;
