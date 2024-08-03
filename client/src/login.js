import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./loginvalidation";           // login validation
import axios from "axios";
import "./login.css";           // login page.css with header css
import Atsign from "./Atsign.svg";           // icon @
import Lock from "./Lock.svg";           // icon lock
import Headers from "./header.js";           // headers

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
      <Headers />          
      <div className="box ">           
        <form action="" onSubmit={handleSubmit}>
          <h3>Welcome!</h3>
          <div className="mb-3">
            <div class="wrapper">
              <div class="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="name-input"
                  onChange={handleInput}
                />
                <div className="log">
                  <label className="name-label" htmlFor="email">
                    Email
                  </label>
                  <img className="em" src={Atsign} />
                </div>
                <div class="underline"></div>
              </div>
            </div>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <div class="wrapper">
              <div class="input-data">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="name-input"
                  onChange={handleInput}
                />
                <div className="log">
                  <label className="name-label" htmlFor="password">
                    Mot de passe
                  </label>
                  <img src={Lock} />
                </div>
                <div class="underline"></div>
              </div>
            </div>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <p>Mot de passe oublié ?</p>
          <Link to="/dash"
            type="submit"
            id="butn"
            className="btn btn-success"
          >
            Se connecter
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
