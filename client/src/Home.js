import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import wilaya from 'wilaya.png';  // Importez votre image

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>ParcAuto</h1>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/services">Services</a>
          <a href="/about">A propos</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="welcome-section">
          <img src={wilaya.jpg} alt="img" className="logo" />  {/* Ajoutez l'image ici */}
          <h2>ParcAuto</h2>
          <p>Bienvenue dans notre application de gestion de parc automobile. Simplifiez la gestion de vos véhicules et stocks.</p>
          <button onClick={handleLoginClick}>Se connecter</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
