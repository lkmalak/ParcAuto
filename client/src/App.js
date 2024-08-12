import Home from 'Home';
import Header from 'Header';
 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;
import AddUser from './addUser';
import Login from './login';
import Gestion from './Gestion_user';
import Stock from './Stock';
import ParcAuto from './ParcAuto';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
          <Route path="/addUser" element={<AddUser/>} />
          <Route path="/gestion" element={<Gestion/>} />
      </Routes>
    </Router>
  );
}



export default App;