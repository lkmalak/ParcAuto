import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./loginvalidation";
import axios from "axios";
import "./login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.password === "" && errors.email === "") {
      axios
        .post("http://localhost:3001/login", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/");
          } else {
            alert("no record");
          }
          console.log("success");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="back">
      <div className="header">
        <div className="logo">
          <img srcSet="src/logo.png"/>
          <div className="div-4">ParcAuto</div>
        </div>
        <div className="di">
       <div>Accueil</div>
       <div>Services</div>
       <div>A propos</div>
       <div>Contact</div>        
    </div>
      </div>
      <div className="box ">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <br></br>
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              id="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <p style={{ fontSize: "12px" }}>Mot de passe oublié ?</p>
          <button type="submit" className="btn btn-success">
            Se connecter
          </button>
          <Link to="/addUser" className="btn btn-success">
            ajouter
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
