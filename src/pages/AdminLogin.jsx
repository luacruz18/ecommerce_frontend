import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userReducer";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error en inicio de sesión");
      }

      const { token } = await response.json();
      dispatch(addUser({ token }));
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
    }
  };

  return (
    <>
      {auth.token ? (
        <Navigate to="/dashboard" />
      ) : (
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
      )}
    </>
  );
};

export default AdminLogin;
