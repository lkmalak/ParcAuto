import React from 'react';
import './Home.css'; // Create a CSS file for styling

const Home = () => {
  return (
  <div>
    <img src={parcAutoImage} alt="ParcAuto" className="home-image" />
   <div className="textWrapper">
      <h1 className="title">ParcAuto</h1>
      <p className="description">Bienvenue dans notre application de gestion de parc automobile. Simplifiez la gestion de vos véhicules et stocks.</p>
  </div>
      <div className="home-buttons">
        <Link to="/login" className="btn">Se connecter</Link> 
      </div>
      
    </div>
  );
};

export default Home;
