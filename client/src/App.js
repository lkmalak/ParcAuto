import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from 'Home';
import Login from 'Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* < Route exact path="/" element={<Home />} /> */}
          <Route path="Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
