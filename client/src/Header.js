import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ParcAuto</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        
      </nav>
    </header>
  );
};

export default Header;