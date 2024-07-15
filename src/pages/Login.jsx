import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
      toast.error("Error en inicio de sesión. Verifica tus credenciales.");
    }
  };

  const handleErrorClick = (message) => {
    toast.error(message);
  };

  return (
    <div className="loginContainer">
      <Navbar />
      <div className="videoContainer">
        <video loop autoPlay muted>
          <source src="/img/Login.mp4" type="video/mp4" />
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
            type="email"
            aria-label="Correo electrónico"
            aria-required="true"
          />
          <label className="errorLabel" htmlFor="email">
            {emailError}
          </label>
        </div>
        <div className="inputContainer">
          <input
            value={password}
            placeholder="Ingresar contraseña"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
            type="password"
            aria-label="Contraseña"
            aria-required="true"
          />
          <label className="errorLabel" htmlFor="password">
            {passwordError}
          </label>
        </div>
        <Button
          variant="primary"
          onClick={onButtonClick}
          className="loginButton"
        >
          Ingresar
        </Button>
        <div className="text-center">
          <p className="notMember">
            ¿No tienes usuario?{" "}
            <Link
              to="#"
              className="footer-link"
              onClick={() =>
                handleErrorClick("Error: ¡El sitio está en construcción!")
              }
            >
              Regístrate
            </Link>
          </p>
          <p className="orSignUp">o ingresar con</p>
          <div className="socialIcons">
            <ul className="list-inline">
              <li className="list-inline-item">
                <FaInstagram
                  onClick={() =>
                    handleErrorClick("Error: ¡El sitio está en construcción!")
                  }
                />
              </li>
              <li className="list-inline-item">
                <FaTwitter
                  onClick={() =>
                    handleErrorClick("Error: ¡El sitio está en construcción!")
                  }
                />
              </li>
              <li className="list-inline-item">
                <FaFacebook
                  onClick={() =>
                    handleErrorClick("Error: ¡El sitio está en construcción!")
                  }
                />
              </li>
              <li className="list-inline-item">
                <FaLinkedin
                  onClick={() =>
                    handleErrorClick("Error: ¡El sitio está en construcción!")
                  }
                />
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
