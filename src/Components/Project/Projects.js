import React from 'react';
import './Project.css';
import ewallet from'../image/projec.png';
import myportfolio from '../image/myportfolio.png';
import portfoliolink from '../image/External_link_image.png';
import devprofile from '../image/developerprofile.png';
import ResturantLandingPage from '../image/ResturantLandingPage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Projects() {
  return (
    <div className="project-container">
      <h1 className="title-heading">Projects</h1>
      
      <div className="project-cards">
        <div className="project-card">
          <img className="project-image" src={ewallet} alt="project" />
          <h3 className="title">E-wallet app</h3>
          <p>
            E-wallet is a web app that allows users to send and receive money from their friends and family.
          </p>

          <div className="links-container">
            <a href="https://github.com/Enecode/e-wallet-frontend" target="_blank" rel="noopener noreferrer" className="github-Icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>


        <div className="project-card">
          <img className="project-image" src={myportfolio} alt="project" />
          <h3 className="title">Personal portfolio site</h3>
          <p className="project-description">
            This is my personal portfolio site. It contains my bio, projects and contact information. 
          </p>

          <div className="links-container">
            <a href="https://github.com/Enecode/personal-portfolio" target="_blank" rel="noopener noreferrer" className="github-Icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          
            <a className="external-link" href="https://guileless-gecko-f29fb6.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="external-image" src={portfoliolink} alt="Jacob-Isah-portfolio" />
            </a>
          </div>
        </div>


        <div className="project-card">
          <img className="project-image" src={devprofile} alt="project" />
          <h3 className="title">Developer's Profile</h3>
          <p className="project-description">
            The web app shall provide a platform for companies seeking interns, full-time employees, or contract developers to view and access developers' profiles.
          </p>

          <div className="links-container">
            <a href="https://github.com/Enecode/developer-s-profile" target="_blank" rel="noopener noreferrer" className="github-Icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>


        <div className="project-card">
          <img className="project-image" src={ResturantLandingPage} alt="project" />
          <h3 className="title">Chicken Restaurant Landing Page</h3>
          <p className="project-description">
            Chicken Restaurant Landing Page built with pure HTML and CSS.
          </p>

          <div className="links-container">
            <a href="https://github.com/Enecode/chicken-restaurant-landing-page/" target="_blank" rel="noopener noreferrer" className="github-Icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          
            <a className="external-link" href="https://chicken-restaurant-landing-page.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="external-image" src={portfoliolink} alt="Jacob-Isah-portfolio" />
            </a>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default Projects;
