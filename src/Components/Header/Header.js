import { Link } from 'react-router-dom'
import './Header.css'
import '../../dark-mode.css'
import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="nav-container">
      <button className="home">
        <Link className="home" to="/">
          Jacob Isah
        </Link>
      </button>
      
      <div className="content-container">
      <button className="article">
          <Link className="article" to="/article">
            Article
          </Link>
        </button>
        
        <button className="projects">
          <Link className="projects" to="/project">
            Projects
          </Link>
        </button>

        <button className="youtube">
          <Link className="youtube" to="/youtube">
            Youtube
          </Link>
        </button>
        <button className="darkmood" onClick={toggleDarkMode}>darkMode</button>
      </div>
    </div>
  );
}

export default Header;