import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="loginContainer">
      <Navbar />
      <div className="videoContainer">
        <video loop autoPlay muted>
          <source src="\img\Login.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="formContainer">
        <div className="loginTitle">Ingresar</div>
        <div className="inputContainer">
          <input
            value={email}
            placeholder="Correo electrónico"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className="inputContainer">
          <input
            value={password}
            placeholder="Ingresar contraseña"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
            type="password"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>

        <div className="inputContainer">
          <Button
            variant="primary"
            onClick={onButtonClick}
            className="loginButton"
          >
            Ingresar
          </Button>
          <div className="socialIcons">
            <ul className="list-inline">
              <li className="list-inline-item">
                <FaInstagram />
              </li>
              <li className="list-inline-item">
                <FaTwitter />
              </li>
              <li className="list-inline-item">
                <FaFacebook />
              </li>
              <li className="list-inline-item">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
