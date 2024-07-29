// import React from 'react';
// import './Login.css';

// const Login = () => {
//   return (
//     <div className="login-container d-flex justify-content-center">
//       <div className="login-card bg-white">
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email">Email</label><br />
//             <input type="email" placeholder="Email" name="email" id="email" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">Mot de passe</label><br />
//             <input type="password" placeholder="Mot de passe" name="password" id="password" />
//           </div>
//           <p>Mot de passe oublié ?</p>
//           <button className="btn_btn_success">Se connecter</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.message) {
        alert('Login successful');
        // Redirect or perform further actions after successful login
      }
    } catch (err) {
      setError(err.response.data.error || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome!</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Mot de passe oublié ?</a>
      </div>
    </div>
  );
};

export default Login;
