import React, { useState, useEffect } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'
import  '../../dark-mode.css'
import darkmodeimage from '../image/darkmodeimage.jpg'

function Header (){
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`nav ${darkMode ? 'dark-mode' : ''}`}>
      <div className="left">
        <a href="/">Home</a>
      </div>
      <div className={`right ${showMenu ? 'show' : ''}`}>

        <a href="/article">
          <Link className="registration-text" to='/article' >Article</Link>
        </a>
        <a href="/project">
          <Link to='/project'> Project </Link>
        </a>
        <a href="/youtube">
          <Link to='/youtube'> Youtube</Link>
        </a>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <i className={`fas fa-bars ${showMenu ? 'open' : ''}`}></i>
        Menu
      </div>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        <img src={darkmodeimage} alt="Dark Mode Toggle" />
      </div>
    </div>
  );
};

export default Header;